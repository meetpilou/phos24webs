<template>
  <div class="cover-bar absolute top-0 left-0 right-0 z-10">
    <div class="padding-global">
      <div class="relative h-20 main-grid">
        <div class="col-span-5 lg:col-span-5 h-full">
          <div class="flex-start-center lg:flex-start-center h-full">
            <UiFontDin class="text-sm text-white">
              {{ phosphate }}
            </UiFontDin>
          </div>
        </div>
        <div class="col-span-5 lg:col-span-11 h-full">
          <div class="flex-end-center lg:flex-start-center h-full">
            <UiFontDin class="text-sm text-white">
              {{ mol }}
            </UiFontDin>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
