<template>
  <nav class="the-bookmark sticky z-40 top-0 left-0 right-0 border-b border-[#E5E5E5] text-sm lg:text-xs">
    <div class="bg-white">
      <div class="padding-global">
        <div class="main-grid h-20">
          <div class="col-span-1 lg:col-span-5 flex-start-center">
            <UiFontDin>{{ content.number }}</UiFontDin>
          </div>
          <div class="col-span-9 lg:col-span-11 flex-center-start flex-col">
            <UiFontDin class="uppercase" weight="regular">{{ content.title }}</UiFontDin>
            <UiFontDin class="uppercase" color="gold" weight="regular">{{ content.tagline }}</UiFontDin>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      title: '',
      number: '',
      tagline: '',
    },
  },
})
</script>

<style></style>
