<template>
  <section>
    <div class="py-12 lg:py-28">
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
})

const paddingClass = computed(() => {
  return props.hasPaddingGlobal ? 'padding-global' : ''
})
</script>
