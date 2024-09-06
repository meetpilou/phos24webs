<template>
  <div ref="root" class="relative">
    <slot name="trigger" :toggle="toggleDropdown" />
    <Vue3SlideUpDown
      :model-value="opened"
      :class="[sideClasses]"
      class="top-full z-50 translate-y-2 rounded-2xl bg-white text-black shadow-2xl"
    >
      <div class="px-4">
        <slot />
      </div>
    </Vue3SlideUpDown>
  </div>
</template>

<script setup>
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const props = defineProps({
  ddAlign: {
    type: String,
    default: 'left',
    validator: (val) => Object.keys(SIDES).includes(val),
  },
})

const root = ref(null)
const opened = ref(false)

const toggleDropdown = () => {
  opened.value = !opened.value
}
onClickOutside(root, () => (opened.value = false))

const sideClasses = computed(() => SIDES[props.ddAlign])

defineExpose({
  toggleDropdown,
})
</script>

<script>
const SIDES = {
  left: 'absolute left-0',
  right: 'absolute right-0',
  center: 'abs-center-x',
}
</script>
