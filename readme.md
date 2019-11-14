# ap-style-title-case

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Convert a value to title case using [AP][]/[APA][] style.

## Install

[npm][]:

```bash
npm install ap-style-title-case
```

## Use

```js
var titleCase = require('ap-style-title-case')

console.log(titleCase('why sunless tanning is A hot trend'))
// 'Why Sunless Tanning Is a Hot Trend'
```

## API

### `apStyleTitleCase(value[, options])`

Convert a value (`string`) to title case (`string`) using [AP][]/[APA][] style.

*   `options.keepSpaces` (`boolean`, default: `false`)
    — Superfluous whitespace is ignored by default, turn this on to allow it
*   `options.stopwords` (`Array.<string>`, default: see list below)
    — Lowercase the given stop words instead of the defaults

## The Rules

*   Always capitalize the first word, even if it’s a stop word
*   Always capitalize the last word, even if it’s a stop word
*   Lowercase these words: `a an and at but by for in nor of on or so the to up
    yet`

> Many writers make the error of leaving “to be” verbs in lower case.
> Even though “is,” “are,” “was,” and “be,” are all short words, they should
> still be capitalized in a title because they are verbs.
>
> When you write titles that contain prepositions, your word processor will
> likely tell you that you should leave words like “with,” “about,” and “around”
> lowercase.
> Defiantly look past the squiggly line indicating a potential error, and
> remember that in AP title case, prepositions with four or more letters should
> be capitalized.
>
> These rules are the exact same for APA style, the only difference being that
> AP style does not recommend the use of title case for newspaper headlines, but
> rather sentence case.

## References

*   <https://www.bkacontent.com/how-to-correctly-use-apa-style-title-case/>
*   <https://en.wikipedia.org/wiki/AP_Stylebook>
*   <https://en.wikipedia.org/wiki/APA_style>
*   <http://blog.apastyle.org/apastyle/2012/03/title-case-and-sentence-case-capitalization-in-apa-style.html>

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/ap-style-title-case.svg

[build]: https://travis-ci.org/words/ap-style-title-case

[downloads-badge]: https://img.shields.io/npm/dm/ap-style-title-case.svg

[downloads]: https://www.npmjs.com/package/ap-style-title-case

[size-badge]: https://img.shields.io/bundlephobia/minzip/ap-style-title-case.svg

[size]: https://bundlephobia.com/result?p=ap-style-title-case

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com

[ap]: https://en.wikipedia.org/wiki/AP_Stylebook

[apa]: https://en.wikipedia.org/wiki/APA_style
