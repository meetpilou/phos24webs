<template>
  <iframe
    :id="uid"
    ref="iframe"
    :src="url"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
    allow="autoplay"
    title="youtubePlayer"
  />
</template>

<script setup>
const emit = defineEmits(['ready'])
const uid = String(getCurrentInstance().uid)

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

// STATE
let youtubePlayer = null // Don't use ref for this!

const { locale } = useI18n()

const staticDefaultOptions = {
  autoplay: 0,
  controls: 1,
  disablekb: 1,
  enablejsapi: 1,
  fs: 1,
  hl: locale.value,
  loop: 0,
  modestbranding: 1,
  mute: 0,
  pip: 1,
  playsinline: 0,
  rel: 0,
  showinfo: 0,
}
const staticBgOptions = {
  autoplay: 1,
  controls: 0,
  disablekb: 0,
  enablejsapi: 1,
  fs: 0,
  hl: locale.value,
  loop: 1,
  mute: 1,
  modestbranding: 1,
  pip: 0,
  playsinline: 1,
  rel: 0,
  showinfo: 0,
}

// COMPUTED
const id = computed(() => {
  const { getYoutubeId } = useVideoId()

  return getYoutubeId(props.video)
})
const startTime = computed(() => {
  const parsedUrl = new URL(props.video)
  const startTime = parsedUrl.searchParams.get('t')
  return startTime
})

const defaultOptions = computed(() => {
  return {
    ...staticDefaultOptions,
    playlist: id.value,
    start: startTime.value,
  }
})
const bgOptions = computed(() => {
  return {
    ...staticBgOptions,
    playlist: id.value,
    start: startTime.value,
  }
})

const url = computed(() => {
  const options = props.background ? bgOptions.value : defaultOptions.value
  const optionsParams = new URLSearchParams(options).toString()
  return `https://www.youtube.com/embed/${id.value}?${optionsParams}`
})

// HOOKS
onMounted(() => {
  window.onYouTubeIframeAPIReady = () => {
    const options = props.background ? bgOptions : defaultOptions
    youtubePlayer = new window.YT.Player(uid, {
      videoId: id.value,
      playerVars: options,
      events: {
        onReady: (_) => {
          emit('ready', youtubePlayer)
        },
      },
    })
  }

  const tag = document.createElement('script')
  tag.defer = true
  tag.async = true
  tag.src = 'https://www.youtube.com/iframe_api'
  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
})

onBeforeUnmount(() => {
  if (!youtubePlayer) return
  youtubePlayer.destroy()
  youtubePlayer = null
})

const play = () => {
  if (!youtubePlayer) return
  youtubePlayer.playVideo()
}

defineExpose({
  play,
})
</script>
