export default function () {
  const showMobileMenu = useState('showMobileMenu', () => false)

  const close = () => (showMobileMenu.value = false)
  const open = () => (showMobileMenu.value = true)
  const toggle = () => (showMobileMenu.value = !showMobileMenu.value)

  return {
    showMobileMenu,
    close,
    open,
    toggle,
  }
}
