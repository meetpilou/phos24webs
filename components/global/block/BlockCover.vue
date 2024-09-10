<template>
  <section ref="root" class="section-cover min-h-[200dvh] bg-black relative !pb-0 !pt-0">
    <CoverBar />
    <CoverContent :title="content.title" :text-1="content.text_1" :text-2="content.text_2" />
    <CoverImage :image="content.image" />
  </section>
</template>

<script setup>
const root = ref(null)

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

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.to(useElement(root), {
    scrollTrigger: {
      trigger: useElement(root),
      start: 'bottom bottom',
      end: 'bottom+=100% top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  })
})
</script>
