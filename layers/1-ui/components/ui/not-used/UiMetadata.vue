<template>
  <div class="mb-4 flex items-baseline gap-3 text-xs font-medium">
    <span v-if="tag" class="bg-black/30 py-0.5 pl-1.5 pr-10">{{ tag }}</span>
    <span v-if="category">{{ category }}</span>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: String,
    default: null,
  },
  tag: {
    type: String,
    default: null,
  },
})
</script>
