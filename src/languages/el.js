import BaseLanguage from '../base.js'

export default class Greek extends BaseLanguage {
  static abbreviations = new Set()
  static sentenceBreakRegex = new RegExp(
    `(${BaseLanguage.GLOBAL_SENTENCE_TERMINATORS}|;)+`,
    'g'
  )
}
