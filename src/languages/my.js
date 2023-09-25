import BaseLanguage from '../base.js'
import English from './en.js'
import GLOBAL_SENTENCE_TERMINATORS from './../terminators.js'

export default class Burmese extends BaseLanguage {
  static abbreviations = English.abbreviations
  // See https://en.wiktionary.org/wiki/၏
  static sentenceBreakRegex = new RegExp(
    `[${GLOBAL_SENTENCE_TERMINATORS.concat(['၏']).join('')}]+`,
    'g'
  )
}
