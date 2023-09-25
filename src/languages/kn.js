import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'ಎ',
  'ಬಿ',
  'ಸಿ',
  'ಡಿ',
  'ಈ',
  'ಎಫ್',
  'ಜಿ',
  'ಹೆಚ್',
  'ಐ',
  'ಜೆ',
  'ಕೆ',
  'ಎಲ್',
  'ಎಂ',
  'ಎನ್',
  'ಓ',
  'ಪಿ',
  'ಕ್ಯೂ',
  'ಆರ್',
  'ಎಸ್',
  'ಟಿ',
  'ಯೂ',
  'ವಿ',
  'ಡಬಲ್ಯೂ',
  'ಎಕ್ಸ್',
  'ವೈ',
  'ಜೆಡ್'
])

export default class Kannada extends BaseLanguage {
  static abbreviations = abbreviations
}
