import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'ومن المنتظر أن يكتمل مشروع خط أنابيب نابوكو البالغ طوله 3300 كليومترا في 12‪/‬08‪/‬2014 بتكلفة تُقدر بـ 7.9 مليارات يورو أي نحو 10.9 مليارات دولار. ومن المقرر أن تصل طاقة ضخ الغاز في المشروع 31 مليار متر مكعب انطلاقا من بحر قزوين مرورا بالنمسا وتركيا ودول البلقان دون المرور على الأراضي الروسية.': [
    'ومن المنتظر أن يكتمل مشروع خط أنابيب نابوكو البالغ طوله 3300 كليومترا في 12‪/‬08‪/‬2014 بتكلفة تُقدر بـ 7.9 مليارات يورو أي نحو 10.9 مليارات دولار.',
    'ومن المقرر أن تصل طاقة ضخ الغاز في المشروع 31 مليار متر مكعب انطلاقا من بحر قزوين مرورا بالنمسا وتركيا ودول البلقان دون المرور على الأراضي الروسية.'
  ]
}

describe('Arabic segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('ar', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
