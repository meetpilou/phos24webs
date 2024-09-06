<template>
  <div
    v-if="common.cookies.list.filter((item) => item.type === id).length > 0"
    class="mt-16"
  >
    <UiTitle class="!mb-4" theme="topic" tag="p">{{
      $t(`cookies_${id}_title`)
    }}</UiTitle>

    <UiText theme="small" :text="$t(`cookies_${id}_description`)" />

    <div class="mt-4 w-full overflow-x-auto">
      <table
        v-if="common.cookies.list.filter((item) => item.type === id).length > 0"
        class="w-full border"
      >
        <thead>
          <tr>
            <th class="border px-3 py-1">
              {{ $t('cookies_list_title_name') }}
            </th>
            <th class="border px-3 py-1">
              {{ $t('cookies_list_title_date') }}
            </th>
            <th class="border px-3 py-1">
              {{ $t('cookies_list_title_purpose') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in common.cookies.list.filter(
              (item) => item.type === id,
            )"
            :key="item.name"
          >
            <td class="border px-3 py-1 text-sm">
              <a v-if="item.url" :href="item.url" target="_blank">
                {{ item.name }}
              </a>
              <span v-else>{{ item.name }}</span>
            </td>
            <td class="border px-3 py-1">
              <UiText theme="small" :text="item.expiration" />
            </td>
            <td class="border px-3 py-1">
              <UiText theme="small" :text="item.description" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { common } = useCommon()
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>
