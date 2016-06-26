const stopwords = 'a an and at but by for in nor of on or so the to up yet'.split(' ')

function titleCase (str) {
  if (!str) return null
  if (!str.length) return null
  var words = str.trim().split(/\s+/)

  return words
    .map((word, index) => {
      if (index === 0) return capitalize(word)
      if (index === words.length - 1) return capitalize(word)
      if (stopwords.indexOf(word.toLowerCase()) > -1) return word.toLowerCase()
      return capitalize(word)
    })
    .join(' ')
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = titleCase
