import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'आज दसरा आहे. आज खूप शुभ दिवस आहे.': ['आज दसरा आहे.', 'आज खूप शुभ दिवस आहे.'],
  'ढग खूप गर्जत होते; पण पाऊस पडत नव्हता.': ['ढग खूप गर्जत होते; पण पाऊस पडत नव्हता.'],
  'रमाची परीक्षा कधी आहे? अवकाश आहे अजून.': ['रमाची परीक्षा कधी आहे?', 'अवकाश आहे अजून.'],
  'शाब्बास, असाच अभ्यास कर! आणि मग तुला नक्की यश मिळणार.': ['शाब्बास, असाच अभ्यास कर!', 'आणि मग तुला नक्की यश मिळणार.'],
  '"आपली आपण करी स्तुती तो एक मूर्ख" असे समर्थ रामदासस्वामी म्हणतात.': ['"आपली आपण करी स्तुती तो एक मूर्ख" असे समर्थ रामदासस्वामी म्हणतात.']
}

describe('Marathi segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('mr', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
