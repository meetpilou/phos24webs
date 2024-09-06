<template>
  <Component :is="tag" class="px-4 lg:px-10">
    <slot />
  </Component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'section',
  },
})
</script>
