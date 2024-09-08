<template>
  <div class="footer-coyright pt-14 pb-8 bg-black relative z-10">
    <div class="padding-global">
      <UiFontDin tag="p" class="text-xs opacity-50" color="white" weight="regular">
        {{ text }}
      </UiFontDin>
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
