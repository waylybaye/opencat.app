'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import {
  AnimatePresence,
  type MotionProps,
  type Variant,
  motion,
} from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import Image from 'next/image'
import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

const MotionAppScreenBody = motion(AppScreen.Body)

interface CustomAnimationProps {
  isForwards: boolean
  changeCount: number
}

interface ScreenProps {
  animated: boolean
  custom: CustomAnimationProps
  title: string
  image: string
}

interface Feature {
  title: string
  subtitle: string
  content: {
    name: string
    description: string
    icon: string
    image: string
  }[]
}

const maxZIndex = 2147483647

const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

function usePrevious<T>(value: T) {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function ScreenItem({ params }: { params: ScreenProps }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody
        {...(params.animated ? { ...bodyAnimation, custom: params.custom } : {})}
      >
        <Image
          src={params.image}
          width={460}
          height={996}
          alt={params.title}
        />
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function FeaturesDesktop({ params }: { params: { feature: Feature } }) {
  const [changeCount, setChangeCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const prevIndex = usePrevious(selectedIndex)
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  const onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount(changeCount => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {params.feature.content.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <div className="h-8 w-8 text-2xl text-white">
                <span className={feature.icon === 'voice-fill' ? 'i-mingcute-voice-fill' : feature.icon === 'paint-brush-fill' ? 'i-mingcute-paint-brush-fill' : feature.icon === 'chat-2-fill' ? 'i-mingcute-chat-2-fill' : feature.icon === 'translate-fill' ? 'i-mingcute-translate-fill' : ''}></span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left ui-not-focus-visible:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <PhoneFrame padding={false} className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {params.feature.content.map((feature, featureIndex) =>
                selectedIndex === featureIndex
                  ? (
                    <Tab.Panel
                      static
                      key={feature.name + changeCount}
                      className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                    >
                      <ScreenItem
                        params={{
                          animated: true,
                          custom: { isForwards, changeCount },
                          title: feature.name,
                          image: feature.image,
                        }}
                      />
                    </Tab.Panel>
                    )
                  : null,
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile({ params }: { params: { feature: Feature } }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  const slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (const slide of slideRefs.current) {
      if (slide)
        observer.observe(slide)
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {params.feature.content.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={ref => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame padding={false} className="relative mx-auto w-full max-w-[366px]">
                <ScreenItem
                  params={{
                    animated: false,
                    custom: { isForwards: true, changeCount: 0 },
                    title: feature.name,
                    image: feature.image,
                  }}
                />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <div className="h-8 w-8 text-2xl text-white">
                  <span className={feature.icon === 'voice-fill' ? 'i-mingcute-voice-fill' : feature.icon === 'paint-brush-fill' ? 'i-mingcute-paint-brush-fill' : feature.icon === 'chat-2-fill' ? 'i-mingcute-chat-2-fill' : feature.icon === 'translate-fill' ? 'i-mingcute-translate-fill' : ''}></span>
                </div>
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {params.feature.content.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures({ params }: { params: { feature: Feature } }) {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            {params.feature.title}
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            {params.feature.subtitle}
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile params={{
          feature: params.feature,
        }}
        />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop params={{
          feature: params.feature,
        }}
        />
      </Container>
    </section>
  )
}
