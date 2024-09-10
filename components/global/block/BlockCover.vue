<template>
  <section class="section-cover min-h-[200dvh] bg-black relative !pb-0 !pt-0">
    <CoverBar />
    <CoverContent :title="content.title" :text-1="content.text_1" :text-2="content.text_2" />
    <CoverImage :image="content.image" />
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      text_1: '',
      text_2: '',
      image: {
        src: '',
        alt: '',
        width: 1920,
        height: 1080,
      },
    }),
  },
})

// const root = ref(null)
// const sticky = ref(null)

onMounted(() => {
  // const { $gsap } = useNuxtApp()
  // const rootEl = useElement(root)
  // const stickyEl = useElement(sticky)
  // $gsap.to(stickyEl, {
  //   scrollTrigger: {
  //     trigger: rootEl,
  //     start: 'top top',
  //     end: 'bottom bottom',
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: true,
  //   },
  // })
})
</script>

<style></style>
