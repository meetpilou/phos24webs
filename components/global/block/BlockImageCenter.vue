<template>
  <UiBlock class="section-image-center">
    <div :class="innerClasses">
      <div class="overflow-hidden relative z-0">
        <UiImage :image="content.image" v-if="content.image" />
      </div>
      <div :class="textClasses">
        <UiText :text="content.text" inverted />
      </div>
    </div>
  </UiBlock>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      type: 'landscape', // landscape | portrait
      image: {
        src: '',
        alt: '',
      },
      text: '',
    },
  },
})

const innerClasses = computed(() => {
  const classes = []

  if (props.content.type === 'landscape') {
    classes.push('container-center-14')
  }

  if (props.content.type === 'portrait') {
    classes.push('container-center-6')
  }
  return classes
})

const textClasses = computed(() => {
  const classes = ['pt-7']

  if (props.content.type === 'landscape') {
    classes.push('lg:w-[70%]')
  }

  if (props.content.type === 'portrait') {
    classes.push('lg:w-[100%]')
  }

  return classes
})
</script>
