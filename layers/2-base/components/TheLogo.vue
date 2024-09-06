<template>
  <NuxtLinkLocale to="/" class="relative z-0" @click="handleClick">
    <span class="sr-only">Brand</span>
    <img
      class="h-12 w-36 object-contain"
      src="https://dummyimage.com/150x50/1f2028/f9bc47?text=Brand"
      alt="logo"
    />
  </NuxtLinkLocale>
</template>

<script setup>
const { close: closeMobileMenu } = useMobileMenu()
const { close: closeMegaMenu } = useMegaMenu()

const handleClick = () => {
  closeMobileMenu()
  closeMegaMenu()
}
</script>
