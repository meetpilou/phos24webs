<template>
  <div class="bottom-navigation pointer-events-none">
    <div class="fixed bottom-20 pb-2 right-7 z-[999] mix-blend-difference w-24">
      <div class="relative flex-center-center flex-col font-title uppercase leading-none overflow-hidden">
        <span ref="main">{{ $t('button_navigation_text') }}</span>
        <span ref="hidden" aria-hidden="true" class="abs-center">{{ $t('button_navigation_text') }}</span>
      </div>
    </div>

    <button
      class="fixed bottom-12 right-7 pt-12 z-[1000] pointer-events-auto w-24"
      @mouseover="onMouseHover"
      @mouseout="onMouseLeave"
    >
      <div class="flex-center-center gap-[3px] mix-blend-normal">
        <NavigationBottomItem :index="0" />
        <NavigationBottomItem :index="1" />
        <NavigationBottomItem :index="2" move-down />
        <NavigationBottomItem :index="3" />
        <NavigationBottomItem :index="4" move-up />
      </div>
    </button>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

const main = ref(null)
const hidden = ref(null)
let timeline = null

onMounted(() => {
  $gsap.set(useElement(main), { y: 20, opacity: 0 })
  createTimeline()
})

const createTimeline = () => {
  timeline = $gsap
    .timeline({ paused: true, ease: 'circ.inOut' })
    .to(useElement(main), {
      duration: 0.4,
      y: 0,
      opacity: 1,
    })
    .to(
      useElement(hidden),
      {
        duration: 0.4,
        y: -20,

        opacity: 0,
      },
      '<',
    )
}

const onMouseHover = () => {
  timeline.play()
}

const onMouseLeave = () => {
  timeline.reverse()
}
</script>
