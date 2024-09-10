<template>
  <div class="grid grid-cols-1">
    <Component
      v-for="(block, index) in blocks"
      :key="`${block.type}_${index}`"
      :is="block.type"
      :content="block.content"
    />
  </div>
</template>

<script setup>
defineProps({
  blocks: {
    type: Array,
    required: true,
  },
})
</script>
<style lang="postcss">
section:first-of-type {
  @apply pt-2 lg:pt-28;
}
section:last-of-type {
  @apply pb-2 lg:pb-28;
}
</style>
