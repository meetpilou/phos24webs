export default function () {
  const nuxtApp = useNuxtApp()
  const { setLocaleMessage, locale } = nuxtApp.$i18n

  const common = useState('common', () => ({
    footer: {},
  }))

  const fetchCommon = async (lang) => {
    const url = `/json/${locale.value}/common.json`
    const { data, error } = await useAsyncData('common', () => $fetch(url))
    if (error.value) console.log('Error with common (layout)', error.value)
    if (data.value)
      common.value = {
        ...common.value,
        ...data.value,
      }
  }

  const fetchTranslations = async (lang) => {
    const url = `/json/${locale.value}/translations.json`
    const { data, error } = await useAsyncData('translations', () => $fetch(url))
    if (error.value) console.log('Error with trad (layout)', error.value)
    if (data.value) setLocaleMessage(lang, data.value)
  }

  const fetchGlobalData = async (language) => {
    language ||= locale.value
    fetchCommon(language)
    fetchTranslations(language)
  }

  return {
    common,
    fetchGlobalData,
  }
}
