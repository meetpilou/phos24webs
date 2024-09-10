export default function useScaleAnimation() {
  const { $gsap } = useNuxtApp()

  const targetElement = ref(null)

  onMounted(() => {
    const el = useElement(targetElement)
    if (el) {
      $gsap.fromTo(
        el,
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'power1.out',
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        },
      )
    }
  })
  return {
    targetElement,
  }
}
