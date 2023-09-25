import BaseLanguage from '../base.js'
import English from './en.js'

const abbreviations = new Set([
  ...English.abbreviations,
  'એ',
  'બી',
  'સી',
  'ડી',
  'ઈ',
  'એફ',
  'જી',
  'એચ',
  'આઈ',
  'જે',
  'કે',
  'એલ',
  'એમ',
  'એન',
  'ઓ',
  'પી',
  'ક્યૂ',
  'આર',
  'એસ',
  'ટી',
  'યૂ',
  'વી',
  'ડબલ્યૂ',
  'એક્સ',
  'વાય',
  'જેડ'
])

export default class Gujarati extends BaseLanguage {
  static abbreviations = abbreviations
}
