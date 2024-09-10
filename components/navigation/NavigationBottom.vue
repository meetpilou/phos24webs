<template>
  <div class="bottom-navigation pointer-events-none" ref="root">
    <div
      class="fixed bottom-20 pb-2 right-0 lg:right-7 z-[999] lg:mix-blend-difference max-lg:w-full max-lg:flex-center-center"
      ref="texts"
    >
      <div class="relative flex-center-center flex-col font-title uppercase leading-none overflow-hidden text-md w-24">
        <span ref="main">{{ $t('button_navigation_text') }}</span>
        <span ref="hidden" aria-hidden="true" class="abs-center">{{ $t('button_navigation_text') }}</span>
      </div>
    </div>
    <button
      class="fixed bottom-12 right-0 lg:right-7 pt-12 z-[1000] pointer-events-auto max-lg:w-full max-lg:flex-center-center"
      ref="button"
      @mouseover="onMouseHover"
      @mouseout="onMouseLeave"
    >
      <div class="flex-center-center gap-[3px] mix-blend-normal w-24">
        <NavigationBottomItem :index="0" />
        <NavigationBottomItem :index="1" />
        <NavigationBottomItem :index="2" move-down />
        <NavigationBottomItem :index="3" />
        <NavigationBottomItem :index="4" move-up />
      </div>
    </button>
    <div
      ref="gradient"
      class="fixed bottom-0 left-0 bg-gradient-to-t from-black/100 to-black/0 w-full h-[20vh] z-[998] lg:hidden pointer-events-none"
    />
  </div>
</template>

<script setup>
const { $gsap, $lenis } = useNuxtApp()

const root = ref(null)
const texts = ref(null)
const button = ref(null)
const gradient = ref(null)

const main = ref(null)
const hidden = ref(null)
const isVisible = ref(true)
const isOpened = ref(false)

let timelineText = null
let timelineShowHide = null

onMounted(() => {
  createTimelines()

  $gsap.set(useElement(main), { y: 20, opacity: 0 })
  $lenis.on('scroll', (e) => {
    if (isOpened.value) return
    if (e.direction === 1) {
      console.log('Scroll Down')
      if (isVisible.value) {
        timelineShowHide.play()
      }
      isVisible.value = false
    } else {
      console.log('Scroll Up')
      if (!isVisible.value) {
        timelineShowHide.tweenTo(0, {
          duration: 0.5,
          onComplete: () => {
            isVisible.value = true
          },
        })
      }
    }
  })
})
const createTextTimeline = () => {
  timelineText = $gsap
    .timeline({ paused: true, ease: 'circ.inOut' })
    .to(useElement(main), {
      duration: 0.6,
      y: 0,
      opacity: 1,
    })
    .to(
      useElement(hidden),
      {
        duration: 0.6,
        y: -20,
        opacity: 0,
      },
      '<',
    )
}

const createTimelines = () => {
  createTextTimeline()
  createShowHideTimeline()
}

const createShowHideTimeline = () => {
  const options = {
    duration: 0.7,
    autoAlpha: 0,
    y: 10,
    ease: 'power2.out',
  }

  timelineShowHide = $gsap
    .timeline({ paused: true, ease: 'power2.inOut' })
    .to(useElement(button), options, 0.1)
    .to(useElement(texts), options, 0.2)
    .to(useElement(gradient), options, 0)
}

const onMouseHover = () => {
  timelineText.play()
}

const onMouseLeave = () => {
  timelineText.reverse()
}
</script>
