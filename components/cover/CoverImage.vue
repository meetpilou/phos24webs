<template>
  <div class="cover-image background w-full h-[150dvh] absolute top-0 left-0 right-0 z-0">
    <UiImage ref="image" :image="image" class="h-full w-full object-left-[50%] opacity-40" />
    <div class="bg-gradient-to-t from-black/100 to-black/0 absolute bottom-0 left-0 w-full h-1/2 z-10" />
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
    default: () => ({
      src: '',
      alt: '',
    }),
  },
})
</script>
