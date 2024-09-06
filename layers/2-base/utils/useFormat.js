export default function () {
  const toEuros = (number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(number)
  }

  const toPadded = (number, amount = 2) => {
    return String(number).padStart(amount, '0')
  }

  return {
    toEuros,
    toPadded,
  }
}
