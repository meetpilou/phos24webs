<template>
  <div class="" :class="{ 'border-t last:border-b': border }">
    <slot name="trigger" :toggle="toggle" :active="active">
      <button
        v-if="trigger"
        type="button"
        class="title flex min-h-[80px] w-full items-center justify-between gap-8 py-6 text-left text-2xl"
        @click="toggle"
      >
        {{ trigger }}

        <Icon
          class="flex-shrink-0 transition duration-500"
          name="bi:chevron-down"
          :class="{ '-scale-y-100 text-gold-500': active }"
          :size="border ? '20' : '16'"
        />
      </button>
    </slot>

    <Vue3SlideUpDown :model-value="active">
      <slot />
    </Vue3SlideUpDown>
  </div>
</template>

<script setup>
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const props = defineProps({
  trigger: {
    type: String,
    default: '',
  },
  opened: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
  },
})

const active = ref(false)

const toggle = () => {
  active.value = !active.value
}

onMounted(() => {
  active.value = props.opened
})
</script>
