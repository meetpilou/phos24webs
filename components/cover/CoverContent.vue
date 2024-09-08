<template>
  <div class="cover-content">
    <div class="padding-global">
      <div class="main-grid relative z-20">
        <div class="col-span-5 max-lg:hidden">
          <CoverP2O5 />
        </div>
        <div class="col-span-6 max-lg:col-start-3">
          <CoverContentTop :title="title" v-if="title && text1" :text="text1" />
          <CoverContentBottom :text="text2" v-if="text2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
  text1: {
    type: String,
    default: '',
  },
  text2: {
    type: String,
    default: '',
  },
})
</script>
