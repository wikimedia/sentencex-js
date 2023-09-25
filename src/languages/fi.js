import BaseLanguage from '../base.js'

const abbreviations = new Set([
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J', 'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'Å',
  'Ä',
  'Ö',
  // List of titles.
  // These are often followed by upper-case names, but do not indicate sentence breaks
  'alik',
  'alil',
  'amir',
  'apul',
  'apul.prof',
  'arkkit',
  'ass',
  'assist',
  'dipl',
  'dipl.arkkit',
  'dipl.ekon',
  'dipl.ins',
  'dipl.kielenk',
  'dipl.kirjeenv',
  'dipl.kosm',
  'dipl.urk',
  'dos',
  'Dr',
  'erikoiseläinl',
  'erikoishammasl',
  'erikoisl',
  'erikoist',
  'ev.luutn',
  'evp',
  'fil',
  'ft',
  'hallinton',
  'hallintot',
  'hammaslääket',
  'jatk',
  'jääk',
  'kansaned',
  'kapt',
  'kapt.luutn',
  'kenr',
  'kenr.luutn',
  'kenr.maj',
  'kers',
  'kirjeenv',
  'kom',
  'kom.kapt',
  'komm',
  'konst',
  'korpr',
  'luutn',
  'maist',
  'maj',
  'Mr',
  'Mrs',
  'Ms',
  'M.Sc',
  'neuv',
  'nimim',
  'Ph.D',
  'prof',
  'puh.joht',
  'pääll',
  'res',
  'san',
  'siht',
  'suom',
  'sähköp',
  'säv',
  'toht',
  'toim',
  'toim.apul',
  'toim.joht',
  'toim.siht',
  'tuom',
  'ups',
  'vänr',
  'vääp',
  'ye.ups',
  'ylik',
  'ylil',
  'ylim',
  'ylimatr',
  'yliop',
  'yliopp',
  'ylip',
  'yliv',
  // misc - odd period-ending items that NEVER indicate breaks (p.m. does NOT fall
  // into this category - it sometimes ends a sentence)
  'e.g',
  'ent',
  'esim',
  'huom',
  'i.e',
  'ilm',
  'l',
  'mm',
  'myöh',
  'nk',
  'nyk',
  'par',
  'po',
  't',
  'v'
])

export default class Finnish extends BaseLanguage {
  static abbreviations = abbreviations
  static MONTHS = new Set([
    'tammikuu',
    'helmikuu',
    'maaliskuu',
    'huhtikuu',
    'toukokuu',
    'kesäkuu',
    'heinäkuu',
    'elokuu',
    'syyskuu',
    'lokakuu',
    'marraskuu',
    'joulukuu'
  ])

  constructor () {
    super()
    this.language = 'fi'
  }

  continueInNextWord (textAfterBoundary) {
    if (textAfterBoundary.match(/^\W*[0-9a-z]/)) {
      return true
    }

    const nextWord = textAfterBoundary.trim().split(' ')[0]

    if (!nextWord.length) {
      return false
    }
    if (Finnish.MONTHS.has(nextWord) || Finnish.MONTHS.has(nextWord[0].toUpperCase() + nextWord.slice(1))) {
      return true
    }

    return false
  }
}
