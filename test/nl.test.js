import segment from '../src/index.js'
import assert from 'assert'

const tests = {

  'Hij schoot op de JP8-brandstof toen de Surface-to-Air (sam)-missiles op hem af kwamen. 81 procent van de schoten was raak.':
    [
      'Hij schoot op de JP8-brandstof toen de Surface-to-Air (sam)-missiles op hem af kwamen.',
      '81 procent van de schoten was raak.'
    ],
  '81 procent van de schoten was raak. ...en toen barste de hel los.': ['81 procent van de schoten was raak.', '...', 'en toen barste de hel los.'],

  'Afkorting aanw. vnw.': ['Afkorting aanw. vnw.']

}

describe('Dutch segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('nl', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
