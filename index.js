const stopwords = 'a an and at but by for in nor of on or so the to up yet'.split(' ')

function titleCase (str, options) {
  if (!str) return null
  if (!str.length) return ''
  if (!options) options = {}

  const stop_words = options.stopwords || stopwords

  const splitter = /(\s+|[-‑–—])/
  var words = str.split(splitter)

  return words
    .map((word, index) => {
      if (word.match(/\s+/)) return options.keepSpaces ? word : ' '
      if (word.match(splitter)) return word

      if (index === 0) return capitalize(word)

      if (index === words.length - 1) return capitalize(word)
      if (stop_words.includes(word.toLowerCase())) return word.toLowerCase()
      return capitalize(word)
    })
    .join('')
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = titleCase
