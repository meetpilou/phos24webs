<template>
  <div class="cover-content-bottom lg:h-[100dvh]">
    <div class="flex-end-start flex-col h-full gap-12 relative z-10">
      <UiFontNoto class="text-lg" color="white">
        {{ text }}
      </UiFontNoto>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
