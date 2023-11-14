import BaseLanguage from '../base.js'
import English from './en.js'
import GLOBAL_SENTENCE_TERMINATORS from './../terminators.js'

const hyTerminators = ['։', '՜', ':'].concat(GLOBAL_SENTENCE_TERMINATORS)
hyTerminators.splice(hyTerminators.indexOf('.'), 1)
const hyTerminatorsRegex = new RegExp(`[${hyTerminators.join('')}]+`, 'g')

export default class Armenian extends BaseLanguage {
  static abbreviations = English.abbreviations
  static sentenceBreakRegex = hyTerminatorsRegex
}
