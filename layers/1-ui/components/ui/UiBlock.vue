<template>
  <section class="overflow-clip bg-white">
    <div :class="{ 'py-12 lg:py-28': !removePadding }">
      <div :class="paddingClass">
        <div class="main-grid">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  hasPaddingGlobal: {
    type: Boolean,
    default: true,
  },
  removePadding: {
    type: Boolean,
    default: false,
  },
})

const paddingClass = computed(() => {
  return props.hasPaddingGlobal ? 'padding-global' : ''
})
</script>
