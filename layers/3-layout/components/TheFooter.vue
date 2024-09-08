<template>
  <footer ref="root" class="footer relative">
    <FooterImage ref="image" :image="footer.image" class="top-0 left-0 sticky z-0" />

    <div ref="content" class="pt-12 lg:pt-28 relative z-20">
      <FooterContent :outro="footer.outro" :credits="footer.credits" :partners="footer.partners" />
      <FooterCopyright :text="footer.copyright.text" />
    </div>
  </footer>
</template>

<script setup>
const { common } = useCommon()
const footer = computed(() => common.value.footer)

const root = ref(null)
const image = ref(null)
const content = ref(null)

const DOM = computed(() => ({
  rootEl: useElement(root),
  imageEl: useElement(image.value),
  contentEl: useElement(content.value),
}))
</script>
