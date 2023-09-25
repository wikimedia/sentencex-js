import BaseLanguage from '../base.js'

const abbreviations = new Set([
  'إلخ',
  'ا. د',
  'ا.د',
  'ا.ش.ا',
  'ا',
  'ت.ب',
  'ج.ب',
  'ج.م.ع',
  'جم',
  'س.ت',
  'سم',
  'ص.ب.',
  'ص.ب',
  'كج.',
  'كلم.',
  'م.ب',
  'م',
  'ه'

])

export default class Arabic extends BaseLanguage {
  static abbreviations = abbreviations
  constructor () {
    super()
    this.language = 'ar'
  }
}
