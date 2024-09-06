<template>
  <UiBlock class="section-image-left">
    <div :class="imageClasses">
      <UiImage ref="image" :image="content.image" />
    </div>
    <div :class="textClasses">
      <div class="md:col-span-4 md:col-start-2">
        <UiText :text="content.text" inverted />
      </div>
    </div>
    <!-- <div class="col-span-4"></div> -->
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
      align: 'top', // top | center | bottom
      text: '',
      image: {
        src: '',
        alt: '',
      },
      mode: 'landscape',
    },
  },
})

const imageClasses = computed(() => {
  const classes = ['-ml-7 md:-ml-4']

  if (props.content.type === 'landscape') {
    classes.push('col-span-10')
    classes.push('md:col-span-8')
    classes.push('lg:col-span-10')
  }

  if (props.content.type === 'portrait') {
    classes.push('col-span-10')
    classes.push('md:col-span-4')
    classes.push('lg:col-span-6')
  }

  return classes
})

const textClasses = computed(() => {
  const classes = [' max-lg:pt-7']

  if (props.content.type === 'landscape') {
    classes.push('col-span-10')
    classes.push('md:col-span-8')
    classes.push('lg:col-span-6 grid-lg-6')
  }
  if (props.content.type === 'portrait') {
    classes.push('col-span-10')
    classes.push('md:col-span-6 grid-md-6')
    classes.push('lg:col-span-10 grid-lg-10')
  }

  classes.push({
    'flex-start-start': props.content.align === 'top',
    'flex-center-center': props.content.align === 'center',
    'flex-start-end': props.content.align === 'bottom',
  })

  return classes
})
</script>
