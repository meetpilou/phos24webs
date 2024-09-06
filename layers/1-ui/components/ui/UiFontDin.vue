<template>
  <Component
    :is="tag"
    :class="classes"
    class="font-title uppercase leading-none text-pretty hyphens-auto"
    :lang="locale"
  >
    <slot></slot>
  </Component>
</template>

<script setup>
const { locale } = useI18n()
const props = defineProps({
  tag: {
    type: String,
    default: 'span',
  },
  color: {
    type: String,
    default: 'black',
  },
  weight: {
    type: String,
    default: 'light',
  },
})

const classes = {
  'font-light': props.weight === 'light',
  'font-normal': props.weight === 'normal',
  'font-medium': props.weight === 'medium',
  'font-bold': props.weight === 'bold',
  'text-black': props.color === 'black',
  'text-white': props.color === 'white',
  'text-gold': props.color === 'gold',
}
</script>
