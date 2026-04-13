SHELL := /bin/bash

ifneq (,$(wildcard .env))
include .env
export
endif

.DEFAULT_GOAL := help

OPENCAT_REPO ?=
RELEASES_DIR ?= $(CURDIR)/public/releases
DOWNLOAD_ROOT ?= /tmp
DOWNLOAD_ASSET_PATTERN ?= OpenCat*.zip

APP_NAME ?= OpenCat
DMG_VOLNAME ?= OpenCat Installer
APPCAST_LINK ?= https://opencat.app
DOWNLOAD_URL_PREFIX ?= https://opencat.app/releases/
APPCAST_FILE ?= $(RELEASES_DIR)/versions.xml
APPCAST_EXTRA_ARGS ?=

SPARKLE_BIN_DIR ?=
CREATE_DMG ?= create-dmg
GH ?= gh
DITTO ?= ditto
PLIST_BUDDY ?= /usr/libexec/PlistBuddy

# Override these when replaying a historical release:
#   make release TAG=v2.88.1.1909 APP_PATH=/tmp/2.88.1/OpenCat.app
TAG ?= latest
APP_PATH ?=
VERSION ?=
BUILD ?=
FORCE ?= 0

.PHONY: help release appcast check-release-tools check-appcast-tool
.SILENT: help release appcast check-release-tools check-appcast-tool

help:
	@printf '%s\n' \
		'Targets:' \
		'  make release  Download the latest OpenCat release, create a DMG, and update versions.xml.' \
		'  make appcast  Regenerate public/releases/versions.xml from public/releases/.' \
		'' \
		'Common overrides:' \
		'  OPENCAT_REPO=owner/repo' \
		'  SPARKLE_BIN_DIR=/path/to/Sparkle/bin' \
		'  TAG=v2.88.1.1909' \
		'  APP_PATH=/tmp/2.88.1/OpenCat.app' \
		'  DOWNLOAD_ASSET_PATTERN=OpenCat*.zip' \
		'  FORCE=1'

release: check-release-tools check-appcast-tool
	@set -eu; set -o pipefail; \
	tag="$(TAG)"; \
	if [[ "$$tag" == "latest" ]]; then \
		if ! tag="$$("$(GH)" release view --repo "$(OPENCAT_REPO)" --json tagName --jq .tagName 2>&1)"; then \
			latest_release_error="$$tag"; \
			tag="$$("$(GH)" release list --repo "$(OPENCAT_REPO)" --exclude-drafts --limit 1 --json tagName --jq '.[0].tagName // ""')"; \
			if [[ -z "$$tag" ]]; then \
				echo "Cannot resolve the latest GitHub release from OPENCAT_REPO." >&2; \
				echo "$$latest_release_error" >&2; \
				echo "Check OPENCAT_REPO in .env, or pass TAG=vX.Y.Z.BUILD explicitly." >&2; \
				exit 1; \
			fi; \
		fi; \
	fi; \
	version_build="$$(printf '%s\n' "$$tag" | sed -E 's/.*v?([0-9]+([.][0-9]+){3}).*/\1/')"; \
	if [[ "$$version_build" == "$$tag" && ! "$$version_build" =~ ^[0-9]+[.][0-9]+[.][0-9]+[.][0-9]+$$ ]]; then \
		echo "Cannot parse version/build from release tag: $$tag" >&2; \
		echo "Pass VERSION=x.y.z BUILD=1234, or use a tag like v2.88.1.1909." >&2; \
		exit 1; \
	fi; \
	version="$${version_build%.*}"; \
	build="$${version_build##*.}"; \
	download_root="$(DOWNLOAD_ROOT)"; \
	download_root="$${download_root/#\~/$${HOME}}"; \
	download_dir="$$download_root/$$version"; \
	app_path="$(APP_PATH)"; \
	app_path="$${app_path/#\~/$${HOME}}"; \
	if [[ -z "$$app_path" ]]; then \
		mkdir -p "$$download_dir"; \
		echo "Downloading $$tag to $$download_dir"; \
		"$(GH)" release download "$$tag" --repo "$(OPENCAT_REPO)" --pattern "$(DOWNLOAD_ASSET_PATTERN)" --dir "$$download_dir" --clobber; \
		archive="$$(find "$$download_dir" -maxdepth 1 -type f -name '*.zip' -print | sort | head -n 1)"; \
		if [[ -z "$$archive" ]]; then \
			echo "Cannot find a downloaded zip in $$download_dir. Check DOWNLOAD_ASSET_PATTERN=$(DOWNLOAD_ASSET_PATTERN)." >&2; \
			exit 1; \
		fi; \
		echo "Extracting $$archive"; \
		"$(DITTO)" -x -k "$$archive" "$$download_dir"; \
		app_path="$$(find "$$download_dir" -maxdepth 3 -type d -name '$(APP_NAME)*.app' -print | sort | head -n 1)"; \
	fi; \
	if [[ -z "$$app_path" || ! -d "$$app_path" ]]; then \
		echo "Cannot find OpenCat.app. Pass APP_PATH=/path/to/OpenCat.app." >&2; \
		exit 1; \
	fi; \
	bundle_version="$$("$(PLIST_BUDDY)" -c 'Print :CFBundleShortVersionString' "$$app_path/Contents/Info.plist" 2>/dev/null || true)"; \
	bundle_build="$$("$(PLIST_BUDDY)" -c 'Print :CFBundleVersion' "$$app_path/Contents/Info.plist" 2>/dev/null || true)"; \
	if [[ -n "$$bundle_version" ]]; then \
		version="$$bundle_version"; \
	fi; \
	if [[ -n "$$bundle_build" ]]; then \
		build="$$bundle_build"; \
	fi; \
	if [[ -n "$(VERSION)" ]]; then \
		version="$(VERSION)"; \
	fi; \
	if [[ -n "$(BUILD)" ]]; then \
		build="$(BUILD)"; \
	fi; \
	if [[ -z "$$version" || -z "$$build" ]]; then \
		echo "Cannot determine DMG version. Pass VERSION=x.y.z BUILD=1234." >&2; \
		exit 1; \
	fi; \
	dmg_path="$(RELEASES_DIR)/$(APP_NAME)-$$version.$$build.dmg"; \
	mkdir -p "$(RELEASES_DIR)"; \
	if [[ -e "$$dmg_path" ]]; then \
		if [[ "$(FORCE)" == "1" ]]; then \
			rm -f "$$dmg_path"; \
		else \
			echo "DMG already exists: $$dmg_path" >&2; \
			echo "Use FORCE=1 to overwrite." >&2; \
			exit 1; \
		fi; \
	fi; \
	echo "Creating $$dmg_path from $$app_path"; \
	"$(CREATE_DMG)" --volname "$(DMG_VOLNAME)" --window-size 700 400 --icon "$$(basename "$$app_path")" 200 150 --app-drop-link 500 150 "$$dmg_path" "$$app_path"; \
	echo "Updating appcast: $(APPCAST_FILE)"; \
	sparkle_bin_dir="$(SPARKLE_BIN_DIR)"; \
	sparkle_bin_dir="$${sparkle_bin_dir/#\~/$${HOME}}"; \
	cd "$$sparkle_bin_dir"; \
	./generate_appcast -o "$(APPCAST_FILE)" --link "$(APPCAST_LINK)" --download-url-prefix "$(DOWNLOAD_URL_PREFIX)" $(APPCAST_EXTRA_ARGS) "$(RELEASES_DIR)"

