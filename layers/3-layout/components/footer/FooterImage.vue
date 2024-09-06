<template>
  <div class="footer-image">
    <div class="lg:min-h-screen px-3">
      <UiImage :image="image" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: Object,
    required: true,
    default: () => ({
      src: '',
      alt: '',
      width: 1920,
      height: 1080,
    }),
  },
})
</script>
