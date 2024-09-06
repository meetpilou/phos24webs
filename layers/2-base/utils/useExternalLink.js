export default function (link) {
  if (!link) return null
  return /^https?:\/\//.test(link)
}
