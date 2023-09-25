import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'እንደምን አለህ፧መልካም ቀን ይሁንልህ።እባክሽ ያልሽዉን ድገሚልኝ።': ['እንደምን አለህ፧', 'መልካም ቀን ይሁንልህ።', 'እባክሽ ያልሽዉን ድገሚልኝ።']
}

describe('Amharic segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('am', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
