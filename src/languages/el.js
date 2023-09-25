import BaseLanguage from '../base.js'
import GLOBAL_SENTENCE_TERMINATORS from './../terminators.js'

export default class Greek extends BaseLanguage {
  static abbreviations = new Set()
  static sentenceBreakRegex = new RegExp(
    `[${GLOBAL_SENTENCE_TERMINATORS.concat([';']).join('')}]+`,
    'g'
  )
}
