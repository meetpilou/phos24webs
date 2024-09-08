<template>
  <div class="footer-text relative">
    <div class="lg:min-h-screen z-10 border-white border-2">
      <div class="w-full flex-end-start p-5">
        <UiFontDin class="text-sm" color="white">
          {{ mol }}
        </UiFontDin>
      </div>
      <div class="grid-cols-8 grid py-20 md:py-28 lg:py-32">
        <UiText :text="text" class="col-span-6 col-start-2" />
      </div>
      <div class="w-full flex-end-start p-5">
        <UiFontDin class="text-sm" color="white">
          {{ phosphate }}
        </UiFontDin>
      </div>
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
  mol: {
    type: String,
    default: '94,971 4 ± 0,001 2 g/mol',
  },
  phosphate: {
    type: String,
    default: 'PO₄³⁻',
  },
})
</script>
