const stopwords = 'a an and at but by for in nor of on or so the to up yet'
const defaults = stopwords.split(' ')

export function apStyleTitleCase(value, options) {
  const configuration = options || {}

  if (!value) return ''

  const stop = configuration.stopwords || defaults
  const keep = configuration.keepSpaces
  const splitter = /(\s+|[-‑–—])/

  return value
    .split(splitter)
    .map((word, index, all) => {
      if (/\s+/.test(word)) return keep ? word : ' '
      if (splitter.test(word)) return word

      if (
        index !== 0 &&
        index !== all.length - 1 &&
        stop.includes(word.toLowerCase())
      ) {
        return word.toLowerCase()
      }

      return capitalize(word)
    })
    .join('')
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
