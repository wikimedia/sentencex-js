import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'ዓ',
  'ም'
])

export default class Amharic extends BaseLanguage {
  static abbreviations = abbreviations
  continueInNextWord (textAfterBoundary) {
    return textAfterBoundary.match(/^\W*[0-9a-z]/)
  }
}
