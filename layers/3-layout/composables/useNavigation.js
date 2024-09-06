export default function () {
  const currentIndex = useState('currentIndex', () => 0)

  const updateCurrentIndex = (index) => {
    currentIndex.value = index
  }

  return {
    updateCurrentIndex,
    currentIndex,
  }
}
