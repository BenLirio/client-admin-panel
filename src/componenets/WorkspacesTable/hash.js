// SUDO ID
export default function hash(str) {
  var hash = 0,
    i,
    chr
  if (str.length === 0) return hash
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0
  }
  return Math.abs(hash)
    .toString()
    .split('')
    .reverse()
    .join('')
    .slice(0, 7)
}
