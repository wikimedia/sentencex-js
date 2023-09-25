import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'ခင္ဗ်ားနာမည္ဘယ္လိုေခၚလဲ။ င္ေနေကာင္းလား။': ['ခင္ဗ်ားနာမည္ဘယ္လိုေခၚလဲ။', 'င္ေနေကာင္းလား။']
}

describe('Burmese segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('my', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
