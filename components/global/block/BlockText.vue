<template>
  <UiBlock class="section-text text-black">
    <div :class="classes">
      <UiText :text="content.text" inverted />
    </div>
  </UiBlock>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      text: '',
      title: '',
      mode: 'center', // center, left, right, full
    },
  },
})

const classes = computed(() => {
  return {
    'container-center-6': props.content.mode === 'center',
    'container-center-14': props.content.mode === 'full',
    'container-left-6': props.content.mode === 'left',
    'container-right-6': props.content.mode === 'right',
  }
})
</script>
