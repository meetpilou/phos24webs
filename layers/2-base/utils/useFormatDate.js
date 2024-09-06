export default function (date, sep = '.') {
  date = new Date(date)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  return `${day}${sep}${month}${sep}${year}`
}
