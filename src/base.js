import GLOBAL_SENTENCE_TERMINATORS from './terminators.js'

export default class Language {
  static GLOBAL_SENTENCE_BOUNDARY_REGEX = new RegExp(
    `[${GLOBAL_SENTENCE_TERMINATORS.join('')}]+`,
    'g'
  )

  static EXCLAMATION_WORDS = new Set(
    (
      '!Xũ !Kung ǃʼOǃKung !Xuun !Kung-Ekoka ǃHu ǃKhung ǃKu ǃung ǃXo ǃXû ǃXung ' +
      'ǃXũ !Xun Yahoo! Y!J Yum!'
    ).split(' ')
  )

  static quotePairs = {
    '"': '"',
    " '": "'", // Need a space before ' to avoid capturing don't , l'Avv etc
    '«': '»',
    '‘': '’',
    '‚': '‚',
    '“': '”',
    '‛': '‛',
    '„': '“',
    '‟': '‟',
    '‹': '›',
    '《': '》',
    '「': '」'
  }

  static quotesRegexStr = Object.entries(Language.quotePairs)
    .map(([left, right]) => `${left}(\\n|.)*?${right}`)
    .join('|')

  static quotesRegex = new RegExp(`${Language.quotesRegexStr}+`, 'g')

  static parensRegex = /([\\(（<{\\[])(?:\\\1|.)*?[\\)\]}）]/g
  static emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}/g

  static numberedReferenceRegex = /^(\[\d+])+/
  static sentenceBreakRegex = Language.GLOBAL_SENTENCE_BOUNDARY_REGEX
  static abbreviationChar = '.'

  constructor () {
    this.abbreviations = this.constructor.abbreviations
  }

  is_abbreviation (head, tail, seperator) {
    // """
    // Do not break in abbreviations. Example D. John, St. Peter
    // In the case of "This is Dr. Watson", head is "This is D/, tail is " Watson"
    // """
    if (seperator !== this.constructor.abbreviationChar) {
      return false
    }

    const lastWord = this.get_lastword(head)
    if (!lastWord.length) {
      return false
    }

    const isAbbrev =
      this.abbreviations.has(lastWord) ||
      this.abbreviations.has(
        lastWord[0].toLowerCase() + lastWord.slice(1)
      ) ||
      this.abbreviations.has(lastWord.toUpperCase())

    return isAbbrev
  }

  is_exclamation_word (head, tail) {
    return Language.EXCLAMATION_WORDS.has(this.get_lastword(head) + '!')
  }

  get_lastword (text) {
    return text.split(/[\s\\.]+/).slice(-1)[0]
  }

  findBoundary (text, match) {
    const tail = text.slice(match.index + 1)
    const head = text.slice(0, match.index)

    // If next word is numbered reference, expand boundary to that.'
    const numberRefMatch = Language.numberedReferenceRegex.exec(tail)

    if (numberRefMatch) {
      return match.index + 1 + numberRefMatch[0].length
    }

    // Next character is number or lower-case: not a sentence boundary
    if (this.continueInNextWord(tail)) {
      return null
    }

    const seperator = match[0]
    if (this.is_abbreviation(head, tail, seperator)) {
      return null
    }

    if (this.is_exclamation_word(head, tail)) {
      return null
    }

    // Include any closing punctuation and trailing space
    const matchLen = match[0].length
    // print(match_len)
    return match.index + matchLen
  }

  continueInNextWord (textAfterBoundary) {
    return textAfterBoundary.match(/^[0-9a-z]/)
  }

  getSkippableRanges (text) {
    const skippableRanges = []

    // Find matches using quotesRegex and add spans to skippableRanges
    const quotesMatches = text.matchAll(this.constructor.quotesRegex)

    for (const match of quotesMatches) {
      skippableRanges.push([match.index, match.index + match[0].length])
    }

    // Find matches using parensRegex and add spans to skippableRanges
    const parensMatches = text.matchAll(this.constructor.parensRegex)
    for (const match of parensMatches) {
      skippableRanges.push([match.index, match.index + match[0].length])
    }

    // Find matches using emailRegex and add spans to skippableRanges
    const emailMatches = text.matchAll(this.constructor.emailRegex)
    for (const match of emailMatches) {
      skippableRanges.push([match.index, match.index + match[0].length])
    }

    return skippableRanges
  }

  segment (text) {
    const paragraphs = text.split(/(\n{2,})/)
    const sentences = []
    // Iterate over each paragraph.
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i]
      // Initialize a list to store the boundaries of sentences.
      const boundaries = [0]

      // Find all matches of sentence breaks in the paragraph.
      const matches = []
      let match
      while ((match = this.constructor.sentenceBreakRegex.exec(paragraph)) !== null) {
        matches.push(match)
      }

      const skippableRanges = this.getSkippableRanges(paragraph)

      // Iterate over each match of sentence breaks.
      for (let j = 0; j < matches.length; j++) {
        const match = matches[j]
        // Find the boundary of the sentence.
        let boundary = this.findBoundary(paragraph, match)

        // If boundary is null, skip to the next match.
        if (!boundary) {
          continue
        }

        // Check if the boundary is inside a skippable range (quote, parentheses, or email).
        let inRange = false

        for (let sri = 0; sri < skippableRanges.length; sri++) {
          const [skipStart, skipEnd] = skippableRanges[sri]

          if (boundary > skipStart && boundary < skipEnd) {
            if (boundary + 1 === skipEnd && this.isPunctuationBetweenQuotes()) {
              boundary = skipEnd
              inRange = false
            } else {
              inRange = true
            }
            break
          }
        }
        // If in_range is True, skip to the next match.
        if (inRange) {
          continue
        }

        // Add the boundary to the boundaries list.
        boundaries.push(boundary)
      }

      for (let bindex = 0; bindex < boundaries.length; bindex++) {
        // Slice the paragraph using the boundaries to get the sentence.
        const sentence = paragraph.slice(boundaries[bindex], boundaries[bindex + 1])

        // If the sentence has a length, yield the sentence
        // stripped of leading/trailing spaces.
        if (sentence.length) {
          sentences.push(sentence.replace(/^ +| +$/, ''))
        }
      }
    }
    return sentences
  }

  isPunctuationBetweenQuotes () {
    return false
  }
}
