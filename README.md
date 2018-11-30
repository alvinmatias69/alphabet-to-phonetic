# Alphabet to Phonetic
Convert alphabetical text to phonetical form. Read [here](http://www.faqs.org/faqs/radio/phonetic-alph/full/) for more information.

## Why?
First of all, yes, I'm totally aware of how trivial this package is. Also I know that there's so many ~~useless~~ npm packages right now that nobody even care anymore. The sole purpose of this package is for me to learn about npm publishing so that in the near future I'll have the general idea on how to publish a npm package.

## What is Phonetic?
Phonetic alphabet is a widely known alphabet that's used in voice communication. This package use NATO phonetic alphabet on its implementation.
| Letter | Phonetic Letter |
|:------:|:----------------|
|a       | alpha           |
|b       | bravo           |
|c       | charlie         |
|d       | delta           |
|e       | echo            |
|f       | foxtrot         |
|g       | golf            |
|h       | hotel           |
|i       | india           |
|j       | juliet          |
|k       | kilo            |
|l       | lima            |
|m       | mike            |
|n       | november        |
|o       | oscar           |
|p       | papa            |
|q       | quebec          |
|r       | romeo           |
|s       | sierra          |
|t       | tango           |
|u       | uniform         |
|v       | victor          |
|w       | whiskey         |
|x       | x-ray           |
|y       | yankee          |
|z       | zulu            |

## Usage
Install this package using your favourit package manager.

npm 
```sh
npm install alphabet-to-phonetic
```
yarn
```sh
yarn add alphabet-to-phonetic
```

Add it to your code.
```js
// es
import atp from 'alphabet-to-phonetic';

// typescript
import * as atp from 'alphabet-to-phonetic';

// commonJs
const atp = require('alphabet-to-phonetic');
```

Use it.
```js
console.log(atp.convert('lorem ipsum'));
// expected 'lima oscar romeo echo mike  india papa sierra uniform mike'
```

## Available Methods

### Convert
Convert alphabet to phonetical form.
```js
atp.convert(text: string): string
```
### Reverse
Convert phonetical to alphabet form.
```js
atp.reverse(text: string): string
```

---

**Matias (2018)**