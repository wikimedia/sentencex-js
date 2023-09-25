import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'Με συγχωρείτε· πού είναι οι τουαλέτες; Τις Κυριακές δε δούλευε κανένας. το κόστος του σπιτιού ήταν £260.950,00.':
  [
    'Με συγχωρείτε· πού είναι οι τουαλέτες;',
    'Τις Κυριακές δε δούλευε κανένας.',
    'το κόστος του σπιτιού ήταν £260.950,00.'
  ]
}

describe('Greek segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('el', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
