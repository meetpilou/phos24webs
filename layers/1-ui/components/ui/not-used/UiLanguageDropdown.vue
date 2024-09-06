<template>
  <UiDropdown ref="dropdown" dd-align="right">
    <template #trigger="{ toggle }">
      <button
        type="button"
        class="inline-flex items-center gap-2 whitespace-nowrap text-xs"
        @click="toggle"
      >
        <span class="text-white/50">{{ $t('language') }}</span>
        {{ localeProperties.name }}
        <Icon name="bi:chevron-down" />
      </button>
    </template>

    <ul>
      <li v-for="locale in locales" :key="locale.code" class="group">
        <NuxtLink
          :to="switchLocalePath(locale.code)"
          class="flex h-10 w-full items-center justify-start border-b border-t-black/40 text-xs font-medium hover:underline group-last:border-white"
          :class="{ underline: locale.code === $i18n.locale }"
          @click="handleClick"
        >
          {{ locale.name }}
        </NuxtLink>
      </li>
    </ul>
  </UiDropdown>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
const { localeProperties } = useI18n()

const dropdown = ref(null)

const { locales } = useI18n()
const handleClick = () => {
  dropdown.value.toggleDropdown()
}
</script>
