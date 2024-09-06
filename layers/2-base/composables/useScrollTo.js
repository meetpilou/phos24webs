export default function (selector, offset = 100) {
  const element = document.querySelector(selector)
  if (!element) return false
  const { top } = element.getBoundingClientRect()
  const elTop = top + window.scrollY - offset
  document.documentElement.scrollTo({
    top: elTop,
    behavior: 'smooth',
  })
  return true
}
