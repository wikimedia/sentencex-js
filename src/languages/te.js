import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'ఎ',
  'బి',
  'సి',
  'డి',
  'ఈ',
  'ఎఫ్',
  'జి',
  'హెచ్',
  'ఐ',
  'జె',
  'కె',
  'ఎల్',
  'ఎం',
  'ఎన్',
  'ఓ',
  'పి',
  'క్యూ',
  'ఆర్',
  'ఎస్',
  'టి',
  'యూ',
  'వి',
  'డబ్ల్యూ',
  'ఎక్స్',
  'వై',
  'జెడ్'
])

export default class Telugu extends BaseLanguage {
  static abbreviations = abbreviations
}
