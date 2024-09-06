<template>
  <UiBlock class="section-text-columns text-black">
    <div class="container-center-14">
      <div :class="innerClasses">
        <div class="col-span-1" v-for="(t, index) in content.texts" :key="`column-${index}`">
          <UiText :text="t.text" inverted />
        </div>
      </div>
    </div>
  </UiBlock>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      texts: [
        {
          text: '',
        },
      ],
    },
  },
})

const innerClasses = computed(() => {
  const classes = [' md:grid md:grid-cols-2']
  if (props.content.texts.length > 1) {
    classes.push('md:gap-14')
  } else {
    classes.push('md:col-span-1 md:gap-3')
  }

  return classes
})
</script>
