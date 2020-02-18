var test = require('tape')
var ap = require('.')

test('ap-style-title-case', function(t) {
  t.same(ap(), '', 'should return an empty string w/o title')

  t.same(ap('this is a test'), 'This Is a Test', 'should capitalize')

  t.same(
    ap('Thing With     Extra Spaces'),
    'Thing With Extra Spaces',
    'should remove spaces'
  )

  var patterns = [
    ['this is a test', 'This Is a Test'],
    [
      'why sunless tanning is A hot trend',
      'Why Sunless Tanning Is a Hot Trend'
    ],
    [
      'Satin Sheets are a Luxury you Can Afford',
      'Satin Sheets Are a Luxury You Can Afford'
    ],
    [
      'the Dangers Of Hiking Without Proper Shoes',
      'The Dangers of Hiking Without Proper Shoes'
    ],
    ['an hour or so', 'An Hour or So'],
    ['Of the meaning Of Of', 'Of the Meaning of Of'],
    ['Thing With     Extra Spaces', 'Thing With Extra Spaces'],
    ['Thing with     extra spaces', 'Thing With     Extra Spaces', true],
    [
      'Observations of isolated pulsars and disk-fed X-ray binaries.',
      'Observations of Isolated Pulsars and Disk-Fed X-Ray Binaries.'
    ]
  ]

  patterns.forEach(pattern => {
    t.equal(ap(pattern[0], {keepSpaces: pattern[2]}), pattern[1], pattern[1])
  })

  t.end()
})
