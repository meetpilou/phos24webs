<template>
  <div class="col-span-7 p-8 lg:p-12">
    <UiTitle
      class="!mb-10"
      theme="card"
      tag="p"
      :title="$t('cookies_policy_title')"
    />

    <div>
      <UiText theme="small" :text="common.cookies.policy_text" />

      <template v-if="common.cookies.list">
        <CookieGroupDetails v-for="{ id } in groups" :id="id" :key="id" />
      </template>
    </div>
  </div>
</template>

<script setup>
const { common } = useCommon()
const { groups } = useCookieManager()
</script>
