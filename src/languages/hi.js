import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'ए',
  'बी',
  'सी',
  'डी',
  'ई',
  'एफ',
  'जी',
  'एच',
  'आई',
  'जे',
  'के',
  'एल',
  'एम',
  'एन',
  'ओ',
  'पी',
  'क्यू',
  'आर',
  'एस',
  'टी',
  'यू',
  'भी',
  'डब्लू',
  'एक्स',
  'वाई',
  'जेड'
])

export default class Hindi extends BaseLanguage {
  static abbreviations = abbreviations
}
