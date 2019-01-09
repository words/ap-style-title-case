const test = require('tape')
const titleCase = require('.')

test('titleCase', function (t) {
  const patterns = [
    ['this is a test', 'This Is a Test'],
    ['why sunless tanning is A hot trend', 'Why Sunless Tanning Is a Hot Trend'],
    ['Satin Sheets are a Luxury you Can Afford', 'Satin Sheets Are a Luxury You Can Afford'],
    ['the Dangers Of Hiking Without Proper Shoes', 'The Dangers of Hiking Without Proper Shoes'],
    ['an hour or so', 'An Hour or So'],
    ['Of the meaning Of Of', 'Of the Meaning of Of'],
    ['Thing With     Extra Spaces', 'Thing With Extra Spaces'],
    ['Thing with     extra spaces', 'Thing With     Extra Spaces', true],
    ['Observations of isolated pulsars and disk-fed X-ray binaries.', 'Observations of Isolated Pulsars and Disk-Fed X-Ray Binaries.'],
  ]

  patterns.forEach(pattern => {
    t.equal(titleCase(pattern[0], { keepSpaces: pattern[2 ]}), pattern[1], pattern[1])
  })
  t.end()
})
