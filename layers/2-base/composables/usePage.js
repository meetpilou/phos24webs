export default function (data) {
  const { t } = useI18n()
  if (data.value) {
    if (data.value.other_languages) {
      const setI18nParams = useSetI18nParams()
      setI18nParams(data.value.other_languages)
    }
    useResolveHead(data.value.metas)
  } else {
    showError({
      statusCode: 404,
      statusMessage: t('error_404'),
    })
  }
}
