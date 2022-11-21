# ap-style-title-case

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Convert a value to [AP][]/[APA][] title case.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`apStyleTitleCase(value[, options])`](#apstyletitlecasevalue-options)
*   [Algorithm](#algorithm)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This small package turns a sentence into title case.

## When should I use this?

You can use this when you have short text of unknown casing and want to display
it in a heading or so.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install ap-style-title-case
```

In Deno with [`esm.sh`][esmsh]:

```js
import {apStyleTitleCase} from 'https://esm.sh/ap-style-title-case@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {apStyleTitleCase} from 'https://esm.sh/ap-style-title-case@1?bundle'
</script>
```

## Use

```js
import {apStyleTitleCase} from 'ap-style-title-case'

console.log(apStyleTitleCase('why sunless tanning is A hot trend'))
// 'Why Sunless Tanning Is a Hot Trend'
```

## API

### `apStyleTitleCase(value[, options])`

Convert a value (`string`) to title case (`string`) using [AP][]/[APA][] style.

##### `options`

Configuration (optional).

###### `options.keepSpaces`

Keep superfluous whitespace (`boolean`, default: `false`).
Whitespace is turned into a space by default.

###### `options.stopwords`

List of stopwords (`Array<string>`, default: see below).
When a lowercased word is included in this list, it will be used as lowercase.
Otherwise words are capitalized.

## Algorithm

*   always capitalize the first word, even if it’s a stop word
*   always capitalize the last word, even if it’s a stop word
*   lowercase these words: `a`, `an`, `and`, `at`, `but`, `by`, `for`, `in`,
    `nor`, `of`, `on`, `or`, `so`, `the`, `to`, `up`, `yet`

> Many writers make the error of leaving `to be` verbs in lower case.
> Even though `is`, `are`, `was`, and `be`, are all short words, they should
> still be capitalized in a title because they are verbs.
>
> When you write titles that contain prepositions, your word processor will
> likely tell you that you should leave words like `with`, `about`, and
> `around` lowercase.
> Defiantly look past the squiggly line indicating a potential error, and
> remember that in AP title case, prepositions with four or more letters should
> be capitalized.
>
> These rules are the exact same for APA style, the only difference being that
> AP style does not recommend the use of title case for newspaper headlines, but
> rather sentence case.

###### References

*   [*How to correctly use AP (and APA) style title case* on
    `bkacontent.com`](https://www.bkacontent.com/how-to-correctly-use-apa-style-title-case/)
*   [*AP Stylebook* on `wikipedia.com`](https://en.wikipedia.org/wiki/AP_Stylebook)
*   [*APA style* on `wikipedia.com`](https://en.wikipedia.org/wiki/APA_style)
*   [*Title case and sentence case capitalization in APA style* on
    `apastyle.org`](http://blog.apastyle.org/apastyle/2012/03/title-case-and-sentence-case-capitalization-in-apa-style.html)

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Options`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/ap-style-title-case.svg

[build]: https://travis-ci.org/words/ap-style-title-case

[coverage-badge]: https://img.shields.io/codecov/c/github/words/ap-style-title-case.svg

[coverage]: https://codecov.io/github/words/ap-style-title-case

[downloads-badge]: https://img.shields.io/npm/dm/ap-style-title-case.svg

[downloads]: https://www.npmjs.com/package/ap-style-title-case

[size-badge]: https://img.shields.io/bundlephobia/minzip/ap-style-title-case.svg

[size]: https://bundlephobia.com/result?p=ap-style-title-case

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: http://zeke.sikelianos.com

[ap]: https://en.wikipedia.org/wiki/AP_Stylebook

[apa]: https://en.wikipedia.org/wiki/APA_style
