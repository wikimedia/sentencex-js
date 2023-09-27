import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'Ի՞նչ ես մտածում: Ոչինչ:': ['Ի՞նչ ես մտածում:', 'Ոչինչ:'],

  'Ապրիլի 24-ին սկսեց անձրևել...Այդպես էի գիտեի:': ['Ապրիլի 24-ին սկսեց անձրևել...Այդպես էի գիտեի:'],

  'Այսպիսով` մոտենում ենք ավարտին: Տրամաբանությյունը հետևյալն է. պարզություն և աշխատանք:': [
    'Այսպիսով` մոտենում ենք ավարտին:',
    'Տրամաբանությյունը հետևյալն է. պարզություն և աշխատանք:'
  ],

  'Սա այն փուլն է, երբ տեղի է ունենում Համակարգի մշակումը: Համաձայն Փուլ 2-ի, Մատակարարը մշակում և/կամ հարմարեցնում է համապատասխան ծրագիրը, տեղադրում ծրագրի բաղկացուցիչները, կատարում առանձին բլոկի և համակարգի թեստավորում և ներառում տարբեր մոդուլներ եզակի աշխատանքային համակարգում, որը  կազմում է այս Փուլի արդյունքը:': [
    'Սա այն փուլն է, երբ տեղի է ունենում Համակարգի մշակումը:',
    'Համաձայն Փուլ 2-ի, Մատակարարը մշակում և/կամ հարմարեցնում է համապատասխան ծրագիրը, տեղադրում ծրագրի բաղկացուցիչները, կատարում առանձին բլոկի և համակարգի թեստավորում և ներառում տարբեր մոդուլներ եզակի աշխատանքային համակարգում, որը  կազմում է այս Փուլի արդյունքը:'
  ],

  'Մատակարարի նախագծի անձնակազմի կողմից համակարգի թեստերը հաջող անցնելուց հետո, Համակարգը տրվում է Գնորդին թեստավորման համար: 2-րդ փուլում, հիմք ընդունելով թեստային սցենարիոները, թեստերը կատարվում են Կառավարության կողմից Մատակարարի աջակցությամբ: Այս թեստերի թիրախը հանդիսանում է  Համակարգի` որպես մեկ ամբողջության և համակարգի գործունեության ստուգումը համաձայն տեխնիկական բնութագրերի: Այս թեստերի հաջողակ ավարտից հետո, Համակարգը ժամանակավոր ընդունվում է  Կառավարության կողմից: Այս թեստերի արդյունքները փաստաթղթային ձևով կներակայացվեն Թեստային Արդյունքների Հաշվետվություններում: Մատակարարը պետք է տրամադրի հետևյալը`':
    [
      'Մատակարարի նախագծի անձնակազմի կողմից համակարգի թեստերը հաջող անցնելուց հետո, Համակարգը տրվում է Գնորդին թեստավորման համար:',
      '2-րդ փուլում, հիմք ընդունելով թեստային սցենարիոները, թեստերը կատարվում են Կառավարության կողմից Մատակարարի աջակցությամբ:',
      'Այս թեստերի թիրախը հանդիսանում է  Համակարգի` որպես մեկ ամբողջության և համակարգի գործունեության ստուգումը համաձայն տեխնիկական բնութագրերի:',
      'Այս թեստերի հաջողակ ավարտից հետո, Համակարգը ժամանակավոր ընդունվում է  Կառավարության կողմից:',
      'Այս թեստերի արդյունքները փաստաթղթային ձևով կներակայացվեն Թեստային Արդյունքների Հաշվետվություններում:',
      'Մատակարարը պետք է տրամադրի հետևյալը`'
    ],

  // "Hello world. My name is Armine." ==> ["Hello world.", "My name is Armine."]
  'Բարև Ձեզ: Իմ անունն էԱրմինե:': ['Բարև Ձեզ:', 'Իմ անունն էԱրմինե:'],
  // "Today is Monday. I am going to work." ==> ["Today is Monday.", "I am going to work."]

  'Այսօր երկուշաբթի է: Ես գնում եմ աշխատանքի:': ['Այսօր երկուշաբթի է:', 'Ես գնում եմ աշխատանքի:'],

  //  "Tomorrow is September 1st. We are going to school." ==> ["Tomorrow is September 1st.", "We are going to school."]

  'Վաղը սեպտեմբերի 1-ն է: Մենք գնում ենք դպրոց:': ['Վաղը սեպտեմբերի 1-ն է:', 'Մենք գնում ենք դպրոց:'],

  //  "Yes, I understood. I really love you." ==> ["Yes, I understood.", "I really love you."]

  'Այո, ես հասկացա: Ես իսկապես քեզ սիրում եմ:':
    ['Այո, ես հասկացա:', 'Ես իսկապես քեզ սիրում եմ:'],

  //  "Close the windows. It is raining in the evening." ==> ["Close the windows.", "It is raining in the evening."]
  'Փակիր պատուհանները: Երեկոյան անձրևում է:': ['Փակիր պատուհանները:', 'Երեկոյան անձրևում է:'],
  //  "It is dark. I should go home." ==> ["It is dark.", "I should go home."]
  'Մութ է: Ես պետք է տուն վերադառնամ:': ['Մութ է:', 'Ես պետք է տուն վերադառնամ:'],
  //  "You know, I am starting to believe. Everything is changing." ==> ["You know, I am starting to believe.", "Everything is changing."]

  'Գիտես, սկսել եմ հավատալ: Ամեն ինչ փոխվում է:': ['Գիտես, սկսել եմ հավատալ:', 'Ամեն ինչ փոխվում է:'],

  //  "It is a new Christmas tree. We should decorate it." ==> ["It is a new Christmas tree.", "We should decorate it."]
  'Տոնածառը նոր է: Պետք է այն զարդարել:': ['Տոնածառը նոր է:', 'Պետք է այն զարդարել:'],
  //  "I am in hurry. I could not wait you." ==> ["I am in hurry.", "I could not wait you."]
  'Ես շտապում եմ: Ես քեզ չեմ կարող սպասել:': ['Ես շտապում եմ:', 'Ես քեզ չեմ կարող սպասել:'],
  //  "Wait, we love each other. I want us to live together." ==> ["Wait, we love each other.", "I want us to live together."]

  'Սպասիր, մենք իրար սիրում ենք: Ցանկանում եմ միասին ապրենք:': ['Սպասիր, մենք իրար սիրում ենք:', 'Ցանկանում եմ միասին ապրենք:'],

  //  "No, I do not think so. It is not true." ==> ["No, I do not think so.", "It is not true."]
  'Ոչ, այդպես չեմ կարծում: Դա ճիշտ չէ:': ['Ոչ, այդպես չեմ կարծում:', 'Դա ճիշտ չէ:'],

  //  "It was 1960...it was winter...it was night. It was cold...emptiness." ==> ["It was 1960...it was winter...it was night.", "It was cold...emptiness."]

  '1960 թվական…ձմեռ…գիշեր: Սառն էր…դատարկություն:':
    ['1960 թվական…ձմեռ…գիշեր:', 'Սառն էր…դատարկություն:'],

  //  "Why a computer could not do what a man could do? Simply it doesn't have a human brain." ==> ["Why a computer could not do what a man could do?", "Simply it doesn't have a human brain."]

  'Ինչ՟ու այն, ինչ անում է մարդը, չի կարող անել համակարգիչը: Պարզապես չունի մարդկային ուղեղ:':
    [
      'Ինչ՟ու այն, ինչ անում է մարդը, չի կարող անել համակարգիչը:',
      'Պարզապես չունի մարդկային ուղեղ:'
    ],

  //  "Numerate for me 3 things that are important for you - I answer love, knowledge, sincerity." ==> ["Numerate for me 3 things that are important for you - I answer love, knowledge, sincerity."]

  'Թվարկիր ինձ համար 3 բան, որ կարևոր է քեզ համար - Պատասխանում եմ. սեր, գիտելիք, ազնվություն:':
    [
      'Թվարկիր ինձ համար 3 բան, որ կարևոր է քեզ համար - Պատասխանում եմ. սեր, գիտելիք, ազնվություն:'
    ],

  //  "So, we are coming to the end. The logic is...simplicity and work" ==> ["So, we are coming to the end.", "Simplicity and work."]

  //  "Can we work together ?. May be what you are thinking, is possible." ==> ["Can we work together?.", "May be what you are thinking is possible."]

  'Կարող ե՞նք միասին աշխատել: Գուցե այն ինչ մտածում ես, իրականանալի է:':
    ['Կարող ե՞նք միասին աշխատել:', 'Գուցե այն ինչ մտածում ես, իրականանալի է:'],

  //  "Now what we have started, comes to the end. However the questions are numerous... ." ==> ["Now what we have started, comes to the end.", "However the questions are numerous... ."]

  'Հիմա, այն ինչ սկսել ենք, ավարտին է մոտենում: Հարցերը սակայն շատ են...:':
    ['Հիմա, այն ինչ սկսել ենք, ավարտին է մոտենում:', 'Հարցերը սակայն շատ են...:'],

  //  "Honey... I am waiting. Shall I go... or?" ==> ["Honey... I am waiting.", "Shall I go... or?"]
  'Սիրելիս...սպասում եմ: Գնամ թ՟ե …:': ['Սիրելիս...սպասում եմ:', 'Գնամ թ՟ե …:'],
  'Դիեգո Արմանդո Մարադոնան ծնվել է 1960 թվականի հոկտեմբերի 30-ին (կիրակի)` առավոտյան ժամը 5-ին, Բուենոս-Այրես գավառում գտնվող Լանուս քաղաքի Էվիտա կլինիկայում: Նա ծնվել է Դոն Դիեգոյի ընտանիքում: Հայրն աշխատում էր Տրիտումոլ հողմաղացում որպես բանվոր, իսկ մայրը` Դալմա Սալվադորա Ֆրանկոն, տնային տնտեսուհի էր։ Դիեգոն ընտանիքի հինգերորդ, բայց առաջին արու զավակն էր, ուներ չորս քույր` Ռիտան, Աննան, Էլզան և Մարիան։ Դալմա Սալվադորան ասում էր. «Նա բոլորովին չչարչարեց ինձ. շաբաթ ամբողջ օրը ես ինձ շատ լավ էի զգում, իսկ գիշերն ինձ կլինիկա տարան: Նա շատ արագ լույս աշխարհ եկավ: Այդ պահին ես միայն մի բան էի խնդրում. որպեսզի նա առողջ ծնվի և լավ մարդ դառնա: Բարեբախտաբար, այդ ամենն իրականացավ, կարծում եմ, դեռ մի բան էլ ավելի»։': [
    'Դիեգո Արմանդո Մարադոնան ծնվել է 1960 թվականի հոկտեմբերի 30-ին (կիրակի)` առավոտյան ժամը 5-ին, Բուենոս-Այրես գավառում գտնվող Լանուս քաղաքի Էվիտա կլինիկայում:',
    'Նա ծնվել է Դոն Դիեգոյի ընտանիքում:',
    'Հայրն աշխատում էր Տրիտումոլ հողմաղացում որպես բանվոր, իսկ մայրը` Դալմա Սալվադորա Ֆրանկոն, տնային տնտեսուհի էր։',
    'Դիեգոն ընտանիքի հինգերորդ, բայց առաջին արու զավակն էր, ուներ չորս քույր` Ռիտան, Աննան, Էլզան և Մարիան։',
    'Դալմա Սալվադորան ասում էր. «Նա բոլորովին չչարչարեց ինձ. շաբաթ ամբողջ օրը ես ինձ շատ լավ էի զգում, իսկ գիշերն ինձ կլինիկա տարան: Նա շատ արագ լույս աշխարհ եկավ: Այդ պահին ես միայն մի բան էի խնդրում. որպեսզի նա առողջ ծնվի և լավ մարդ դառնա: Բարեբախտաբար, այդ ամենն իրականացավ, կարծում եմ, դեռ մի բան էլ ավելի»։'
  ]
}

describe('Armenian segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('hy', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
