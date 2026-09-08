/* ============================================================
   ASEER — shared content data (destinations, experiences, etc.)
   Single source of truth consumed by dynamic pages via ?query
   params. Placeholder "photos" are procedural SVGs (see scenic.js)
   until real photography is supplied.
   ============================================================ */
window.ASEER_DATA = {
  regions: {
    peaks:  { ar: 'القمم', en: 'Peaks' },
    tihama: { ar: 'تهامة', en: 'Tihama' },
    coast:  { ar: 'الساحل', en: 'Coast' },
    desert: { ar: 'الصحراء والواحات', en: 'Desert & Oases' }
  },

  destinations: {
    abha: {
      region: 'peaks', elevation: 2270, mood: 'day',
      name: { ar: 'أبها', en: 'Abha' },
      tagline: { ar: 'مدينة جبلية نابضة في قلب عسير', en: 'A lively mountain city at the heart of Aseer' },
      desc: { ar: 'عاصمة منطقة عسير ومركزها الثقافي، حيث يلتقي ضباب الصباح بالحدائق المرتفعة والأسواق الشعبية النابضة بالحياة.', en: 'Aseer\'s capital and cultural hub, where morning mist meets terraced gardens and lively traditional markets.' },
      why: [
        { ar: 'إطلالات قريبة', en: 'Nearby viewpoints' }, { ar: 'مدينة جبلية نابضة', en: 'A living mountain city' }, { ar: 'ثقافة وأسواق', en: 'Culture & markets' }
      ],
      nearby: ['tanomah', 'balasmer', 'soudah', 'alnamas']
    },
    tanomah: {
      region: 'peaks', elevation: 2400, mood: 'day',
      name: { ar: 'تنومة', en: 'Tanomah' },
      tagline: { ar: 'شلالات ومدرجات جبلية خضراء', en: 'Waterfalls and green mountain terraces' },
      desc: { ar: 'تشتهر تنومة بمدرجاتها الزراعية الخضراء وشلالاتها الموسمية المنحدرة من قمم عسير المرتفعة.', en: 'Known for its green agricultural terraces and seasonal waterfalls cascading from Aseer\'s high peaks.' },
      why: [ { ar: 'شلالات موسمية', en: 'Seasonal waterfalls' }, { ar: 'مدرجات زراعية', en: 'Farming terraces' }, { ar: 'أجواء باردة صيفًا', en: 'Cool summer air' } ],
      nearby: ['abha', 'alnamas', 'balhamer', 'soudah']
    },
    alnamas: {
      region: 'peaks', elevation: 2260, mood: 'day',
      name: { ar: 'النماص', en: 'Al Namas' },
      tagline: { ar: 'مرتفعات وقرى هادئة بين الغابات', en: 'Quiet highlands and villages among the forests' },
      desc: { ar: 'وجهة جبلية هادئة تحيطها غابات العرعر الكثيفة، معروفة بمناخها المعتدل ومنتزهاتها الطبيعية.', en: 'A tranquil mountain destination surrounded by dense juniper forests, known for its mild climate and nature parks.' },
      why: [ { ar: 'غابات عرعر', en: 'Juniper forests' }, { ar: 'مناخ معتدل', en: 'Mild climate' }, { ar: 'منتزهات طبيعية', en: 'Nature parks' } ],
      nearby: ['tanomah', 'balhamer', 'abha', 'balasmer']
    },
    balasmer: {
      region: 'peaks', elevation: 2350, mood: 'dusk',
      name: { ar: 'بللسمر', en: 'Balasmer' },
      tagline: { ar: 'غابات وضباب بارد', en: 'Forests and cool mist' },
      desc: { ar: 'منطقة جبلية غنية بالغطاء النباتي الكثيف، تتشكل فوقها طبقات من الضباب البارد على مدار العام.', en: 'A mountain area rich in dense vegetation, blanketed year-round in layers of cool mist.' },
      why: [ { ar: 'غطاء نباتي كثيف', en: 'Dense vegetation' }, { ar: 'ضباب دائم', en: 'Year-round mist' }, { ar: 'مسارات هادئة', en: 'Quiet trails' } ],
      nearby: ['abha', 'alnamas', 'tanomah', 'soudah']
    },
    balhamer: {
      region: 'peaks', elevation: 2200, mood: 'day',
      name: { ar: 'بللحمر', en: 'Balhamer' },
      tagline: { ar: 'مدرجات وقرى حجرية', en: 'Terraces and stone villages' },
      desc: { ar: 'تتناثر بين تلالها قرى حجرية تقليدية ومدرجات زراعية توارثتها الأجيال جيلًا بعد جيل.', en: 'Traditional stone villages and farming terraces scattered across its hills, passed down through generations.' },
      why: [ { ar: 'قرى تراثية', en: 'Heritage villages' }, { ar: 'مدرجات زراعية', en: 'Farming terraces' }, { ar: 'حرف يدوية', en: 'Handcrafts' } ],
      nearby: ['tanomah', 'alnamas', 'abha', 'soudah']
    },
    soudah: {
      region: 'peaks', elevation: 2980, mood: 'dusk',
      name: { ar: 'السودة', en: 'Al Soudah' },
      tagline: { ar: 'قمم شاهقة وضباب فوق الغيوم', en: 'Towering peaks above the clouds' },
      desc: { ar: 'تضم أعلى قمة في المملكة العربية السعودية، ووجهة صيفية شهيرة بتلفريكها وغاباتها الكثيفة.', en: 'Home to the Kingdom\'s highest peak, and a famous summer destination for its cable car and dense forests.' },
      why: [ { ar: 'أعلى قمة بالمملكة', en: 'The Kingdom\'s highest peak' }, { ar: 'تلفريك السودة', en: 'The Soudah cable car' }, { ar: 'غابات كثيفة', en: 'Dense forests' } ],
      nearby: ['abha', 'tanomah', 'balhamer', 'balasmer']
    },
    rijalalma: {
      region: 'tihama', elevation: 1800, mood: 'day',
      name: { ar: 'رجال ألمع', en: 'Rijal Almaa' },
      tagline: { ar: 'قرية التراث والفن الحجري في عسير', en: 'Aseer\'s heritage village of stone and art' },
      desc: { ar: 'قرية تراثية بنيت من الحجر والفن الملون، تحكي قصة العمارة الأصيل في قلب جبال عسير.', en: 'A heritage village built of stone and painted folk art, telling the story of authentic architecture in Aseer\'s mountains.' },
      why: [ { ar: 'قصور حجرية شاهقة', en: 'Towering stone castles' }, { ar: 'فن القط العسيري', en: 'Al-Qatt Al-Asiri art' }, { ar: 'متحف مفتوح', en: 'An open-air museum' } ],
      nearby: ['bariq', 'abha', 'balasmer', 'soudah']
    },
    almajardah: {
      region: 'tihama', elevation: 1600, mood: 'day',
      name: { ar: 'المجاردة', en: 'Al Majardah' },
      tagline: { ar: 'سفوح خضراء تربط الجبل بالسهل', en: 'Green slopes linking mountain to plain' },
      desc: { ar: 'منطقة انتقالية بين مرتفعات عسير وسهول تهامة، تشتهر بمزارعها المتدرجة وطقسها المعتدل.', en: 'A transitional area between Aseer\'s highlands and the Tihama plains, known for its terraced farms and mild weather.' },
      why: [ { ar: 'سفوح متدرجة', en: 'Terraced slopes' }, { ar: 'مزارع محلية', en: 'Local farms' }, { ar: 'طقس معتدل', en: 'Mild weather' } ],
      nearby: ['bariq', 'muhayil', 'rijalalma', 'albirk']
    },
    bariq: {
      region: 'tihama', elevation: 1500, mood: 'day',
      name: { ar: 'بارق', en: 'Bariq' },
      tagline: { ar: 'أودية خصبة ونخيل باسق', en: 'Fertile valleys and tall palms' },
      desc: { ar: 'محافظة تتوسط أودية خصبة تشتهر بزراعة النخيل والفواكه، ومناظرها الجبلية الممتدة نحو تهامة.', en: 'A governorate set among fertile valleys known for palm and fruit farming, with mountain views stretching toward Tihama.' },
      why: [ { ar: 'أودية خصبة', en: 'Fertile valleys' }, { ar: 'مزارع نخيل', en: 'Palm farms' }, { ar: 'مناظر جبلية', en: 'Mountain views' } ],
      nearby: ['almajardah', 'muhayil', 'rijalalma', 'alqahmah']
    },
    muhayil: {
      region: 'tihama', elevation: 900, mood: 'dusk',
      name: { ar: 'محايل عسير', en: 'Muhayil Aseer' },
      tagline: { ar: 'بوابة عسير نحو تهامة', en: 'Aseer\'s gateway to Tihama' },
      desc: { ar: 'محافظة زراعية كبرى تشتهر بمزارع الموز والمانجو، وتربط طرق عسير الجبلية بسهول تهامة الساحلية.', en: 'A major agricultural governorate known for banana and mango farms, linking Aseer\'s mountain roads to the Tihama coastal plains.' },
      why: [ { ar: 'مزارع استوائية', en: 'Tropical farms' }, { ar: 'طقس دافئ', en: 'Warm weather' }, { ar: 'أسواق شعبية', en: 'Traditional markets' } ],
      nearby: ['bariq', 'almajardah', 'albirk', 'alqahmah']
    },
    albirk: {
      region: 'coast', elevation: 10, mood: 'day',
      name: { ar: 'البرك', en: 'Al Birk' },
      tagline: { ar: 'سواحل هادئة على البحر الأحمر', en: 'Quiet shores on the Red Sea' },
      desc: { ar: 'مدينة ساحلية هادئة تطل على البحر الأحمر، تجمع بين شواطئها الرملية وتراثها البحري العريق.', en: 'A quiet coastal town on the Red Sea, combining sandy beaches with a long-standing maritime heritage.' },
      why: [ { ar: 'شواطئ رملية', en: 'Sandy beaches' }, { ar: 'تراث بحري', en: 'Maritime heritage' }, { ar: 'أسواق سمك محلية', en: 'Local fish markets' } ],
      nearby: ['alqahmah', 'muhayil', 'bariq', 'almajardah']
    },
    alqahmah: {
      region: 'coast', elevation: 30, mood: 'day',
      name: { ar: 'القحمة', en: 'Al Qahmah' },
      tagline: { ar: 'واحة ساحلية بين البحر والجبل', en: 'A coastal oasis between sea and mountain' },
      desc: { ar: 'محافظة ساحلية تتوسط الطريق بين جازان وعسير، تشتهر بمزارع النخيل القريبة من سواحلها.', en: 'A coastal governorate along the road between Jazan and Aseer, known for its palm farms close to the shoreline.' },
      why: [ { ar: 'قرب من الشاطئ', en: 'Close to the shore' }, { ar: 'مزارع نخيل', en: 'Palm farms' }, { ar: 'طريق ساحلي هادئ', en: 'A quiet coastal road' } ],
      nearby: ['albirk', 'muhayil', 'bariq', 'bisha']
    },
    bisha: {
      region: 'desert', elevation: 1160, mood: 'dusk',
      name: { ar: 'بيشة', en: 'Bisha' },
      tagline: { ar: 'واحة زراعية عند حافة الصحراء', en: 'A farming oasis at the desert\'s edge' },
      desc: { ar: 'محافظة زراعية واسعة عند حافة الربع الخالي، تشتهر بمزارعها الممتدة ونخيلها الباسق.', en: 'A wide agricultural governorate at the edge of the Empty Quarter, known for its sprawling farms and tall palms.' },
      why: [ { ar: 'مزارع ممتدة', en: 'Sprawling farms' }, { ar: 'أجواء صحراوية', en: 'Desert atmosphere' }, { ar: 'سماء صافية ليلاً', en: 'Clear night skies' } ],
      nearby: ['saratabidah', 'dhahranaljanub', 'alqahmah', 'muhayil']
    },
    saratabidah: {
      region: 'desert', elevation: 1400, mood: 'day',
      name: { ar: 'سراة عبيدة', en: 'Sarat Abidah' },
      tagline: { ar: 'سهول مرتفعة عند مشارف الصحراء', en: 'High plains at the desert\'s edge' },
      desc: { ar: 'محافظة تمتد سهولها المرتفعة بين جبال عسير وصحراء الربع الخالي، بمناخ معتدل ومساحات مفتوحة.', en: 'A governorate whose high plains stretch between Aseer\'s mountains and the Empty Quarter desert, with mild weather and open space.' },
      why: [ { ar: 'سهول مفتوحة', en: 'Open plains' }, { ar: 'مناخ معتدل', en: 'Mild climate' }, { ar: 'قرب من بيشة', en: 'Close to Bisha' } ],
      nearby: ['bisha', 'dhahranaljanub', 'alqahmah', 'muhayil']
    },
    dhahranaljanub: {
      region: 'desert', elevation: 2000, mood: 'day',
      name: { ar: 'ظهران الجنوب', en: 'Dhahran Al Janub' },
      tagline: { ar: 'مرتفعات حدودية بين الجبل والصحراء', en: 'Border highlands between mountain and desert' },
      desc: { ar: 'محافظة جبلية على أطراف عسير الشرقية، تمزج بين طبيعة المرتفعات وقرب الصحراء الممتدة شرقًا.', en: 'A mountain governorate on Aseer\'s eastern edge, blending highland nature with the desert stretching further east.' },
      why: [ { ar: 'مرتفعات هادئة', en: 'Quiet highlands' }, { ar: 'موقع حدودي', en: 'A border setting' }, { ar: 'طبيعة متنوعة', en: 'Varied nature' } ],
      nearby: ['bisha', 'saratabidah', 'soudah', 'balhamer']
    }
  },

  experienceLabels: {
    abha: [ {ar:'الأسواق الشعبية', en:'Traditional Markets'}, {ar:'شارع الفن', en:'Art Street'}, {ar:'مطلات أبها', en:'Abha Viewpoints'}, {ar:'مقاهي إطلالة', en:'View Cafés'}, {ar:'حدائق ومنتزهات جبلية', en:'Mountain Parks'}, {ar:'قصر شدا', en:'Shada Palace'} ]
  },

  experiences: {
    'paragliding-soudah': {
      category:'adventure', region:'peaks', mood:'day',
      name:{ar:'الطيران المظلي في السودة', en:'Paragliding over Al Soudah'},
      tagline:{ar:'حلّق فوق أعلى قمم المملكة', en:'Soar above the Kingdom\'s highest peaks'},
      desc:{ar:'رحلة طيران مظلي بمرافقة مدربين معتمدين تنطلق من حافة جبل السودة، لتحلّق فوق الغيوم بمشهد بانورامي لوديان عسير.', en:'A tandem paragliding flight with certified instructors launching from the Al Soudah escarpment, soaring above the clouds with a panoramic view of Aseer\'s valleys.'},
      duration:{ar:'20 دقيقة', en:'20 minutes'}, price:{ar:'من 450 ر.س', en:'From SAR 450'}, location:{ar:'السودة', en:'Al Soudah'},
      highlights:[ {ar:'مدربون معتمدون دوليًا', en:'Internationally certified instructors'}, {ar:'مشاهد بانورامية', en:'Panoramic views'}, {ar:'توثيق فوتوغرافي للرحلة', en:'Flight photography included'} ]
    },
    'qatt-art-workshop': {
      category:'culture', region:'tihama', mood:'day',
      name:{ar:'ورشة فن القط العسيري', en:'Al-Qatt Al-Asiri Art Workshop'},
      tagline:{ar:'تعلّم فن الزخرفة العسيري الأصيل', en:'Learn Aseer\'s authentic decorative art'},
      desc:{ar:'ورشة تفاعلية في قرية رجال ألمع تتعلم فيها أساسيات فن القط العسيري المسجل في التراث العالمي لليونسكو.', en:'An interactive workshop in Rijal Almaa where you learn the fundamentals of Al-Qatt Al-Asiri, inscribed on UNESCO\'s heritage list.'},
      duration:{ar:'ساعتان', en:'2 hours'}, price:{ar:'من 180 ر.س', en:'From SAR 180'}, location:{ar:'رجال ألمع', en:'Rijal Almaa'},
      highlights:[ {ar:'فنانات محليات', en:'Local artisan instructors'}, {ar:'مواد الرسم متضمنة', en:'Painting materials included'}, {ar:'قطعة فنية تأخذها معك', en:'Take home your artwork'} ]
    },
    'market-food-tour': {
      category:'food', region:'peaks', mood:'day',
      name:{ar:'جولة الأسواق الشعبية والمذاق العسيري', en:'Traditional Markets & Flavors Tour'},
      tagline:{ar:'مذاقات أبها في نزهة سيرًا على الأقدام', en:'Taste Abha on a walking tour'},
      desc:{ar:'جولة إرشادية في أسواق أبها الشعبية للتعرف على الحرف اليدوية وتذوق أشهى المأكولات المحلية كالمنيف والمرقوق.', en:'A guided walk through Abha\'s traditional markets to discover local crafts and taste specialties like Maneef and Marqooq.'},
      duration:{ar:'3 ساعات', en:'3 hours'}, price:{ar:'من 120 ر.س', en:'From SAR 120'}, location:{ar:'أبها', en:'Abha'},
      highlights:[ {ar:'تذوق 5 أطباق محلية', en:'Tasting of 5 local dishes'}, {ar:'دليل محلي', en:'Local guide'}, {ar:'دعم للحرفيين المحليين', en:'Supports local artisans'} ]
    },
    'juniper-forest-hike': {
      category:'nature', region:'peaks', mood:'day',
      name:{ar:'مسير غابة العرعر', en:'Juniper Forest Hike'},
      tagline:{ar:'مشي هادئ بين أشجار قديمة', en:'A quiet walk among ancient trees'},
      desc:{ar:'مسار مشي متوسط الصعوبة داخل غابات العرعر في النماص، بين أشجار يتجاوز عمر بعضها مئات السنين.', en:'A moderate hiking trail through Al Namas\' juniper forests, among trees hundreds of years old.'},
      duration:{ar:'ساعتان ونصف', en:'2.5 hours'}, price:{ar:'من 90 ر.س', en:'From SAR 90'}, location:{ar:'النماص', en:'Al Namas'},
      highlights:[ {ar:'مسار محدد وآمن', en:'Marked, safe trail'}, {ar:'مناسب للعائلات', en:'Family friendly'}, {ar:'هواء بارد منعش', en:'Cool, fresh air'} ]
    },
    'cable-car-soudah': {
      category:'adventure', region:'peaks', mood:'dusk',
      name:{ar:'تلفريك السودة', en:'Al Soudah Cable Car'},
      tagline:{ar:'رحلة فوق الغيوم بين القمم', en:'A ride above the clouds between peaks'},
      desc:{ar:'رحلة تلفريك تربط قمة السودة بوادي عسير المنخفض، بمشاهد تتغير مع الغروب من الذهبي إلى البنفسجي.', en:'A cable car ride linking the Al Soudah summit to the lower Aseer valley, with views shifting from gold to violet at dusk.'},
      duration:{ar:'15 دقيقة', en:'15 minutes'}, price:{ar:'من 60 ر.س', en:'From SAR 60'}, location:{ar:'السودة', en:'Al Soudah'},
      highlights:[ {ar:'أفضل وقت عند الغروب', en:'Best at sunset'}, {ar:'مناسب لكل الأعمار', en:'Suitable for all ages'}, {ar:'مقهى إطلالة بالمحطة', en:'View café at the station'} ]
    },
    'camel-trek-bisha': {
      category:'adventure', region:'desert', mood:'night',
      name:{ar:'رحلة الهجن في بيشة', en:'Camel Trek in Bisha'},
      tagline:{ar:'عبور رملي عند حافة الربع الخالي', en:'A desert crossing at the edge of the Empty Quarter'},
      desc:{ar:'رحلة هجن مسائية عند حافة الربع الخالي تنتهي بجلسة تحت سماء صافية مليئة بالنجوم.', en:'An evening camel trek at the edge of the Empty Quarter, ending with a session beneath a clear, star-filled sky.'},
      duration:{ar:'3 ساعات', en:'3 hours'}, price:{ar:'من 200 ر.س', en:'From SAR 200'}, location:{ar:'بيشة', en:'Bisha'},
      highlights:[ {ar:'مرشدون محليون', en:'Local guides'}, {ar:'شاي وقهوة عربية', en:'Tea & Arabic coffee'}, {ar:'رصد النجوم', en:'Stargazing'} ]
    },
    'coffee-farm-tour': {
      category:'food', region:'tihama', mood:'day',
      name:{ar:'جولة مزارع البن العسيري', en:'Aseer Coffee Farm Tour'},
      tagline:{ar:'من الحبة إلى الفنجان', en:'From the bean to the cup'},
      desc:{ar:'زيارة إلى مدرجات زراعة البن في بللحمر، مع شرح لرحلة القهوة العسيرية من الزراعة حتى التحميص.', en:'A visit to coffee-growing terraces in Balhamer, following the journey of Aseer coffee from cultivation to roasting.'},
      duration:{ar:'ساعتان', en:'2 hours'}, price:{ar:'من 100 ر.س', en:'From SAR 100'}, location:{ar:'بللحمر', en:'Balhamer'},
      highlights:[ {ar:'تذوق قهوة طازجة', en:'Fresh coffee tasting'}, {ar:'مزارعون محليون', en:'Local farmers'}, {ar:'منتجات للشراء', en:'Products available to buy'} ]
    },
    'stargazing-desert': {
      category:'nature', region:'desert', mood:'night',
      name:{ar:'رصد النجوم في سراة عبيدة', en:'Stargazing in Sarat Abidah'},
      tagline:{ar:'سماء صافية بعيدة عن أضواء المدينة', en:'A clear sky far from city lights'},
      desc:{ar:'أمسية رصد فلكي في السهول المفتوحة لسراة عبيدة، بتلسكوبات ودليل فلكي لشرح الأبراج والكواكب.', en:'An astronomy evening on Sarat Abidah\'s open plains, with telescopes and a guide explaining constellations and planets.'},
      duration:{ar:'ساعتان ونصف', en:'2.5 hours'}, price:{ar:'من 150 ر.س', en:'From SAR 150'}, location:{ar:'سراة عبيدة', en:'Sarat Abidah'},
      highlights:[ {ar:'تلسكوبات احترافية', en:'Professional telescopes'}, {ar:'دليل فلكي', en:'Astronomy guide'}, {ar:'مشروبات ساخنة', en:'Hot drinks included'} ]
    }
  },

  restaurants: {
    'shada-view': { cuisine:{ar:'سعودي معاصر', en:'Contemporary Saudi'}, region:'peaks', mood:'dusk', priceRange:'$$$', rating:4.7,
      name:{ar:'مطعم شدا فيو', en:'Shada View Restaurant'}, tagline:{ar:'إطلالة على وادي عسير مع المأكولات المحلية', en:'Aseer valley views with local cuisine'},
      desc:{ar:'مطعم مرتفع يطل على وادي عسير، يقدم أطباقًا سعودية معاصرة بلمسة عسيرية أصيلة.', en:'An elevated restaurant overlooking the Aseer valley, serving contemporary Saudi dishes with an authentic Aseer touch.'},
      location:{ar:'أبها', en:'Abha'}, hours:{ar:'١٢ ظهرًا - ١١ مساءً', en:'12 PM – 11 PM'},
      menu:[ {ar:'المنيف بالدجاج', en:'Maneef with Chicken'}, {ar:'المرقوق العسيري', en:'Aseer Marqooq'}, {ar:'قهوة عربية وتمر', en:'Arabic Coffee & Dates'}, {ar:'عسل جبلي', en:'Mountain Honey'} ] },
    'qahwat-aseer': { cuisine:{ar:'مقهى ومحمصة', en:'Café & Roastery'}, region:'peaks', mood:'day', priceRange:'$$', rating:4.5,
      name:{ar:'قهوة عسير', en:'Qahwat Aseer'}, tagline:{ar:'تحميص محلي وأجواء تراثية', en:'Local roasts in a heritage setting'},
      desc:{ar:'محمصة ومقهى صغير في شارع الفن بأبها يقدم القهوة العسيرية المحمصة محليًا وسط ديكور تراثي.', en:'A small roastery and café on Abha\'s Art Street serving locally roasted Aseer coffee amid heritage décor.'},
      location:{ar:'أبها', en:'Abha'}, hours:{ar:'٧ صباحًا - ١٢ منتصف الليل', en:'7 AM – 12 AM'},
      menu:[ {ar:'قهوة عسيرية مختصة', en:'Specialty Aseer Coffee'}, {ar:'كنافة بالعسل الجبلي', en:'Kunafa with Mountain Honey'}, {ar:'شاي بالنعناع', en:'Mint Tea'}, {ar:'حلويات محلية', en:'Local Sweets'} ] },
    'bayt-alqatt': { cuisine:{ar:'تراثي عسيري', en:'Heritage Aseer'}, region:'tihama', mood:'day', priceRange:'$$', rating:4.8,
      name:{ar:'بيت القط', en:'Bayt Al-Qatt'}, tagline:{ar:'وجبة تقليدية داخل بيت حجري تراثي', en:'A traditional meal inside a heritage stone house'},
      desc:{ar:'مطعم داخل منزل حجري مرمم في رجال ألمع، يقدم وجبات عسيرية تقليدية تحضّر على الطريقة القديمة.', en:'A restaurant inside a restored stone house in Rijal Almaa, serving traditional Aseer meals prepared the old way.'},
      location:{ar:'رجال ألمع', en:'Rijal Almaa'}, hours:{ar:'١٢ ظهرًا - ٩ مساءً', en:'12 PM – 9 PM'},
      menu:[ {ar:'العصيدة', en:'Aseedah'}, {ar:'اللحوح', en:'Lahoh'}, {ar:'الفتة العسيرية', en:'Aseer Fattah'}, {ar:'عسل وسمن بلدي', en:'Honey & Local Ghee'} ] },
    'tihama-table': { cuisine:{ar:'تهامي ساحلي', en:'Tihama Coastal'}, region:'tihama', mood:'day', priceRange:'$$', rating:4.4,
      name:{ar:'مائدة تهامة', en:'Tihama Table'}, tagline:{ar:'نكهات السهول الخصبة', en:'Flavors of the fertile plains'},
      desc:{ar:'مطعم عائلي في بارق يقدم أطباقًا مستوحاة من أودية تهامة الخصبة ومزارع النخيل المحيطة.', en:'A family restaurant in Bariq serving dishes inspired by Tihama\'s fertile valleys and surrounding palm farms.'},
      location:{ar:'بارق', en:'Bariq'}, hours:{ar:'١١ صباحًا - ١٠ مساءً', en:'11 AM – 10 PM'},
      menu:[ {ar:'سمك مشوي', en:'Grilled Fish'}, {ar:'عصير مانجو طازج', en:'Fresh Mango Juice'}, {ar:'أرز بخاري', en:'Bukhari Rice'}, {ar:'تمر بارقي', en:'Bariq Dates'} ] },
    'soudah-grill': { cuisine:{ar:'مشويات', en:'Grill House'}, region:'peaks', mood:'night', priceRange:'$$$', rating:4.6,
      name:{ar:'مشاوي السودة', en:'Al Soudah Grill'}, tagline:{ar:'عشاء دافئ على ارتفاع القمم', en:'A warm dinner high in the peaks'},
      desc:{ar:'مطعم مشويات في محطة السودة يقدم عشاءً دافئًا بجانب مدفأة خارجية وإطلالة ليلية على الوادي.', en:'A grill house at the Al Soudah station offering a warm dinner by an outdoor fire pit with a night view of the valley.'},
      location:{ar:'السودة', en:'Al Soudah'}, hours:{ar:'٤ عصرًا - ١٢ منتصف الليل', en:'4 PM – 12 AM'},
      menu:[ {ar:'مشاوي مشكلة', en:'Mixed Grill'}, {ar:'شوربة عدس', en:'Lentil Soup'}, {ar:'مشروبات ساخنة', en:'Hot Drinks'}, {ar:'كنافة ساخنة', en:'Warm Kunafa'} ] },
    'aseer-market-kitchen': { cuisine:{ar:'مطبخ الشارع', en:'Street Kitchen'}, region:'peaks', mood:'day', priceRange:'$', rating:4.3,
      name:{ar:'مطبخ السوق', en:'Aseer Market Kitchen'}, tagline:{ar:'نكهات السوق الشعبي في طبق واحد', en:'The market\'s flavors in one plate'},
      desc:{ar:'كشك طعام صغير داخل سوق أبها الشعبي، يقدم وجبات سريعة بنكهات محلية أصيلة وأسعار مناسبة.', en:'A small food stall inside Abha\'s traditional market, offering quick meals with authentic local flavors at friendly prices.'},
      location:{ar:'أبها', en:'Abha'}, hours:{ar:'٩ صباحًا - ٩ مساءً', en:'9 AM – 9 PM'},
      menu:[ {ar:'فطائر محلية', en:'Local Pies'}, {ar:'شاي كرك', en:'Karak Tea'}, {ar:'عصائر طبيعية', en:'Fresh Juices'}, {ar:'مقبلات باردة', en:'Cold Appetizers'} ] },
    'alnamas-cafe': { cuisine:{ar:'مقهى غابات', en:'Forest Café'}, region:'peaks', mood:'day', priceRange:'$$', rating:4.5,
      name:{ar:'مقهى غابة النماص', en:'Al Namas Forest Café'}, tagline:{ar:'فنجان قهوة بين أشجار العرعر', en:'A cup of coffee among juniper trees'},
      desc:{ar:'مقهى خشبي هادئ محاط بغابات العرعر، مثالي لاستراحة قصيرة بعد جولة مشي في النماص.', en:'A quiet wooden café surrounded by juniper forests, ideal for a short break after a walk in Al Namas.'},
      location:{ar:'النماص', en:'Al Namas'}, hours:{ar:'٨ صباحًا - ١٠ مساءً', en:'8 AM – 10 PM'},
      menu:[ {ar:'قهوة مختصة', en:'Specialty Coffee'}, {ar:'فطائر منزلية', en:'Homemade Pastries'}, {ar:'شوكولاتة ساخنة', en:'Hot Chocolate'}, {ar:'عسل غابات النماص', en:'Al Namas Forest Honey'} ] },
    'birk-seafood': { cuisine:{ar:'مأكولات بحرية', en:'Seafood'}, region:'coast', mood:'day', priceRange:'$$', rating:4.6,
      name:{ar:'أسماك البرك', en:'Al Birk Seafood'}, tagline:{ar:'صيد اليوم من البحر الأحمر', en:'Today\'s catch from the Red Sea'},
      desc:{ar:'مطعم بحري في البرك يقدم أسماكًا طازجة يوميًا من قوارب الصيد المحلية، على طريقة تهامة الساحلية.', en:'A seafood restaurant in Al Birk serving fish caught daily by local boats, prepared in the Tihama coastal style.'},
      location:{ar:'البرك', en:'Al Birk'}, hours:{ar:'١٢ ظهرًا - ١١ مساءً', en:'12 PM – 11 PM'},
      menu:[ {ar:'سمك هامور مشوي', en:'Grilled Hammour'}, {ar:'روبيان مقلي', en:'Fried Shrimp'}, {ar:'أرز بحري', en:'Seafood Rice'}, {ar:'سلطة ساحلية', en:'Coastal Salad'} ] }
  },

  stays: {
    'abha-heights-hotel': { type:{ar:'فندق', en:'Hotel'}, region:'peaks', mood:'day', priceNight:520, rating:4.6,
      name:{ar:'فندق أبها هايتس', en:'Abha Heights Hotel'}, tagline:{ar:'إقامة فندقية بإطلالة جبلية', en:'A hotel stay with mountain views'},
      desc:{ar:'فندق حديث في قلب أبها يوفر غرفًا مطلة على الجبال، وقربًا من الأسواق الشعبية ومعالم المدينة.', en:'A modern hotel in the heart of Abha offering mountain-view rooms, close to traditional markets and city landmarks.'},
      location:{ar:'أبها', en:'Abha'},
      amenities:[ {ar:'إفطار مجاني', en:'Free breakfast'}, {ar:'واي فاي مجاني', en:'Free Wi-Fi'}, {ar:'موقف سيارات', en:'Parking'}, {ar:'صالة رياضية', en:'Gym'}, {ar:'خدمة الغرف', en:'Room service'} ] },
    'soudah-chalets': { type:{ar:'شاليهات', en:'Chalets'}, region:'peaks', mood:'dusk', priceNight:780, rating:4.8,
      name:{ar:'شاليهات السودة', en:'Al Soudah Chalets'}, tagline:{ar:'ليلة بين الغيوم فوق قمة السودة', en:'A night among the clouds atop Al Soudah'},
      desc:{ar:'شاليهات خشبية مطلة على أعلى قمم المملكة، مثالية لمشاهدة الغروب والشروق فوق الغيوم.', en:'Wooden chalets overlooking the Kingdom\'s highest peaks, ideal for watching sunset and sunrise above the clouds.'},
      location:{ar:'السودة', en:'Al Soudah'},
      amenities:[ {ar:'مدفأة خشبية', en:'Wood fireplace'}, {ar:'شرفة خاصة', en:'Private balcony'}, {ar:'إفطار جبلي', en:'Mountain breakfast'}, {ar:'واي فاي مجاني', en:'Free Wi-Fi'}, {ar:'مواقف خاصة', en:'Private parking'} ] },
    'rijal-heritage-inn': { type:{ar:'نزل تراثي', en:'Heritage Inn'}, region:'tihama', mood:'day', priceNight:410, rating:4.7,
      name:{ar:'نزل رجال ألمع التراثي', en:'Rijal Almaa Heritage Inn'}, tagline:{ar:'نم داخل قصر حجري عمره قرون', en:'Sleep inside a centuries-old stone castle'},
      desc:{ar:'نزل مرمم داخل أحد القصور الحجرية التاريخية في رجال ألمع، بديكور مستوحى من فن القط العسيري.', en:'A restored inn inside one of Rijal Almaa\'s historic stone castles, decorated in the style of Al-Qatt Al-Asiri art.'},
      location:{ar:'رجال ألمع', en:'Rijal Almaa'},
      amenities:[ {ar:'ديكور تراثي أصيل', en:'Authentic heritage décor'}, {ar:'إفطار محلي', en:'Local breakfast'}, {ar:'جولة إرشادية مجانية', en:'Free guided tour'}, {ar:'واي فاي مجاني', en:'Free Wi-Fi'}, {ar:'حديقة داخلية', en:'Inner courtyard'} ] },
    'alnamas-forest-lodge': { type:{ar:'نزل غابات', en:'Forest Lodge'}, region:'peaks', mood:'day', priceNight:600, rating:4.5,
      name:{ar:'نزل غابة النماص', en:'Al Namas Forest Lodge'}, tagline:{ar:'إقامة هادئة وسط أشجار العرعر', en:'A quiet stay among juniper trees'},
      desc:{ar:'نزل صغير محاط بغابات العرعر الكثيفة في النماص، بعيدًا عن الضجيج وقريبًا من مسارات المشي.', en:'A small lodge surrounded by Al Namas\' dense juniper forests, away from the noise and close to hiking trails.'},
      location:{ar:'النماص', en:'Al Namas'},
      amenities:[ {ar:'مسارات مشي قريبة', en:'Nearby hiking trails'}, {ar:'إفطار مجاني', en:'Free breakfast'}, {ar:'واي فاي مجاني', en:'Free Wi-Fi'}, {ar:'موقف سيارات', en:'Parking'}, {ar:'شرفات خشبية', en:'Wooden balconies'} ] },
    'tanomah-terrace-resort': { type:{ar:'منتجع', en:'Resort'}, region:'peaks', mood:'day', priceNight:690, rating:4.6,
      name:{ar:'منتجع مدرجات تنومة', en:'Tanomah Terrace Resort'}, tagline:{ar:'إطلالة على الشلالات والمدرجات الخضراء', en:'Views over waterfalls and green terraces'},
      desc:{ar:'منتجع عائلي يطل على مدرجات تنومة الزراعية وشلالاتها الموسمية، بمرافق ترفيهية متعددة.', en:'A family resort overlooking Tanomah\'s farming terraces and seasonal waterfalls, with multiple recreational facilities.'},
      location:{ar:'تنومة', en:'Tanomah'},
      amenities:[ {ar:'مسبح خارجي', en:'Outdoor pool'}, {ar:'إفطار مجاني', en:'Free breakfast'}, {ar:'مناطق لعب أطفال', en:'Kids play area'}, {ar:'واي فاي مجاني', en:'Free Wi-Fi'}, {ar:'مطعم داخلي', en:'On-site restaurant'} ] },
    'muhayil-farm-stay': { type:{ar:'إقامة مزرعة', en:'Farm Stay'}, region:'tihama', mood:'dusk', priceNight:350, rating:4.4,
      name:{ar:'إقامة مزارع محايل', en:'Muhayil Farm Stay'}, tagline:{ar:'ليلة بين مزارع الموز والمانجو', en:'A night among banana and mango farms'},
      desc:{ar:'إقامة ريفية بسيطة داخل مزرعة عائلية في محايل عسير، تتيح تجربة الحياة الزراعية المحلية عن قرب.', en:'A simple rural stay on a family farm in Muhayil Aseer, offering a close-up experience of local farming life.'},
      location:{ar:'محايل عسير', en:'Muhayil Aseer'},
      amenities:[ {ar:'جولة بالمزرعة', en:'Farm tour'}, {ar:'إفطار محلي', en:'Local breakfast'}, {ar:'منتجات طازجة للشراء', en:'Fresh produce for sale'}, {ar:'موقف سيارات', en:'Parking'}, {ar:'أجواء هادئة', en:'Quiet atmosphere'} ] },
    'albirk-beach-camp': { type:{ar:'مخيم شاطئي', en:'Beach Camp'}, region:'coast', mood:'night', priceNight:280, rating:4.3,
      name:{ar:'مخيم شاطئ البرك', en:'Al Birk Beach Camp'}, tagline:{ar:'ليلة تحت النجوم على شاطئ أحمر هادئ', en:'A night under the stars on a quiet Red Sea shore'},
      desc:{ar:'مخيم شاطئي بسيط على ساحل البرك، بخيام مجهزة وجلسات مسائية على رمال البحر الأحمر.', en:'A simple beach camp on Al Birk\'s coast, with equipped tents and evening seating on the Red Sea sand.'},
      location:{ar:'البرك', en:'Al Birk'},
      amenities:[ {ar:'خيام مجهزة', en:'Equipped tents'}, {ar:'جلسة نار مسائية', en:'Evening fire pit'}, {ar:'إفطار بحري', en:'Coastal breakfast'}, {ar:'أمان على مدار الساعة', en:'24-hour security'}, {ar:'قرب من الشاطئ', en:'Beachfront access'} ] },
    'dhahran-highland-lodge': { type:{ar:'نزل مرتفعات', en:'Highland Lodge'}, region:'desert', mood:'day', priceNight:390, rating:4.4,
      name:{ar:'نزل مرتفعات ظهران الجنوب', en:'Dhahran Al Janub Highland Lodge'}, tagline:{ar:'إقامة هادئة بين الجبل والصحراء', en:'A quiet stay between mountain and desert'},
      desc:{ar:'نزل بسيط في مرتفعات ظهران الجنوب الحدودية، نقطة انطلاق مريحة لاستكشاف الطبيعة المتنوعة بالمنطقة.', en:'A simple lodge in the border highlands of Dhahran Al Janub, a comfortable base for exploring the area\'s varied nature.'},
      location:{ar:'ظهران الجنوب', en:'Dhahran Al Janub'},
      amenities:[ {ar:'إفطار مجاني', en:'Free breakfast'}, {ar:'واي فاي مجاني', en:'Free Wi-Fi'}, {ar:'موقف سيارات', en:'Parking'}, {ar:'إطلالة جبلية', en:'Mountain view'}, {ar:'أجواء هادئة', en:'Quiet atmosphere'} ] }
  },

  routes: {
    'peaks-panorama': { region:'peaks', mood:'day', duration:{ar:'يومان', en:'2 days'}, distance:{ar:'٩٠ كم', en:'90 km'},
      name:{ar:'مسار بانوراما القمم', en:'Peaks Panorama Route'}, tagline:{ar:'أعلى قمم عسير في رحلة واحدة', en:'Aseer\'s highest peaks in one trip'},
      desc:{ar:'مسار جبلي يربط أبها بالسودة وتنومة، يمر بأجمل الإطلالات والمقاهي المرتفعة على مدار يومين.', en:'A mountain route linking Abha, Al Soudah and Tanomah, passing the finest viewpoints and elevated cafés over two days.'},
      stops:[ {ar:'أبها', en:'Abha'}, {ar:'السودة', en:'Al Soudah'}, {ar:'تنومة', en:'Tanomah'}, {ar:'بللحمر', en:'Balhamer'} ] },
    'heritage-stone-trail': { region:'tihama', mood:'day', duration:{ar:'يوم واحد', en:'1 day'}, distance:{ar:'٥٥ كم', en:'55 km'},
      name:{ar:'درب القرى الحجرية', en:'Heritage Stone Trail'}, tagline:{ar:'رحلة عبر قرى التراث والفن', en:'A journey through heritage and art villages'},
      desc:{ar:'مسار يربط قرى رجال ألمع والمجاردة وبارق، لاستكشاف العمارة الحجرية وفن القط العسيري في يوم واحد.', en:'A route linking Rijal Almaa, Al Majardah and Bariq, exploring stone architecture and Al-Qatt Al-Asiri art in a single day.'},
      stops:[ {ar:'رجال ألمع', en:'Rijal Almaa'}, {ar:'المجاردة', en:'Al Majardah'}, {ar:'بارق', en:'Bariq'} ] },
    'tihama-valleys-drive': { region:'tihama', mood:'day', duration:{ar:'يوم واحد', en:'1 day'}, distance:{ar:'٧٠ كم', en:'70 km'},
      name:{ar:'مسار أودية تهامة', en:'Tihama Valleys Drive'}, tagline:{ar:'من الجبل إلى السهل الخصب', en:'From mountain to fertile plain'},
      desc:{ar:'قيادة سياحية من مرتفعات عسير نزولًا إلى أودية تهامة الخصبة، بمحطات في محايل والقحمة.', en:'A scenic drive from Aseer\'s highlands down to Tihama\'s fertile valleys, with stops in Muhayil and Al Qahmah.'},
      stops:[ {ar:'بارق', en:'Bariq'}, {ar:'محايل عسير', en:'Muhayil Aseer'}, {ar:'القحمة', en:'Al Qahmah'} ] },
    'coast-to-summit': { region:'coast', mood:'dusk', duration:{ar:'ثلاثة أيام', en:'3 days'}, distance:{ar:'١٦٠ كم', en:'160 km'},
      name:{ar:'مسار الساحل إلى القمة', en:'Coast to Summit Route'}, tagline:{ar:'من رمال البحر الأحمر إلى قمة السودة', en:'From Red Sea sands to the Al Soudah summit'},
      desc:{ar:'أطول مسارات عسير، يبدأ من شواطئ البرك الهادئة وينتهي عند أعلى قمة في المملكة عبر ثلاثة أيام.', en:'Aseer\'s longest route, starting from Al Birk\'s quiet shores and ending at the Kingdom\'s highest peak over three days.'},
      stops:[ {ar:'البرك', en:'Al Birk'}, {ar:'القحمة', en:'Al Qahmah'}, {ar:'أبها', en:'Abha'}, {ar:'السودة', en:'Al Soudah'} ] }
  },

  events: {
    'abha-fest': { region:'peaks', mood:'night', date:{ar:'يونيو - أغسطس', en:'June – August'}, price:{ar:'دخول مجاني', en:'Free entry'},
      name:{ar:'مهرجان أبها الصيفي', en:'Abha Summer Festival'}, tagline:{ar:'فعاليات وعروض طوال الصيف', en:'Shows and events all summer long'},
      desc:{ar:'مهرجان سنوي يضم عروضًا فنية وأسواقًا شعبية وفعاليات ترفيهية في أنحاء أبها طوال أشهر الصيف.', en:'An annual festival featuring performances, traditional markets and entertainment across Abha throughout summer.'},
      location:{ar:'أبها', en:'Abha'} },
    'soudah-carnival': { region:'peaks', mood:'dusk', date:{ar:'يوليو', en:'July'}, price:{ar:'من 50 ر.س', en:'From SAR 50'},
      name:{ar:'كرنفال السودة', en:'Al Soudah Carnival'}, tagline:{ar:'أنشطة جبلية فوق الغيوم', en:'Mountain activities above the clouds'},
      desc:{ar:'فعالية صيفية عند محطة السودة تجمع بين رياضات المغامرة والعروض الموسيقية المسائية.', en:'A summer event at the Al Soudah station combining adventure sports with evening musical performances.'},
      location:{ar:'السودة', en:'Al Soudah'} },
    'rijal-heritage-week': { region:'tihama', mood:'day', date:{ar:'أغسطس', en:'August'}, price:{ar:'دخول مجاني', en:'Free entry'},
      name:{ar:'أسبوع تراث رجال ألمع', en:'Rijal Almaa Heritage Week'}, tagline:{ar:'احتفاء بفن القط والعمارة الحجرية', en:'Celebrating Al-Qatt art and stone architecture'},
      desc:{ar:'أسبوع ثقافي في رجال ألمع يضم ورش فن القط العسيري وجولات إرشادية في القصور التاريخية.', en:'A cultural week in Rijal Almaa featuring Al-Qatt Al-Asiri art workshops and guided tours of historic castles.'},
      location:{ar:'رجال ألمع', en:'Rijal Almaa'} },
    'alnamas-forest-nights': { region:'peaks', mood:'night', date:{ar:'يونيو - يوليو', en:'June – July'}, price:{ar:'من 40 ر.س', en:'From SAR 40'},
      name:{ar:'ليالي غابة النماص', en:'Al Namas Forest Nights'}, tagline:{ar:'أمسيات موسيقية بين الأشجار', en:'Musical evenings among the trees'},
      desc:{ar:'أمسيات مسائية أسبوعية في غابات النماص تجمع بين الموسيقى الحية وأكشاك الطعام المحلي.', en:'Weekly evening gatherings in Al Namas\' forests combining live music with local food stalls.'},
      location:{ar:'النماص', en:'Al Namas'} },
    'tanomah-waterfalls-gathering': { region:'peaks', mood:'day', date:{ar:'أغسطس', en:'August'}, price:{ar:'دخول مجاني', en:'Free entry'},
      name:{ar:'ملتقى شلالات تنومة', en:'Tanomah Waterfalls Gathering'}, tagline:{ar:'احتفال موسمي بموسم الأمطار', en:'A seasonal celebration of the rains'},
      desc:{ar:'ملتقى سنوي يحتفي بموسم تدفق شلالات تنومة، بأنشطة عائلية وأسواق للمنتجات الزراعية المحلية.', en:'An annual gathering celebrating Tanomah\'s waterfall season, with family activities and local farm-produce markets.'},
      location:{ar:'تنومة', en:'Tanomah'} },
    'muhayil-mango-fest': { region:'tihama', mood:'day', date:{ar:'يوليو', en:'July'}, price:{ar:'من 20 ر.س', en:'From SAR 20'},
      name:{ar:'مهرجان محايل للمانجو', en:'Muhayil Mango Festival'}, tagline:{ar:'احتفال بموسم حصاد المانجو', en:'Celebrating the mango harvest season'},
      desc:{ar:'مهرجان زراعي سنوي يحتفي بموسم المانجو في محايل عسير، بمسابقات ومعارض للمنتجات المحلية.', en:'An annual agricultural festival celebrating Muhayil Aseer\'s mango season, with competitions and local produce exhibits.'},
      location:{ar:'محايل عسير', en:'Muhayil Aseer'} }
  }
};
