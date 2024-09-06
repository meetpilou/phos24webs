export default defineNuxtPlugin((nuxtApp) => {
  // called right before setting a new locale
  nuxtApp.hook('i18n:beforeLocaleSwitch', async ({ newLocale }) => {
    const { fetchGlobalData } = useCommon()
    await fetchGlobalData(newLocale)
  })
})
