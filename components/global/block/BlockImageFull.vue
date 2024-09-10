<template>
  <UiBlock class="section-image-full">
    <div class="container-full">
      <UiImage ref="image" class="m-auto" :image="content.image" />
    </div>
  </UiBlock>
</template>

<script setup>
import useScrollScaleAnimation from '~/composables/useScrollScaleAnimation'
const { targetElement: image } = useScrollScaleAnimation()

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
