<template>
  <footer class="footer">
    <FooterImage :image="common.footer.image" />
    <FooterText :text="common.footer.text" />
    <div>
      <FooterCredits />
      <FooterPartners />
    </div>
  </footer>
</template>

<script setup>
const { common } = useCommon()
</script>
