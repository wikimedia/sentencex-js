import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'ഡോ', // Dr
  'Dr',
  'പ്രൊ', // Prof
  'പ്രൊഫ', // Prof
  'മി', // Mr, or Minister
  'ശ്രീ', // Formal addressing - male
  'ശ്രീമതി', // Formal addressing - female
  'ബഹു', // Respected
  // Transliteration of English alphabets
  'എ',
  'ബി',
  'സി',
  'ഡി',
  'എഫ്',
  'ജി',
  'എച്',
  'എച്ച്',
  'ഐ',
  'ജെ',
  'കെ',
  'എൽ',
  'എം',
  'എൻ',
  'ഒ',
  'ഓ',
  'പി',
  'ക്യു',
  'ക്യൂ',
  'ആർ',
  'എസ്',
  'ടി',
  'യു',
  'യൂ',
  'വി',
  'ഡബ്ല്യു',
  'ഡബ്ള്യു',
  'എക്സ്',
  'വൈ',
  'ഇസഡ്'
])

export default class Malayalam extends BaseLanguage {
  static abbreviations = abbreviations
}
