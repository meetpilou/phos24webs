<template>
  <div class="footer-image">
    <div class="h-screen md:px-3">
      <UiImage :image="image" class="h-full w-full" />
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
