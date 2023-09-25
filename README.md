# Sentence segmenter

[![tests](https://github.com/santhoshtr/sentencex-js/actions/workflows/nodejs.yaml/badge.svg)](https://github.com/santhoshtr/sentencex/actions/workflows/nodejs.yaml)
[![npm version](https://img.shields.io/npm/v/sentencex.svg?style=flat)](https://www.npmjs.com/package/sentencex)

A sentence segmentation library with wide language support optimized for speed and utility.

This is a javascript port of [sentencex python library](https://github.com/santhoshtr/sentencex)

## Approach

- If it's a period, it ends a sentence.
- If the preceding token is in the hand-compiled list of abbreviations, then it doesn't end a sentence.

However, it is not 'period' for many languages. So we will use a list of known punctuations that can cause a sentence break in as many languages as possible.

We also collect a list of known, popular abbreviations in as many languages as possible.

Sometimes, it is very hard to get the segmentation correct. In such cases this library is opinionated and prefer not segmenting than wrong segmentation.  If two sentences are accidentally together, that is ok. It is better than sentence being split in middle.
Avoid over engineering to get everything linguistically 100% accurate.

This approach would be suitable for applications like text to speech, machine translation.

Consider this example: `We make a good team, you and I. Did you see Albert I. Jones yesterday?`

The accurate splitting of this sentence is
`["We make a good team, you and I." ,"Did you see Albert I. Jones yesterday?"]`

However, to achieve this level precision, complex rules need to be added and it could create side effects. Instead, if we just don't segment between `I. Did`, it is ok for most of downstream applications.

The sentence segmentation in this library is **non-distructive**. This means, if the sentences are combined together, you can reconstruct the original text. Line breaks, punctuations and whitespaces are preserved in the output.

## Usage

Install the library using

```bash
npm install --save sentencex
```

Then, any text can be segmented as follows.

```javascript
import segment from 'sentencex'

text = `
The James Webb Space Telescope (JWST) is a space telescope specifically designed to conduct infrared astronomy. The U.S. National Aeronautics and Space Administration (NASA) led Webb's design and development")
`
console.log(segment("en", text))

```

The first argument is language code, second argument is text to segment. The `segment` method returns an array of identified sentences.

## Language support

The aim is to support all languages where there is a wikipedia. Instead of falling back on English for languages not defined in the library, a fallback chain is used. The closest language which is defined in the library will be used. Fallbacks for ~244 languages are defined.

## License

MIT license. See [License](./LICENSE)
