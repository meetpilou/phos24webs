<template>
  <div
    v-show="showManager"
    id="cookies"
    class="fixed inset-0 z-[100] h-full overflow-hidden bg-black"
  >
    <div class="h-full overflow-y-scroll">
      <slot />
    </div>

    <NuxtLink
      class="fixed right-3 top-3 z-20 flex items-center gap-4 lg:right-6 lg:top-6"
      :to="closeCookiesRoute"
    >
      <Icon name="bi:x-lg" size="30" />
    </NuxtLink>
  </div>
</template>

<script setup>
const { closeCookiesRoute, showManager } = useCookieManager()
</script>
