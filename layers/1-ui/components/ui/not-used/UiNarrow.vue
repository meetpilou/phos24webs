<template>
  <Component
    :is="tag"
    class="ui-narrow lg:pl-[calc(100%/12*var(--left))] lg:pr-[calc(100%/12*var(--right))]"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    left: {
      type: [Number, String],
      default: 1,
    },
    right: {
      type: [Number, String],
      default: 1,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="postcss" scoped>
.ui-narrow {
  --left: v-bind(left);
  --right: v-bind(right);
}
</style>
