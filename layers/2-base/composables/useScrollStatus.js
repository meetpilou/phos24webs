export default function () {
  const y = ref(0)
  const oldY = ref(0)

  if (process.client) {
    useEventListener(window, 'scroll', () => {
      oldY.value = y.value
      y.value = window.scrollY
    })
  }

  const onTop = computed(() => {
    return y.value < 10
  })

  const scrollingDown = computed(() => {
    return y.value > 30 && y.value - oldY.value > 0
  })

  return {
    y,
    onTop,
    scrollingDown,
  }
}
