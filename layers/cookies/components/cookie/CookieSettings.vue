<template>
  <div
    class="sticky top-12 col-span-5 flex h-full max-h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto bg-white/10 p-8 transition duration-700 max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-black lg:max-h-[calc(100vh-96px)] lg:rounded-3xl lg:p-12"
  >
    <div>
      <UiTitle
        class="!mb-10"
        theme="card"
        tag="p"
        :title="$t('cookies_bar_settings')"
      />

      <!-- GROUPS -->
      <CookieGroupSettings
        v-for="{ id, editable } in groups"
        :id="id"
        :key="id"
        :editable="editable"
        class="border-b last-of-type:border-none"
      />
    </div>

    <!-- CTAS -->
    <div class="flex-between-center gap-10">
      <NuxtLink
        class="text-sm underline"
        :to="closeCookiesRoute"
        @click="saveUserPreferences"
      >
        {{ $t('cookies_save_btn') }}
      </NuxtLink>
      <NuxtLink
        class="text-sm underline"
        :to="closeCookiesRoute"
        @click="acceptAllCookies"
      >
        {{ $t('cookies_accept_all_btn') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { closeCookiesRoute, acceptAllCookies, saveUserPreferences, groups } =
  useCookieManager()
</script>
