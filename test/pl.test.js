import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'To słowo bałt. jestskrótem.': ['To słowo bałt. jestskrótem.']
}

describe('Polish segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('pl', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
