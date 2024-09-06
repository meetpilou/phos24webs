export default function (date) {
  // DATE COMES IN TIMESTAMP FROM ALGOLIA AND IN ISO8601 FROM JSON
  if (!date) return ''
  if (typeof date === 'number') {
    return new Date(date * 1000)
  }
  return new Date(date)
}
