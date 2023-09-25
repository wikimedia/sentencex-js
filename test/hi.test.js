import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'सच्चाई यह है कि इसे कोई नहीं जानता। हो सकता है यह फ़्रेन्को के खिलाफ़ कोई विद्रोह रहा हो, या फिर बेकाबू हो गया कोई आनंदोत्सव।':
        [
          'सच्चाई यह है कि इसे कोई नहीं जानता।',
          'हो सकता है यह फ़्रेन्को के खिलाफ़ कोई विद्रोह रहा हो, या फिर बेकाबू हो गया कोई आनंदोत्सव।'
        ]
}

describe('Hindi segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('hi', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
