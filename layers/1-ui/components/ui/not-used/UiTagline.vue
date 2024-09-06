<template>
  <Component
    :is="tag"
    class="mb-4 font-title text-lg font-medium uppercase tracking-[0.27em] text-gold-500"
    :class="classes"
  >
    <slot>
      <span v-if="text" v-html="text" />
    </slot>
  </Component>
</template>

<script>
const THEMES = {
  small: 'text-base',
  white: 'text-white',
  default: '',
  none: '',
}
</script>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'default',
    validator: (value) => Object.keys(THEMES).includes(value),
  },
  tag: {
    type: String,
    default: 'p',
  },
  noMargin: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [THEMES[props.theme], { 'mb-0': props.noMargin }])
</script>
