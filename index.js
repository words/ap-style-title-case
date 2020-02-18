'use strict'

module.exports = titleCase

const stopwords = 'a an and at but by for in nor of on or so the to up yet'
const defaults = stopwords.split(' ')

function titleCase(str, options) {
  const opts = options || {}

  if (!str) return ''

  const stop = opts.stopwords || defaults
  const keep = opts.keepSpaces
  const splitter = /(\s+|[-‑–—])/

  return str
    .split(splitter)
    .map((word, index, all) => {
      if (word.match(/\s+/)) return keep ? word : ' '
      if (word.match(splitter)) return word

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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
