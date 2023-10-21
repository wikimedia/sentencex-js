import BaseLanguage from '../base.js'
import English from './en.js'

export default class Burmese extends BaseLanguage {
  static abbreviations = English.abbreviations
  // See https://en.wiktionary.org/wiki/၏
  static sentenceBreakRegex = new RegExp(
    `(${BaseLanguage.GLOBAL_SENTENCE_TERMINATORS}|၏)+`,
    'g'
  )
}
