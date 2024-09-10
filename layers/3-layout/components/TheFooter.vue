<template>
  <footer class="footer relative">
    <FooterImage :media="footer.image" class="top-0 left-0 sticky z-0" />

    <div class="pt-12 lg:pt-28 relative z-20">
      <FooterContent :outro="footer.outro" :credits="footer.credits" :partners="footer.partners" />
      <FooterCopyright :text="footer.copyright.text" />
    </div>
  </footer>
</template>

<script setup>
const { common } = useCommon()
const footer = computed(() => common.value.footer)
</script>
