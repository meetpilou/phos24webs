<template>
  <nav class="ui-language-switcher">
    <ul class="flex gap-3">
      <li v-for="lang in locales" :key="lang.code">
        <NuxtLink
          :to="switchLocalePath(lang.code)"
          class="uppercase text-sm decoration-gold-500 decoration underline-offset-4 font-title font-light"
          :class="[
            locale === lang.code ? 'opacity-100' : 'opacity-30',
            {
              underline: locale === lang.code,
            },
          ]"
        >
          {{ lang.code }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
