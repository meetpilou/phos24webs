export default function useScrollClipAnimation() {
  const { $gsap } = useNuxtApp()

  const targetElement = ref(null)
  const animatedElement = ref(null)

  onMounted(() => {
    if (!targetElement.value || !animatedElement.value) {
      return
    }
    const timeline = $gsap.timeline({
      y: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: useElement(targetElement),
        start: 'top 70%',
      },
    })
    timeline.fromTo(
      useElement(animatedElement),
      { clipPath: 'inset(0% 0px 0px 0%)' },
      { clipPath: 'inset(100% 0px 0px 0%)', duration: 1 },
      0,
    )
  })

  return {
    targetElement,
    animatedElement,
  }
}
