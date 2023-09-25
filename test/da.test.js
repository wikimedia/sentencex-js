import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'Hej Verden. Mit navn er Jonas.': ['Hej Verden.', 'Mit navn er Jonas.'],
  'Hvad er dit navn? Mit nav er Jonas.': ['Hvad er dit navn?', 'Mit nav er Jonas.'],
  'De holdt Skt. Hans i byen.': ['De holdt Skt. Hans i byen.'],
  "St. Michael's Kirke er på 5. gade nær ved lyset.":
      ["St. Michael's Kirke er på 5. gade nær ved lyset."]
}

describe('Danish segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('da', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
