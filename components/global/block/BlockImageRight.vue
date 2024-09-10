<template>
  <UiBlock class="section-image-side">
    <div :class="textClasses">
      <div :class="textChildClasses">
        <UiText :text="content.text" inverted />
      </div>
    </div>
    <div ref="container" :class="imageClasses" class="antialiasing">
      <UiImage :image="content.image" class="antialiasing" />
      <div ref="overlay" class="bg-white fit z-10 antialiasing" />
    </div>
  </UiBlock>
</template>

<script setup>
import useScrollClipAnimation from '~/composables/useScrollClipAnimation'
const { targetElement: container, animatedElement: overlay } = useScrollClipAnimation()

const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      type: {
        type: String,
        default: 'landscape',
        validator: (value) => ['landscape', 'portrait'].includes(value),
      },

      align: {
        type: String,
        default: 'top',
        validator: (value) => ['top', 'center', 'bottom'].includes(value),
      },

      text: '',
      image: {
        src: '',
        alt: '',
      },
      mode: 'landscape',
    },
  },
})

// CLASS

// CLASS FOR IMAGE

const imageClasses = computed(() => {
  const classes = ['-mr-7 md:-mr-4 relative']

  if (props.content.type === 'landscape') {
    classes.push('col-span-10 max-lg:order-1')
    classes.push('md:col-span-8 md:col-start-3')
    classes.push('lg:col-span-10')
  }

  if (props.content.type === 'portrait') {
    classes.push('col-span-10 max-lg:order-1')
    classes.push('md:col-span-4')
    classes.push('lg:col-span-6')
  }

  return classes
})

// CLASS FOR TEXT

const textClasses = computed(() => {
  const classes = [' max-lg:pt-7', '']

  if (props.content.type === 'landscape') {
    classes.push('col-span-10 max-lg:order-2')
    classes.push('md:col-span-8 md:col-start-3')
    classes.push('lg:col-span-6 grid-lg-6')
  }

  if (props.content.type === 'portrait') {
    classes.push('col-span-10 max-md:order-2')
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

const textChildClasses = computed(() => {
  const classes = ['col-span-4 col-start-2']

  if (props.content.type === 'landscape') {
    classes.push('lg:col-span-4 lg:col-start-2')
  }
  if (props.content.type === 'portrait') {
    classes.push('lg:col-span-4 lg:col-start-6')
  }

  return classes
})
</script>
