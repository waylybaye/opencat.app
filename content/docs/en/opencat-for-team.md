---
title: 'OpenCat for Team Deployment Guide'
---

# OpenCat for Team Deployment Guide

## Configure the Cloud

### 1. Prepare a Server
You can launch a cloud server on platforms like AWS, Google Cloud, Digital Ocean, Vultr, Oracle Cloud, etc.

1.1 Log in to the server via SSH
> If you don't know how to log in via SSH, you can ask ChatGPT: How to connect SSH on AWS (replace with your provider name)

1.2 Install Docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### 2. (Optional) HTTPS Configuration

> **Difference between HTTPS and HTTP modes**
> * HTTPS mode automatically applies for and saves HTTPS certificates, requires ports 80 and 443, and requires a domain name.
> * HTTP mode can directly provide services or be used in conjunction with other services, such as using nginx as a proxy.
> * HTTPS mode is more secure, while HTTP mode may be susceptible to content interception by intermediaries.

Resolve the domain name to the IP address of the VPS (you can ask ChatGPT: How to resolve a domain name to an IP address)

### 3. Run OpenCat for Team

![](/img/docs/create-team.png)

1. If you want to run in HTTPS mode, after entering the domain name in OpenCat, a command will be automatically generated. If you choose HTTP mode, selecting HTTP will directly generate a command.
2. Copy and paste the command starting with `docker run` displayed in OpenCat into the SSH window to run it.
> If you want to change the port for running in HTTP mode, simply modify `-p 80:80` to `-p port:80`.
3. If you selected HTTPS mode, the Domain input box for connecting to the service will automatically synchronize with the domain name you entered above. If you selected HTTP mode, you need to manually enter the IP or domain name starting with http.
4. Click "Create Team" in OpenCat, and once successful, you will be automatically redirected to the Team page.
5. In the Keys section, click the plus sign to create a Key.

> Note: If you are using AWS, Azure, GCP, etc., make sure that the security group allows access to ports 80/443.

## Managing and Inviting Members

![](/img/docs/invite-user.png)

1. The root user is the administrator and the only one who can view and manage team members.
2. Create a user, click the three dots next to it, and select "Invite".
3. Send the download link of the App to the person and have them download the App.
4. Send the text starting with `opencat://team/join` to the person and have them open it in Safari. After opening, they will be prompted whether to open it in "OpenCat" and then asked if they want to join the team.
5. Once the user joins the team, they can start chatting directly.

## Technical Details

### How to Upgrade the Server

#### 1. Upgrade the image to the latest version
```bash
docker pull bayedev/opencatd
```

#### 2. Back up the old container
```bash
docker stop opencatd
docker rename opencatd opencatd_bak
```

#### 3. Run the new image
```bash
docker run ...Run the previous command again...
```

If you can't find the previous command, there are two ways:
* Press `Ctrl-R` to enter search history mode, type `docker run` one by one until you see the previous command, then press `→` to confirm and execute it.
* Keep pressing `↑` until you see the previous `docker run ...` command, confirm it is correct, and then press Enter to execute it.

Now open `OpenCat` and chat for a while, then open the Team page, and you should be able to see usage statistics.

#### 4. After confirming that everything is running smoothly, delete the old backup.
```bash
docker rm opencatd_bak
```

### How to Backup and Restore Data

The `cat.db` file under `/srv/data` contains all important data. To backup the data, simply backup this file. If you want to start over, just delete this file and `docker restart opencatd`.
The `usage.db` file under `/srv/data` contains all usage statistics.

### Docker Environment Variables

* `PORT` specifies the port for HTTP mode.
* `API_DOMAIN=https://xx.com` If you want to connect to another OpenAI proxy, use this variable to override the default `https://api.openai.com`.

### Team Workflow

1. When creating a team for the first time, a root account will be generated. The client will save the token for this root account, allowing the client to manage the server.
2. If the client needs to connect to the server again and manage the data, they need to reset the root token and then enter the token to connect.

### Supported Commands
1. `docker exec opencatd opencatd root_token` to get the root token.
2. `docker exec opencatd opencatd reset_root` to reset the root token.
