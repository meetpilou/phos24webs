<template>
  <div class="footer-content relative">
    <div class="relative">
      <div class="padding-global">
        <div class="main-grid relative z-10">
          <div class="col-span-8 col-start-2 lg:col-start-5">
            <FooterText :text="outro" />
          </div>
        </div>
        <div class="bg-gradient-to-t from-black/100 to-black/0 fit z-0" />
      </div>
    </div>

    <div class="relative z-10 bg-black">
      <div class="padding-global">
        <div class="main-grid">
          <div class="col-span-8 col-start-2 lg:col-start-5">
            <FooterCredits
              class="mt-24 md:mt-44 mb-24 md:mb-32"
              :title="credits.title"
              :text="credits.text"
              :items="credits.items"
            />
            <FooterPartners :tchak="partners.tchak" :nuit-noire="partners.nuit_noire" />
            <FooterP2O5 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  outro: {
    type: String,
    required: true,
    default: '',
  },
  credits: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      text: '',
      items: [],
    }),
  },
  partners: {
    type: Object,
    required: true,
    default: () => ({
      tchak: '',
      nuit_noire: '',
    }),
  },
})
</script>

<style></style>
