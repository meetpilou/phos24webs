<template>
  <div v-show="!choiceWasMade" class="fixed inset-0 z-40 h-full w-full bg-black/70">
    <div
      class="absolute bottom-0 right-0 z-40 w-full max-w-md rounded-t-3xl bg-white px-10 pb-10 pt-8 text-black shadow-cookiebar"
    >
      <UiText theme="small" class="opacity-50" :text="$t('cookies_bar_text')" />

      <div class="flex items-center justify-between gap-10 pt-8">
        <NuxtLink :to="openCookiesRoute" class="whitespace-nowrap text-xs font-medium">
          {{ $t('cookies_bar_settings') }}
        </NuxtLink>
        <button class="whitespace-nowrap text-xs font-medium text-gold-500" @click="acceptAllCookies">
          {{ $t('cookies_bar_accept') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { choiceWasMade, acceptAllCookies, openCookiesRoute } = useCookieManager()
</script>
