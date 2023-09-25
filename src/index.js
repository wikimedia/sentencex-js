import LANGUAGE_FALLBACKS from './fallbacks.json' assert { type: 'json' }

import languages from './languages/index.js'

function getLanguageClass (language) {
  if (language in languages) {
    return languages[language]
  }

  const fallbacks = LANGUAGE_FALLBACKS[language] || ['en']
  for (const fallbackLanguage of fallbacks) {
    const cls = getLanguageClass(fallbackLanguage)
    if (cls) {
      return cls
    }
  }
}

export default function segment (language, text) {
  const className = getLanguageClass(language)
  // eslint-disable-next-line new-cap
  return new className().segment(text)
}
