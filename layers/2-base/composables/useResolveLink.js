export default function (link) {
  link = unref(link)
  if (!link) return null
  const isExternal = /^https?:\/\//.test(link)
  if (isExternal) return link
  const localePath = useLocalePath()
  link = localePath(link)
  return link
}
