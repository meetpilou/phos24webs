<template>
  <div
    :class="classes"
    class="navigation-button-item w-4 h-4 border border-gold transition-colors duration-700 hover:bg-gold"
    @click="handleClick"
  />
</template>

<script setup>
const { currentIndex, updateCurrentIndex } = useNavigation()

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  moveUp: {
    type: Boolean,
    default: false,
  },
  moveDown: {
    type: Boolean,
    default: false,
  },
})

const active = computed(() => currentIndex.value === props.index)

const classes = computed(() => [
  {
    'bg-gold': active.value,
    'bg-transparent': !active.value,
    'translate-y-full': props.moveDown,
    '-translate-y-full': props.moveUp,
  },
])

const handleClick = () => {
  updateCurrentIndex(props.index)
  console.log('currentIndex', currentIndex.value, active.value)
}
</script>
