import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'ഇത് ഡോ. ശിവൻ. ഇദ്ദേഹമാണ് ഞാൻ പറഞ്ഞയാൾ': ['ഇത് ഡോ. ശിവൻ.', 'ഇദ്ദേഹമാണ് ഞാൻ പറഞ്ഞയാൾ'],
  'ഇത് മി. കെ. പി. മോഹനൻ': ['ഇത് മി. കെ. പി. മോഹനൻ'],
  'ഇത് പ്രൊ. കെ.പി. മോഹനൻ': ['ഇത് പ്രൊ. കെ.പി. മോഹനൻ'],
  'ഇത് Dr. മോഹനൻ': ['ഇത് Dr. മോഹനൻ']

}

describe('Malayalam segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('ml', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
