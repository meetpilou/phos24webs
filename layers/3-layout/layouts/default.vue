<template>
  <div class="app bg-transparent">
    <TheHead />
    <TheHeader />
    <NavigationBottom />

    <main class="overflow-clip">
      <slot />
    </main>

    <TheFooter />
    <TheGrid />
    <!-- <CookieManager v-if="ready" /> -->
  </div>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/parallax'

import Lenis from 'lenis'
import { register } from 'swiper/element/bundle'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

register()
const { $gsap } = useNuxtApp()
const { fetchGlobalData } = useCommon()
// const { init: initCookies, ready } = useCookieManager()

await fetchGlobalData()

// if (window.errorMessage || window.errorStatus) {
//   const statusCode = window.errorStatus
//   const message = window.errorMessage
//   delete window.errorMessage
//   delete window.errorStatus
//   throw createError({
//     fatal: true,
//     message,
//     statusCode,
//   })
// }

onMounted(() => {
  // initCookies()

  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  $gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  $gsap.ticker.lagSmoothing(0)

  if (process.env.NODE_ENV === 'production') {
    console.log(
      '%cUS©24 created and crafted by unanim.studio%c ↳ Passionate studio, dedicated to stimulating business growth through creative, customized digital solutions.',
      'color: #121212; background-color: #DBFDBA; padding: 10px; display:inline-block;',
      'color: white; background-color: #121212; padding: 10px; display:inline-block;',
    )
    console.log(
      '%c(WEBSITE)%chttps://unanim.studio',
      'color: #121212; padding: 10px; text-decoration: none; display:inline-block;',
      'color: #DBFDBA; padding: 10px; text-decoration: none; display:inline-block;',
    )
  }
})
</script>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  @apply transition duration-500;
}
.page-enter-active {
  @apply ease-out-cubic;
}
.page-leave-active {
  @apply ease-in-cubic;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
  filter: blur(1rem);
}
</style>
