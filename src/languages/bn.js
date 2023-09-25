import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'এ',
  'বি',
  'সি',
  'ডি',
  'ঈ',
  'এফ',
  'জি',
  'এইচ',
  'আই',
  'জে',
  'কে',
  'এল',
  'এম',
  'এন',
  'ও',
  'পি',
  'কিউ',
  'আর',
  'এস',
  'টি',
  'ইউ',
  'ভি',
  'ডাবলিউ',
  'এক্স',
  'ওয়াই',
  'জেড'
])

export default class Bengali extends BaseLanguage {
  static abbreviations = abbreviations
  constructor () {
    super()
    this.language = 'bn'
  }
}
