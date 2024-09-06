<template>
  <div v-if="show" class="the-grid pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-50">
    <div class="h-full border-l-slate-300 border-r-slate-300">
      <div class="padding-global h-full">
        <div class="relative h-full main-grid">
          <div class="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2" />
          <div
            v-for="i in 16"
            :key="i"
            class="h-full bg-slate-300 bg-opacity-30"
            :class="{
              'max-lg:hidden': i > 10,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

Hit CTRL + L on your page to show the grid in the website

<script setup>
const show = ref(false)

const myMethod = (e) => {
  if (e.keyCode === 76 && e.ctrlKey) {
    show.value = !show.value
  }
}

onMounted(() => {
  show.value = false
  window.addEventListener('keyup', myMethod)
})

onUnmounted(() => {
  window.removeEventListener('keyup', myMethod)
})
</script>
