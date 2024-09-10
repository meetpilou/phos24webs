<template>
  <div ref="root" class="group w-full overflow-hidden relative bg-slate-50" :class="parentClass">
    <NuxtImg
      ref="img"
      v-if="image"
      :alt="image.alt"
      :src="image.src"
      :width="image.width"
      :height="image.height"
      :loading="lazy ? 'lazy' : null"
      :class="childClass"
      :placeholder="[image.width, image.height, 90, 25]"
    />
    <div class="bg-gradient-to-t from-black/100 to-black/0 fit z-10" v-if="showGradient" />
  </div>
</template>

<script setup>
defineEmits(['load'])

const props = defineProps({
  image: {
    type: Object,
    default: () => ({
      src: '',
      alt: '',
      width: '',
      height: '',
    }),
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'auto',
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  contain: {
    type: Boolean,
    default: false,
  },
  showGradient: {
    type: Boolean,
    default: false,
  },
})

const root = ref(null)

const parentClass = computed(() => {
  return {
    'bg-white/5': !props.transparent,
    'rounded-lg mask-parent-img': props.rounded && !props.contain,
  }
})

const childClass = computed(() => {
  const classes = ['transition-all duration-700 w-full mask-parent-img']
  if (props.contain) {
    classes.push('object-contain h-auto')
  } else {
    classes.push('object-cover h-full')
  }
  return classes
})
</script>

<style lang="postcss" scoped>
.nuxt-img-placeholder {
  filter: blur(1.5rem); /* Flou pour le placeholder */
  transition: opacity 1s ease-in-out; /* Transition pour le flou */
}

.nuxt-img-loaded {
  opacity: 1; /* Image définitive complètement visible */
}

.nuxt-img-placeholder {
  opacity: 0; /* Placeholder invisible une fois l'image chargée */
}
</style>
