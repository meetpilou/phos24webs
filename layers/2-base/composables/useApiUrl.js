export default function (lang, type, slug = null) {
  const { cmsUrl } = useUnanimConfig()
  let url = `${cmsUrl}/${lang}/${type}`
  if (slug) url += `/${slug}`
  return url
}
