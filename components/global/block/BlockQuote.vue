<template>
  <UiBlock class="section-quote">
    <div :class="classes">
      <UiFontNoto tag="blockquote" class="mb-8 text-5xl leading-tight relative">
        <span class="absolute top-0 -left-8 text-5xl text-gold">“</span>
        {{ content.text }}
        <span class="absolute -bottom-14 right-0 text-5xl text-gold">”</span>
      </UiFontNoto>
      <p class="flex-start-start gap-0 flex-col text-sm">
        <UiFontDin tag="span">{{ content.author }}</UiFontDin>
        <UiFontDin tag="cite" class="not-italic" color="gold">{{ content.source }}</UiFontDin>
      </p>
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
      author: '',
      source: '',
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

<style></style>
