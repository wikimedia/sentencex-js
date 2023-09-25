import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'ਏ',
  'ਬੀ',
  'ਸੀ',
  'ਡੀ',
  'ਈ',
  'ਐਫ',
  'ਜੀ',
  'ਐਚ',
  'ਆਈ',
  'ਜੇ',
  'ਕੇ',
  'ਐਲ',
  'ਐਮ',
  'ਐਨ',
  'ਓ',
  'ਪੀ',
  'ਕਿਊ',
  'ਆਰ',
  'ਐਸ',
  'ਟੀ',
  'ਯੂ',
  'ਵੀ',
  'ਡਬਲਯੂ',
  'ਐਕਸ',
  'ਵਾਈ',
  'ਜੇਡ'
])

export default class Punjabi extends BaseLanguage {
  static abbreviations = abbreviations
}
