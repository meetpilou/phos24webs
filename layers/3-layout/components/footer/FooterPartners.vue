<template>
  <div class="footer-partners">
    <ul class="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-10">
      <li class="col-span-1">
        <UiFontDin tag="h3" class="text-lg mb-7" color="white">{{ tchak.title }}</UiFontDin>
        <img
          class="max-w-36 lg:max-w-48 max-h-36 object-contain mix-blend-screen"
          src="~/assets/images/partners/tchak.png"
          alt="Logo Tchak"
          width="400"
          height="174"
        />
      </li>
      <li class="col-span-1">
        <UiFontDin tag="h3" class="text-lg mb-1" color="white">{{ nuitnoire.title }}</UiFontDin>
        <img
          class="max-w-36 lg:max-w-48 max-h-36 object-contain -ml-7 -lg:-ml-12 mix-blend-screen"
          src="~/assets/images/partners/nuit_noire.png"
          alt="Logo Nuit Noire"
          width="296"
          height="296"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  tchak: {
    type: Object,
    default: () => ({
      title: 'Diffusion',
    }),
  },
  nuitnoire: {
    type: Object,
    default: () => ({
      title: 'Production',
    }),
  },
})
</script>
