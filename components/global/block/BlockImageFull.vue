<template>
  <UiBlock class="section-image-full">
    <div class="container-full">
      <UiImage :image="content.image" />
    </div>
  </UiBlock>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      image: {
        src: '',
        alt: '',
        width: 1920,
        height: 1080,
      },
    },
  },
})
</script>
