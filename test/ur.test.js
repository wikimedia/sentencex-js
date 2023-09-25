import segment from '../src/index.js'
import assert from 'assert'

const tests = {

  'کیا حال ہے؟ ميرا نام ___ ەے۔ میں حالا تاوان دےدوں؟':
    ['کیا حال ہے؟', 'ميرا نام ___ ەے۔', 'میں حالا تاوان دےدوں؟']

}

describe('Urdu segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('ur', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
