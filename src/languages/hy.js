import BaseLanguage from '../base.js'
import English from './en.js'

// Remove '.' but add ['։', '՜', ':']
const hyTerminators = BaseLanguage.GLOBAL_SENTENCE_TERMINATORS.replace('\\u002e', '\\u003a\\u055c\\u0589')
const hyTerminatorsRegex = new RegExp(`(${hyTerminators})+`, 'g')

export default class Armenian extends BaseLanguage {
  static abbreviations = English.abbreviations
  static sentenceBreakRegex = hyTerminatorsRegex
}
