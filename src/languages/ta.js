import BaseLanguage from '../base.js'
import English from './en.js'

const vowelSigns = new Set(['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ'])
const vowels = new Set(['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'])
const consonants = new Set([
  'க',
  'ங',
  'ச',
  'ஞ',
  'ட',
  'ண',
  'த',
  'ந',
  'ப',
  'ம',
  'ய',
  'ர',
  'ல',
  'வ',
  'ழ',
  'ள',
  'ற',
  'ன'
])

const consonantVowels = new Set()

for (const consonant of consonants) {
  for (const vowelSign of vowelSigns) {
    consonantVowels.add(consonant + vowelSign)
  }
}

const abbreviations = new Set([
  ...English.abbreviations,
  ...vowels,
  ...consonants,
  ...consonantVowels,
  'ஏ',
  'பி',
  'சி',
  'டி',
  'ஈ',
  'எஃப்',
  'ஜி',
  'ஹேச்',
  'ஐ',
  'ஜே',
  'கே',
  'எல்',
  'எம்',
  'என்',
  'ஓ',
  // "பி",
  'க்யூ',
  'ஆர்',
  'எஸ்',
  // "டி",
  'யூ',
  'வி',
  'டபிள்யூ',
  'எக்ஸ்',
  'வை',
  'ஜெட்'
])

export default class Tamil extends BaseLanguage {
  static abbreviations = abbreviations
  constructor () {
    super()
    this.language = 'ta'
  }
}
