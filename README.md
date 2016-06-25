# ap-style-title-case

Convert a string to title case using
[AP](https://en.wikipedia.org/wiki/AP_Stylebook)/[APA](https://en.wikipedia.org/wiki/APA_style)
style.

## The Rules

- Always capitalize the first word, even if it's a stopword
- Always capitalize the last word, even if it's a stopword
- Lowercase these words: `a an and at but by for in nor of on or so the to up yet`

> Many writers make the error of leaving “to be” verbs in lower case. Even though “is,” “are,” “was,” and “be,” are all short words, they should still be capitalized in a title because they are verbs.

> When you write titles that contain prepositions, your word processor will likely tell you that you should leave words like “with,” “about,” and “around” lowercase. Defiantly look past the squiggly line indicating a potential error, and remember that in AP title case, prepositions with four or more letters should be capitalized.

> These rules are the exact same for APA style, the only difference being that AP style does not recommend the use of title case for newspaper headlines, but rather sentence case.

## References

- https://www.bkacontent.com/how-to-correctly-use-apa-style-title-case/
- https://en.wikipedia.org/wiki/AP_Stylebook
- https://en.wikipedia.org/wiki/APA_style
- http://blog.apastyle.org/apastyle/2012/03/title-case-and-sentence-case-capitalization-in-apa-style.html

## Usage

Install and save to your package.json dependencies:

```sh
npm install ap-style-title-case --save
```

Use it:

```js
const titleCase = require('ap-style-title-case')

titleCase('why sunless tanning is A hot trend')
// 'Why Sunless Tanning Is a Hot Trend'
```

## Installation

```sh
npm install ap-style-title-case --save
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha&#39;s spec reporter
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT
