const test = require('tape')
const titleCase = require('.')

test('titleCase', function (t) {
  const patterns = [
    ['this is a test', 'This Is a Test'],
    ['why sunless tanning is A hot trend', 'Why Sunless Tanning Is a Hot Trend'],
    ['Satin Sheets are a Luxury you Can Afford', 'Satin Sheets Are a Luxury You Can Afford'],
    ['the Dangers Of Hiking Without Proper Shoes', 'The Dangers of Hiking Without Proper Shoes'],
    ['an hour or so', 'An Hour or So']
  ]

  patterns.forEach(pattern => {
    t.equal(titleCase(pattern[0]), pattern[1], pattern[1])
  })
  t.end()
})
