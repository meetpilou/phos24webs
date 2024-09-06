<template>
  <Component
    :is="component"
    ref="player"
    :key="usedVideo"
    :video="usedVideo"
    :background="background"
    :class="[
      portrait ? 'abs-center h-full w-auto' : 'abs-center h-auto w-full',
    ]"
  />
</template>

<script setup>
const props = defineProps({
  video: {
    type: String,
    required: true,
  },
  videoMobile: {
    type: String,
    default: '',
  },
  background: {
    type: Boolean,
    default: false,
  },
})

const { isDesktop } = useScreen()

const player = ref(null)
const portrait = ref(false)

const isMobile = computed(() => {
  if (!props.videoMobile) return false
  return !isDesktop.value
})
const usedVideo = computed(() => {
  return isMobile.value ? props.videoMobile : props.video
})

const component = computed(() => {
  return props.video.includes('vimeo')
    ? resolveComponent('UiVimeo')
    : resolveComponent('UiYoutube')
})

onMounted(() => {
  useResizeObserver(player.value.$refs.iframe.parentElement, ([entry]) => {
    const { width: w, height: h } = useElementBounding(
      player.value.$refs.iframe,
    )
    const aspect = w.value / h.value
    const { width, height } = entry.contentRect
    const parentAspect = width / height
    portrait.value = parentAspect < aspect
  })
})
</script>