appcast: check-appcast-tool
	@set -eu; set -o pipefail; \
	sparkle_bin_dir="$(SPARKLE_BIN_DIR)"; \
	sparkle_bin_dir="$${sparkle_bin_dir/#\~/$${HOME}}"; \
	cd "$$sparkle_bin_dir"; \
	./generate_appcast -o "$(APPCAST_FILE)" --link "$(APPCAST_LINK)" --download-url-prefix "$(DOWNLOAD_URL_PREFIX)" $(APPCAST_EXTRA_ARGS) "$(RELEASES_DIR)"

check-release-tools:
	@[[ -n "$(OPENCAT_REPO)" ]] || { echo 'Missing OPENCAT_REPO. Export OPENCAT_REPO=owner/repo, put it in .env, or pass it to make.' >&2; exit 1; }
	@[[ "$(OPENCAT_REPO)" != "owner/repo" ]] || { echo 'OPENCAT_REPO is still the owner/repo placeholder. Put the real repository in .env or pass OPENCAT_REPO=...' >&2; exit 1; }
	@command -v "$(GH)" >/dev/null || { echo 'Missing gh. Install GitHub CLI or set GH=/path/to/gh.' >&2; exit 1; }
	@command -v "$(CREATE_DMG)" >/dev/null || { echo 'Missing create-dmg. Install create-dmg or set CREATE_DMG=/path/to/create-dmg.' >&2; exit 1; }
	@command -v "$(DITTO)" >/dev/null || { echo 'Missing ditto. Set DITTO=/path/to/ditto.' >&2; exit 1; }
	@[[ -x "$(PLIST_BUDDY)" ]] || { echo 'Missing PlistBuddy. Set PLIST_BUDDY=/path/to/PlistBuddy.' >&2; exit 1; }

check-appcast-tool:
	@[[ -n "$(SPARKLE_BIN_DIR)" ]] || { echo 'Missing SPARKLE_BIN_DIR. Export SPARKLE_BIN_DIR=/path/to/Sparkle/bin or pass it to make.' >&2; exit 1; }
	@set -eu; \
	sparkle_bin_dir="$(SPARKLE_BIN_DIR)"; \
	sparkle_bin_dir="$${sparkle_bin_dir/#\~/$${HOME}}"; \
	[[ -x "$$sparkle_bin_dir/generate_appcast" ]] || { echo 'Missing Sparkle generate_appcast. Set SPARKLE_BIN_DIR=/path/to/Sparkle/bin.' >&2; exit 1; }
