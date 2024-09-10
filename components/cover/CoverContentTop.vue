<template>
  <div class="cover-content-text lg:h-[100dvh] pt-20 lg:pt-[15vh] pb-12">
    <div class="h-full flex-start-start flex-col">
      <div class="flex-center-start flex-auto flex-col h-full gap-12 relative z-10">
        <UiFontDin tag="h1" class="text-6xl uppercase" color="white">
          {{ title }}
        </UiFontDin>
        <UiFontNoto tag="p" class="text-lg" color="white">
          {{ text }}
        </UiFontNoto>
      </div>
      <div class="flex-none mt-10 max-lg:hidden">
        <UiArrowIcon />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  text: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
