<template>
  <div class="footer-image">
    <div class="h-screen md:px-3">
      <UiImage ref="image" :image="media" class="h-full w-full" />
    </div>
  </div>
</template>

<script setup>
import useScrollScaleAnimation from '~/composables/useScrollScaleAnimation'
const { targetElement: image } = useScrollScaleAnimation()

defineProps({
  media: {
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
