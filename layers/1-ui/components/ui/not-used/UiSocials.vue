<template>
  <NuxtLink
    v-for="link in common.socials"
    :key="link.url"
    :to="link.url"
    target="_blank"
    rel="noopener noreferrer nofollow"
    class="transition-colors hover:text-gold-500"
    @click="handleClick(link.type)"
  >
    <!-- :class="hoverColors[link.type]" -->
    <span class="sr-only">{{ link.name }}</span>
    <Icon :name="icons[link.type]" />
  </NuxtLink>
</template>

<script setup>
const { common } = useCommon()
const icons = {
  instagram: 'uil:instagram',
  youtube: 'uil:youtube',
  facebook: 'uil:facebook-f',
  linkedin: 'cib:linkedin-in',
  snapchat: 'cib:snapchat',
  threads: 'simple-icons:threads',
  tiktok: 'cib:tiktok',
  pinterest: 'cib:pinterest',
  twitter: 'ri:twitter-x-fill',
}
// const hoverColors = {
//   instagram: 'hover:text-[#E4405F]',
//   youtube: 'hover:text-[#CD201F]',
//   facebook: 'hover:text-[#1877F2]',
//   linkedin: 'hover:text-[#0A66C2]',
// }

const handleClick = (name) => {
  pushEvent('social_media', {
    social_name: name,
  })
}
</script>
