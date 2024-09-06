<template>
  <Component :is="tag" :class="classes" class="font-text font-100 leading-normal text-pretty">
    <slot></slot>
  </Component>
</template>

<script setup>
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

<style></style>
