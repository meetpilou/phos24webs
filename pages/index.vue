<template>
  <div :data-chapter="key.split('-')[1]" :class="key" v-for="(chapter, key) in data?.chapters" :key="key">
    <TheBookMark v-if="chapter.bookmark" :content="chapter.bookmark" />
    <TheBlockGenerator v-if="chapter?.blocks" :blocks="chapter.blocks" />
  </div>
</template>

<script setup>
const { locale } = useI18n()

const url = `/json/${locale.value}/pages/home.json`

const { data, error } = await useAsyncData('homeData', () => $fetch(url))

if (error.value) {
  console.error('Erreur lors du chargement des données:', error.value)
} else if (!data.value) {
  console.error('Aucune donnée reçue')
}

// usePage(data)
</script>
