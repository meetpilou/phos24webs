<template>
  <iframe
    ref="iframe"
    :src="url"
    allow="autoplay"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    title="vimeoPlayer"
  />
</template>

<script setup>
import Player from '@vimeo/player'
const emit = defineEmits(['ready'])

const props = defineProps({
  video: {
    type: String,
    required: true,
  },
  background: {
    type: Boolean,
    default: false,
  },
})

// REFS
const iframe = ref(null)

// STATE
let vimeoPlayer = null // Don't use ref for this!

const staticDefaultOptions = {
  autopause: 1,
  autoplay: 0,
  background: 0,
  controls: 1,
  dnt: 0,
  keyboard: 1,
  loop: 0,
  muted: 0,
  pip: 1,
  playsinline: 0,
  rel: 0,
  showinfo: 0,
}
const staticBgOptions = {
  autopause: 0,
  autoplay: 1,
  background: 1,
  controls: 0,
  dnt: 0,
  keyboard: 0,
  loop: 1,
  muted: 1,
  pip: 0,
  playsinline: 1,
  rel: 0,
  showinfo: 0,
}

const { getVimeoId } = useVideoId()

// COMPUTED
const startTime = computed(() => {
  const parsedUrl = new URL(props.video)
  return parsedUrl.hash
})
const defaultOptions = computed(() => {
  return {
    ...staticDefaultOptions,
    // start: startTime.value,
  }
})
const bgOptions = computed(() => {
  return {
    ...staticBgOptions,
    // start: startTime.value,
  }
})
const url = computed(() => {
  const options = props.background ? bgOptions.value : defaultOptions.value
  const optionsParams = new URLSearchParams(options).toString()
  return `https://player.vimeo.com/video/${getVimeoId(
    props.video,
  )}?${optionsParams}${startTime.value}`
})

// HOOKS
onMounted(() => {
  vimeoPlayer = new Player(useElement(iframe))
  vimeoPlayer.ready().then(() => {
    emit('ready', vimeoPlayer)
  })
})
onBeforeUnmount(() => {
  if (vimeoPlayer) {
    vimeoPlayer.unload()
    vimeoPlayer = null
  }
})

const play = () => {
  if (!vimeoPlayer) return
  vimeoPlayer.play()
}

defineExpose({
  play,
})
</script>
