export default defineI18nConfig(() => ({
  legacy: false,
  messageResolver: (obj, path) => {
    const trad = obj[path] || ''
    return trad?.replaceAll(/@/g, "{'@'}") || null
  },
}))
