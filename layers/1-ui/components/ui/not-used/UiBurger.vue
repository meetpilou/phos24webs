<template>
  <span class="relative h-2.5 w-7 overflow-hidden">
    <span
      class="abs-center-x js-burger-line top-0 block h-0.5 w-full bg-current transition-all"
      :class="{ 'abs-center rotate-[14deg]': active }"
    />
    <span
      class="abs-center-x js-burger-line bottom-0 block h-0.5 w-full bg-current transition-all"
      :class="{ 'abs-center rotate-[-14deg]': active }"
    />
  </span>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
</script>
