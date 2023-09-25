import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'ଏ',
  'ବି',
  'ସି',
  'ଡି',
  'ଈ',
  'ଏଫ',
  'ଜି',
  'ହ୍',
  'ଆଇ',
  'ଜେ',
  'କେ',
  'ଏଲ',
  'ଏମ',
  'ଏନ',
  'ଓ',
  'ପି',
  'କ୍ୟୁ',
  'ଆର',
  'ଏସ',
  'ଟି',
  'ୟୁ',
  'ଭି',
  'ଡବଲ୍ୱ୍',
  'ଏକ୍ସ',
  'ଏବଂ',
  'ଜେଡ'
])

export default class Odia extends BaseLanguage {
  static abbreviations = abbreviations
}
