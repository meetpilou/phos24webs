<template>
  <Transition
    :enter-active-class="`${duration} ease-in-out-quad`"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    :leave-active-class="`${duration} ease-in-out-quad`"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot />
  </Transition>
</template>

<script>
const DURATIONS = {
  100: 'duration-100',
  150: 'duration-150',
  200: 'duration-200',
  300: 'duration-300',
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000',
}
</script>

<script setup>
const props = defineProps({
  duration: {
    type: [String, Number],
    default: 500,
    validator: (value) => Object.keys(DURATIONS).includes(String(value)),
  },
})

const duration = computed(() => DURATIONS[String(props.duration)])
</script>
