<template>
  <Component
    :is="tag"
    :class="[
      showBackground
        ? 'inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full'
        : '',
      !hasColor ? ' text-black' : '',
    ]"
  >
    <Icon :name="name" :size="size" />
  </Component>
</template>

<script setup>
defineProps({
  hasColor: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  showBackground: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    required: false,
    default: '20',
  },
  tag: {
    type: String,
    default: 'div',
  },
})
</script>
