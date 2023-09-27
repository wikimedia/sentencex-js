import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'ਸਰੋਜਿਨੀ ਨਾਇਡੂ ਦਾ ਜਨਮ 13 ਫਰਵਰੀ 1879 ਨੂੰ ਭਾਰਤ ਦੇ ਸ਼ਹਿਰ ਹੈਦਰਾਬਾਦ ਵਿੱਚ ਹੋਇਆ ਸੀ। ਉਸ ਦੇ ਪਿਤਾ ਅਘੋਰਨਾਥ ਚੱਟੋਪਾਧਿਆਏ ਇੱਕ ਨਾਮੀ ਵਿਦਵਾਨ ਅਤੇ ਮਾਂ ਬਰਾਦਾ ਸੁੰਦਰੀ ਦੇਬੀ ਕਵਿਤਰੀ ਸੀ ਅਤੇ ਬੰਗਾਲੀ ਵਿੱਚ ਲਿਖਦੀ ਸੀ।': [
    'ਸਰੋਜਿਨੀ ਨਾਇਡੂ ਦਾ ਜਨਮ 13 ਫਰਵਰੀ 1879 ਨੂੰ ਭਾਰਤ ਦੇ ਸ਼ਹਿਰ ਹੈਦਰਾਬਾਦ ਵਿੱਚ ਹੋਇਆ ਸੀ।',
    'ਉਸ ਦੇ ਪਿਤਾ ਅਘੋਰਨਾਥ ਚੱਟੋਪਾਧਿਆਏ ਇੱਕ ਨਾਮੀ ਵਿਦਵਾਨ ਅਤੇ ਮਾਂ ਬਰਾਦਾ ਸੁੰਦਰੀ ਦੇਬੀ ਕਵਿਤਰੀ ਸੀ ਅਤੇ ਬੰਗਾਲੀ ਵਿੱਚ ਲਿਖਦੀ ਸੀ।'
  ]
}

describe('Punjabi segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('pa', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
