<template>
  <section class="section-cover min-h-[200dvh] bg-black relative !pb-12 !pt-0">
    <CoverBar />
    <CoverContent :title="content.title" :text-1="content.text_1" :text-2="content.text_2" />
    <CoverImage :image="content.image" />
    <CoverP2O5 />
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
</script>

<style></style>
