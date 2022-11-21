import assert from 'node:assert/strict'
import test from 'node:test'
import {apStyleTitleCase} from './index.js'

test('ap-style-title-case', function () {
  assert.equal(
    apStyleTitleCase(),
    '',
    'should return an empty string w/o title'
  )

  assert.equal(
    apStyleTitleCase('this is a test'),
    'This Is a Test',
    'should capitalize'
  )

  assert.equal(
    apStyleTitleCase('Thing With     Extra Spaces'),
    'Thing With Extra Spaces',
    'should remove spaces'
  )

  /** @type {Array<[string, string, boolean?]>} */
  const patterns = [
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

  for (const pattern of patterns) {
    assert.equal(
      apStyleTitleCase(pattern[0], {keepSpaces: pattern[2]}),
      pattern[1],
      pattern[1]
    )
  }
})
