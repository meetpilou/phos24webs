<template>
  <div class="mb-6 pb-6">
    <div class="flex-between-center mb-3">
      <UiTitle theme="link" tag="p">
        {{ $t(`cookies_${id}_title`) }}
      </UiTitle>
      <UiSwitcher
        v-if="editable"
        v-model="cookies[id]"
        :name="`cookie-${id}`"
        :disabled="!editable"
      />
      <p v-else class="font-title uppercase tracking-wider">Always active</p>
    </div>

    <UiText theme="small" :text="$t(`cookies_${id}_description`)" />
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
})
const { cookies } = useCookieManager()
</script>
