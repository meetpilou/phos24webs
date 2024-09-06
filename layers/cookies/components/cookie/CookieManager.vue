<template>
  <CookieBar />

  <CookieModal>
    <div class="lg:grid lg:grid-cols-12 lg:items-start lg:gap-4 lg:p-12">
      <CookieSettings
        :class="
          settingsOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'
        "
      />
      <CookiePolicy />
    </div>
    <button
      class="sticky bottom-0 z-10 flex h-[80px] w-full items-center justify-center border-t bg-black lg:hidden"
      @click="settingsOpen = !settingsOpen"
    >
      {{
        settingsOpen ? $t('cookies_policy_title') : $t('cookies_settings_title')
      }}
    </button>
  </CookieModal>
</template>

<script setup>
const settingsOpen = ref(false)
</script>
