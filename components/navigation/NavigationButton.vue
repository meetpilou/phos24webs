<template>
  <button class="the-navigation-button fixed bottom-12 right-0 z-50">
    <div class="padding-global">
      <div class="flex-start-center flex-col gap-6">
        <UiFontDin color="white" weight="regular" class="mix-blend-difference">
          {{ $t('button_navigation_text') }}
        </UiFontDin>
        <div class="flex-start-center gap-[3px]">
          <NavigationButtonItem :index="0" />
          <NavigationButtonItem :index="1" />
          <NavigationButtonItem :index="2" move-down />
          <NavigationButtonItem :index="3" />
          <NavigationButtonItem :index="4" move-up />
        </div>
      </div>
    </div>
  </button>
</template>

<script setup></script>
