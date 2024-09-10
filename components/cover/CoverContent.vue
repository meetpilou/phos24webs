<template>
  <div class="cover-content">
    <div class="padding-global">
      <div class="main-grid relative z-20">
        <div class="col-span-10 max-lg:-ml-6 max-lg:-mr-6 lg:col-span-5">
          <CoverP2O5 />
        </div>
        <div class="col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 pb-12">
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
