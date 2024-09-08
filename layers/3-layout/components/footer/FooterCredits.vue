<template>
  <div class="footer-credits">
    <UiFontDin class="text-lg mb-6" tag="h3" color="white" weight="demi">{{ title }}</UiFontDin>
    <ul class="text-sm mb-10">
      <UiFontDin
        tag="li"
        color="white"
        weight="regular"
        class="mb-5 leading-normal"
        v-for="(item, index) in items"
        :key="`item-${index}`"
      >
        <span>{{ item.label }}:&nbsp;</span>
        <strong class="font-600">{{ item.value }}</strong>
      </UiFontDin>
    </ul>
    <UiFontDin tag="p" color="white" weight="regular" class="text-sm leading-normal" v-if="text">{{ text }}</UiFontDin>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
