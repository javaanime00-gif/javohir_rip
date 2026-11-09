const places = [
  {
    name: "Registon maydoni",
    location: "Samarqand",
    period: "XV–XVII asrlar",
    category: "madaniy",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/RegistanSquare_Samarkand.jpg/1280px-RegistanSquare_Samarkand.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:RegistanSquare_Samarkand.jpg",
    description:
      "Ulug'bek, Sherdor va Tillakori madrasalaridan tashkil topgan mashhur me'moriy ansambl. Registon asrlar davomida Samarqandning ilm-fan va jamoat markazi bo'lgan.",
  },
  {
    name: "Go'ri Amir maqbarasi",
    location: "Samarqand",
    period: "XIV–XV asrlar",
    category: "madaniy",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/ShrineofAmirTimur.jpg/1280px-ShrineofAmirTimur.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:ShrineofAmirTimur.jpg",
    description:
      "Amir Temur va temuriylar sulolasi vakillari dafn etilgan maqbara. Moviy gumbazi va nafis bezaklari bilan tanilgan.",
  },
  {
    name: "Shohi Zinda majmuasi",
    location: "Samarqand",
    period: "XI–XV asrlar",
    category: "madaniy",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Shah-i-Zinda%2C_Samarkand_%28Shohi-Zinda_majmuasi%2C_Samarqand%2C_%D0%A8%D0%B0%D1%85%D0%B8_%D0%97%D0%B8%D0%BD%D0%B4%D0%B0%29.jpg/1280px-Shah-i-Zinda%2C_Samarkand_%28Shohi-Zinda_majmuasi%2C_Samarqand%2C_%D0%A8%D0%B0%D1%85%D0%B8_%D0%97%D0%B8%D0%BD%D0%B4%D0%B0%29.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Shah-i-Zinda,_Samarkand_(Shohi-Zinda_majmuasi,_Samarqand,_%D0%A8%D0%B0%D1%85%D0%B8_%D0%97%D0%B8%D0%BD%D0%B4%D0%B0).jpg",
    description:
      "Bir-biriga tutash maqbaralardan iborat tarixiy majmua. Peshtoqlardagi koshinkor bezaklar o'rta asr me'morchiligining go'zal namunalaridir.",
  },
  {
    name: "Ark qal'asi",
    location: "Buxoro",
    period: "Qadimiy qal'a",
    category: "madaniy",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Ark_of_Bukhara_2023.9.jpg/1280px-Ark_of_Bukhara_2023.9.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Ark_of_Bukhara_2023.9.jpg",
    description:
      "Buxoro hukmdorlari qarorgohi bo'lgan ulkan qal'a. Hozir uning ichida muzey va tarixiy inshootlar faoliyat yuritadi.",
  },
  {
    name: "Minorai Kalon va Poi Kalon",
    location: "Buxoro",
    period: "XII asr",
    category: "madaniy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Poi_Kalon.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Poi_Kalon.jpg",
    description:
      "Buxoroning ramziga aylangan minorasi va uning yonidagi masjid hamda madrasa ansambli. Minora 1127-yilda qurilgan.",
  },
  {
    name: "Ichan-Qal'a",
    location: "Xiva",
    period: "Tarixiy shahar",
    category: "madaniy",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Islam_Khodja_Madrasa_01.jpg/1280px-Islam_Khodja_Madrasa_01.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Islam_Khodja_Madrasa_01.jpg",
    description:
      "Xivaning devorlar bilan o'ralgan ichki shahri. Masjid, madrasa, minoralar va saroylari bilan 1990-yilda UNESCO Jahon merosi ro'yxatiga kiritilgan.",
  },
  {
    name: "Kalta Minor",
    location: "Xiva",
    period: "XIX asr",
    category: "madaniy",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/View_from_the_city_walls%2C_Khiva_%284934484894%29.jpg/1280px-View_from_the_city_walls%2C_Khiva_%284934484894%29.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:View_from_the_city_walls,_Khiva_(4934484894).jpg",
    description:
      "Rang-barang koshinlar bilan bezatilgan, qurilishi tugallanmay qolgan mashhur minora. Xivaning eng taniqli me'moriy belgilaridan biri.",
  },
  {
    name: "Oqsaroy saroyi qoldiqlari",
    location: "Shahrisabz",
    period: "XIV–XV asrlar",
    category: "madaniy",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Ak_Serai_Palace%2C_Shakhrisabz_%28490496%29.jpg/1280px-Ak_Serai_Palace%2C_Shakhrisabz_%28490496%29.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Ak_Serai_Palace,_Shakhrisabz_(490496).jpg",
    description:
      "Amir Temur davrida qurilgan ulkan saroyning bugungacha saqlangan peshtoq qismi. Shahrisabzning muhim tarixiy yodgorliklaridan.",
  },
  {
    name: "Hazrati Imom majmuasi",
    location: "Toshkent",
    period: "Tarixiy va zamonaviy ansambl",
    category: "shahar",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Barakhan_Madrasah_Tashkent.jpg/1280px-Barakhan_Madrasah_Tashkent.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Barakhan_Madrasah_Tashkent.jpg",
    description:
      "Toshkentning eski shahridagi masjid va madrasalar majmuasi. Bu hududda Usmon Qur'oni saqlanadigan Muyi Muborak madrasasi ham joylashgan.",
  },
  {
    name: "Fayoztepa buddaviylik majmuasi",
    location: "Termiz",
    period: "I–III asrlar",
    category: "madaniy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Fayaz_Tepe%2C_Stupa.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Fayaz_Tepe,_Stupa.jpg",
    description:
      "Qadimgi Termiz yaqinidagi buddaviylik ibodatxonasi va monastir xarobalari. U mintaqaning qadimiy madaniy aloqalarini o'rganishda muhim yodgorlikdir.",
  },
  {
    name: "Aydarko'l",
    location: "Jizzax va Navoiy hududlari",
    period: "Tabiiy manzara",
    category: "tabiat",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Aydar_Lake.jpg/1280px-Aydar_Lake.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Aydar_Lake.jpg",
    description:
      "Qizilqum cho'li bag'ridagi yirik ko'l. Sohil bo'yida dam olish, qushlarni kuzatish va cho'l tabiatini ko'rish mumkin.",
  },
  {
    name: "Chorvoq suv ombori",
    location: "Toshkent viloyati",
    period: "Tabiiy-dam olish maskani",
    category: "tabiat",
    image:
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Chirchik_River_in_Khodzhikent.jpg/1280px-Chirchik_River_in_Khodzhikent.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Chirchik_River_in_Khodzhikent.jpg",
    description:
      "Tyan-Shan tog'lari etagidagi mashhur dam olish maskani. Atrofida tog' manzaralari, qishloqlar va sayr yo'nalishlari mavjud.",
  },
];

const regions = [
  {
    name: "Andijon viloyati",
    center: "Andijon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Devonaboy_Jome_Mosque%2C_Andijan%2C_Uzbekistan.jpg/1280px-Devonaboy_Jome_Mosque%2C_Andijan%2C_Uzbekistan.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Devonaboy_Jome_Mosque,_Andijan,_Uzbekistan.jpg",
    description: "Farg'ona vodiysining sharqidagi gavjum hudud. Andijon shahri, Bobur merosi va an'anaviy hunarmandchiligi bilan tanilgan.",
    highlights: "Bobur bog'i · Jome majmuasi · Xonobod",
  },
  {
    name: "Buxoro viloyati",
    center: "Buxoro",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Kalon-Ensemble_Buchara.jpg/1280px-Kalon-Ensemble_Buchara.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Kalon-Ensemble_Buchara.jpg",
    description: "Buyuk Ipak yo'li tarixini saqlagan qadimiy voha. Buxoro shahri masjid, madrasa va karvonsaroylari bilan mashhur.",
    highlights: "Ark · Poi Kalon · Labi Hovuz",
  },
  {
    name: "Farg'ona viloyati",
    center: "Farg'ona",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Ferghana0234-Urinboev.jpg/1280px-Ferghana0234-Urinboev.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Ferghana0234-Urinboev.jpg",
    description: "Bog'lar va serhosil dalalarga boy vodiy hududi. Marg'ilon atlas-adras matolari, Rishton esa kulolchilik an'analari bilan tanilgan.",
    highlights: "Marg'ilon · Rishton · Qo'qon",
  },
  {
    name: "Jizzax viloyati",
    center: "Jizzax",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Jizzax.jpg/1280px-Jizzax.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Jizzax.jpg",
    description: "Tog', dasht va ko'l manzaralarini birlashtirgan hudud. Zomin milliy tabiat bog'i sayohatchilar orasida mashhur.",
    highlights: "Zomin · Aydarko'l · Forish",
  },
  {
    name: "Namangan viloyati",
    center: "Namangan",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Mulla_Qirg%CA%BBiz_madrasasi_04.jpg/1280px-Mulla_Qirg%CA%BBiz_madrasasi_04.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Mulla_Qirg%CA%BBiz_madrasasi_04.jpg",
    description: "Farg'ona vodiysining shimoliy qismidagi viloyat. Namangan shahri gulchilik va bog'dorchilik an'analari bilan ajralib turadi.",
    highlights: "Namangan shahri · Chortoq · Axsikent",
  },
  {
    name: "Navoiy viloyati",
    center: "Navoiy",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Sarmishsoy_rasmlari_366.jpg/1280px-Sarmishsoy_rasmlari_366.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Sarmishsoy_rasmlari_366.jpg",
    description: "Maydoni katta, cho'l va tog'li landshaftlarga ega hudud. Qadimiy karvon yo'llari va Nurota tog'lari bilan tanishish mumkin.",
    highlights: "Nurota · Sarmishsoy · Qizilqum",
  },
  {
    name: "Qashqadaryo viloyati",
    center: "Qarshi",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Complex_of_Dorut_Tilavat_-_55474294886.jpg/1280px-Complex_of_Dorut_Tilavat_-_55474294886.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Complex_of_Dorut_Tilavat_-_55474294886.jpg",
    description: "Qarshi vohasi va qadimiy shaharlari joylashgan janubiy viloyat. Shahrisabz Amir Temur davri yodgorliklari bilan mashhur.",
    highlights: "Shahrisabz · Oqsaroy · Qarshi",
  },
  {
    name: "Qoraqalpog'iston Respublikasi",
    center: "Nukus",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Berdaq_at%C4%B1nda%C7%B5%C4%B1_Qaraqalpaq_%C3%A1debiyat%C4%B1_tariyx%C4%B1_m%C3%A1mleketlik_muzeyi.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Berdaq_at%C4%B1nda%C7%B5%C4%B1_Qaraqalpaq_%C3%A1debiyat%C4%B1_tariyx%C4%B1_m%C3%A1mleketlik_muzeyi.jpg",
    description: "Orolbo'yi va Amudaryo deltasi hududi. Nukusdagi Savitskiy muzeyi hamda qadimiy qal'alar mintaqaning o'ziga xos merosini ko'rsatadi.",
    highlights: "Nukus muzeyi · Mizdaxkan · Orolbo'yi",
  },
  {
    name: "Samarqand viloyati",
    center: "Samarqand",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/RegistanSquare_Samarkand.jpg/1280px-RegistanSquare_Samarkand.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:RegistanSquare_Samarkand.jpg",
    description: "Tarixiy Samarqand shahri joylashgan viloyat. Registon, Shohi Zinda va Go'ri Amir majmualari uning mashhur yodgorliklaridir.",
    highlights: "Registon · Shohi Zinda · Urgut",
  },
  {
    name: "Sirdaryo viloyati",
    center: "Guliston",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Syr_Darya.jpg/1280px-Syr_Darya.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Syr_Darya.jpg",
    description: "Mirzacho'l tekisligidagi viloyat. Sirdaryo bo'yidagi tabiat va dehqonchilik hududlari bilan tanishish mumkin.",
    highlights: "Guliston · Sirdaryo bo'yi · Sayxunobod",
  },
  {
    name: "Surxondaryo viloyati",
    center: "Termiz",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Boysun_Surkhandarya.JPG",
    imagePage: "https://commons.wikimedia.org/wiki/File:Boysun_Surkhandarya.JPG",
    description: "O'zbekistonning janubidagi iliq iqlimli hudud. Termiz atrofidagi buddaviylik yodgorliklari va Boysun madaniyati bilan tanilgan.",
    highlights: "Termiz · Fayoztepa · Boysun",
  },
  {
    name: "Toshkent viloyati",
    center: "Nurafshon",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Chirchik_River_in_Khodzhikent.jpg/1280px-Chirchik_River_in_Khodzhikent.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Chirchik_River_in_Khodzhikent.jpg",
    description: "Toshkent shahri atrofini o'rab turgan tog'li va vodiyli hudud. Chorvoq, Chimgan va Ugom-Chatqol tabiat maskanlari shu yerda.",
    highlights: "Chorvoq · Chimgan · Parkent",
  },
  {
    name: "Toshkent shahri",
    center: "Toshkent",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Nest_One_Tashkent.jpg/1280px-Nest_One_Tashkent.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Nest_One_Tashkent.jpg",
    description: "O'zbekiston poytaxti va eng yirik shahri. Zamonaviy markazlar bilan birga Chorsu bozori, eski shahar va Hazrati Imom majmuasi ham bor.",
    highlights: "Hazrati Imom · Chorsu · Amir Temur xiyoboni",
  },
  {
    name: "Xorazm viloyati",
    center: "Urganch",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/View_from_the_city_walls%2C_Khiva_%284934484894%29.jpg/1280px-View_from_the_city_walls%2C_Khiva_%284934484894%29.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:View_from_the_city_walls,_Khiva_(4934484894).jpg",
    description: "Amudaryo quyi oqimidagi tarixiy voha. Xiva shahri, Ichan-Qal'a va Xorazmning qadimiy madaniyati bilan mashhur.",
    highlights: "Xiva · Ichan-Qal'a · Urganch",
  },
];

const placeGrid = document.getElementById("placeGrid");
const regionGrid = document.getElementById("regionGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const detailDialog = document.getElementById("detailDialog");
const detailContent = document.getElementById("detailContent");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const aiProvider = document.getElementById("aiProvider");
const sendChat = document.getElementById("sendChat");
const conversation = [];

const placeDetails = {
  "Registon maydoni":
    "Registon nomi fors tilidagi “qumli joy” iborasi bilan bog'lanadi. Maydon atrofidagi uch madrasa Temuriylar davridan keyingi Samarqandning ilmiy va me'moriy taraqqiyotini ko'rsatadi. Koshinlar, peshtoqlar va hovlilarni tomosha qilish uchun vaqt ajrating.",
  "Go'ri Amir maqbarasi":
    "Maqbara dastlab Amir Temurning nabirasi Muhammad Sulton uchun qurilgan, keyinchalik Temuriylar sulolasi maqbarasiga aylangan. Ichki bezaklarida zarhal naqshlar, marmar va nefritdan foydalanilgan.",
  "Shohi Zinda majmuasi":
    "Majmuaning nomi “Tirik shoh” ma'nosini anglatadi. U Afrosiyob tepaligi yonidagi muqaddas ziyorat yo'li bo'ylab shakllangan; turli davrlarga oid maqbaralar koshinkor bezaklari bilan ajralib turadi.",
  "Ark qal'asi":
    "Ark Buxoroning qadimiy mustahkam qarorgohi bo'lib, turli davrlarda hukmdorlar, amaldorlar va hunarmandlar yashagan ichki shaharcha vazifasini bajargan. Muzey bo'limlarida shahar tarixi va saroy hayoti haqida ma'lumot olish mumkin.",
  "Minorai Kalon va Poi Kalon":
    "Poi Kalon ansambli Kalon minorasi, Kalon masjidi va Mir Arab madrasasini birlashtiradi. Minora asrlar davomida karvonlar uchun mo'ljal bo'lib xizmat qilgan; ansambl Buxoroning tarixiy markazidagi asosiy diqqatga sazovor joylardan.",
  "Ichan-Qal'a":
    "Ichan-Qal'a — Xivaning ichki shahri bo'lib, mudofaa devorlari ichida saroylar, masjidlar, madrasalar va turar joylarni jamlaydi. Tarixiy shahar 1990-yilda UNESCO Jahon merosi ro'yxatiga kiritilgan.",
  "Kalta Minor":
    "Kalta Minorning qurilishi Muhammad Aminxon davrida boshlangan, ammo hukmdor vafotidan keyin tugallanmay qolgan. Uning o'ziga xos keng shakli va moviy-yashil koshinlari Xiva siluetini belgilab beradi.",
  "Oqsaroy saroyi qoldiqlari":
    "Oqsaroy Amir Temur buyrug'i bilan Shahrisabzda bunyod etilgan saroy edi. Bugun saqlangan ulkan peshtoq qoldiqlari inshootning avvalgi ko'lami va bezaklarini tasavvur qilish imkonini beradi.",
  "Hazrati Imom majmuasi":
    "Toshkentning eski shahridagi majmua Baroqxon madrasasi, Tilla Shayx masjidi va boshqa diniy-ma'rifiy binolarni qamrab oladi. Bu joy poytaxtning tarixiy mahallalari va islomiy qo'lyozmalar merosi bilan tanishtiradi.",
  "Fayoztepa buddaviylik majmuasi":
    "Fayoztepa qadimgi Termiz yaqinidagi buddaviylik ibodatxonasi va monastir xarobalaridir. Topilmalar Kushon davridagi diniy hayot va Markaziy Osiyoning Hindiston hamda boshqa hududlar bilan aloqalarini yoritadi.",
  "Aydarko'l":
    "Aydarko'l Qizilqum hududidagi ko'llar tizimining yirik qismi bo'lib, cho'l landshafti bilan keskin farq qiladigan suv va qamishzor manzaralariga ega. Qush kuzatish va cho'l tajribasi uchun qiziqarli manzil.",
  "Chorvoq suv ombori":
    "Chorvoq suv ombori Ugom-Chatqol tog'lari etagida joylashgan. Ko'l atrofi dam olish maskanlari va tog' yo'nalishlari bilan tanilgan; mavsumga qarab ob-havo, yo'l holati va xavfsizlik qoidalarini oldindan tekshirish lozim.",
};

const regionDetails = {
  "Andijon viloyati": "Vodiydagi zich aholi yashaydigan va bog'dorchilik rivojlangan hudud. Andijon shahri Bobur tavallud topgan joy sifatida ham tarixiy ahamiyatga ega. Devonaboy Jome majmuasi, Bobur bog'i va Xonobod tomonidagi tog'oldi manzaralarini ko'rish mumkin.",
  "Buxoro viloyati": "Viloyatning tarixiy markazi Buyuk Ipak yo'li bo'yidagi Buxoro vohasidir. Eski shaharda Ark, Poi Kalon va Labi Hovuz ansambllari, shahar tashqarisida esa Bahouddin Naqshband majmuasi va qadimiy manzilgohlar bor.",
  "Farg'ona viloyati": "Farg'ona vodiysining janubiy qismidagi hudud ipakchilik, bog'dorchilik va hunarmandchiligi bilan mashhur. Marg'ilonda atlas-adras to'qish, Rishtonda kulolchilik, Qo'qonda esa Xudoyorxon saroyi va tarixiy markaz bilan tanishish mumkin.",
  "Jizzax viloyati": "Viloyat Mirzacho'l tekisliklaridan Turkiston tizmasi etaklarigacha cho'ziladi. Zomin milliy tabiat bog'i, Aydarko'l va Forish atrofi tabiat hamda ochiq havodagi sayohatlarni yoqtiruvchilar uchun qiziqarli.",
  "Namangan viloyati": "Farg'ona vodiysining shimoliy qismidagi viloyat gulchilik, bog'dorchilik va tarixiy yodgorliklari bilan tanilgan. Namangan shahri, Mulla Qirg'iz madrasasi, Chortoq va qadimiy Axsikent xarobalari diqqatga sazovor.",
  "Navoiy viloyati": "O'zbekistonning maydoni katta hududlaridan biri bo'lib, Qizilqum cho'li, Nurota tog'lari va qadimiy karvon yo'llarini qamrab oladi. Sarmishsoy qoyatosh rasmlari, Nurota va Qizilqum manzaralari tarix hamda tabiatni birlashtiradi.",
  "Qashqadaryo viloyati": "Qarshi vohasi va Hisor tog'lari etaklarini qamrab olgan janubiy hudud. Shahrisabzdagi Oqsaroy va Dorut Tilovat majmualari Amir Temur davri tarixini, Qarshi esa vohaning shahar hayotini namoyon etadi.",
  "Qoraqalpog'iston Respublikasi": "Orolbo'yi va Amudaryo deltasidagi avtonom respublika. Nukusdagi Savitskiy muzeyi, Mizdaxkan majmuasi va qadimiy qal'alar qoraqalpoq madaniyati hamda Xorazm vohasining tarixini ochib beradi. Orolbo'yi safarini rejalashdan oldin masofa va mahalliy sharoitni hisobga oling.",
  "Samarqand viloyati": "Zarafshon vodiysidagi viloyat markazida Registon, Go'ri Amir va Shohi Zinda kabi jahon miqyosidagi yodgorliklar joylashgan. Samarqanddan tashqarida Urgut bozori, qishloqlar va tog'oldi manzaralarini kashf etish mumkin.",
  "Sirdaryo viloyati": "Mirzacho'l tekisligidagi viloyat Sirdaryo bo'yidagi dehqonchilik hududlarini qamrab oladi. Guliston viloyat markazi, Sayxunobod va daryo bo'yi manzaralari esa sokin mahalliy sayohat uchun mos.",
  "Surxondaryo viloyati": "O'zbekistonning eng janubiy, iliq iqlimli hududi. Termiz atrofidagi Fayoztepa va boshqa qadimiy yodgorliklar buddaviylik tarixini, Boysun esa tog' manzaralari va an'anaviy madaniyatni ko'rsatadi.",
  "Toshkent viloyati": "Poytaxtni o'rab turgan viloyat tog'lar, daryolar va dam olish hududlari bilan ajralib turadi. Chorvoq, Chimgan, Ugom-Chatqol va Parkent tomonlari tabiat qo'ynida sayr qilishga imkon beradi.",
  "Toshkent shahri": "O'zbekiston poytaxti va eng yirik shahri: zamonaviy markazlar bilan birga eski shahar, Chorsu bozori, Hazrati Imom majmuasi va Amir Temur xiyoboni mavjud. Metro stansiyalarining me'morchiligi ham alohida ko'rishga arziydi.",
  "Xorazm viloyati": "Amudaryoning quyi oqimidagi qadimiy voha. Xiva ichidagi Ichan-Qal'a, Urganch shahri va Xorazmning an'anaviy taomlari hamda hunarmandchiligi viloyatning asosiy diqqatga sazovor jihatlaridir.",
};

function openDetail(type, index) {
  const item = (type === "place" ? places : regions)[index];
  if (!item) return;

  const isPlace = type === "place";
  const title = escapeHTML(item.name);
  const summary = escapeHTML(item.description);
  const extra = escapeHTML(
    isPlace ? placeDetails[item.name] : regionDetails[item.name]
  );
  const facts = isPlace
    ? `<div class="detail-fact"><span>Joylashuvi</span><strong>${escapeHTML(item.location)}</strong></div>
       <div class="detail-fact"><span>Davri / turi</span><strong>${escapeHTML(item.period)}</strong></div>`
    : `<div class="detail-fact"><span>Ma'muriy markazi</span><strong>${escapeHTML(item.center)}</strong></div>
       <div class="detail-fact"><span>Mashhur joylar</span><strong>${escapeHTML(item.highlights)}</strong></div>`;

  detailContent.innerHTML = `
    <img class="detail-image" src="${escapeHTML(item.image)}" alt="${title}" />
    <p class="eyebrow">${isPlace ? "Tarixiy joy va sayohat manzili" : "O'zbekiston hududi"}</p>
    <h2>${title}</h2>
    <div class="detail-facts">${facts}</div>
    <section class="detail-copy">
      <h3>Umumiy ma'lumot</h3>
      <p>${summary}</p>
      <h3>${isPlace ? "Tarixi va ahamiyati" : "Hudud haqida batafsil"}</h3>
      <p>${extra}</p>
      <h3>Sayohat uchun maslahat</h3>
      <p>
        Safar oldidan obidaning ish vaqti, kirish shartlari va mahalliy ob-havoni tekshiring.
        Tarixiy joylarda ashyolarga ehtiyotkor munosabatda bo'ling; muqaddas maskanlarda
        mahalliy odob va kiyinish qoidalariga rioya qiling.
      </p>
    </section>
    <a class="image-credit" href="${escapeHTML(item.imagePage)}" target="_blank" rel="noopener noreferrer">Rasm manbasi: Wikimedia Commons</a>
  `;
  detailDialog.showModal();
}

function renderPlaces(filter = "all") {
  const filtered = places
    .map((place, index) => ({ place, index }))
    .filter(({ place }) => filter === "all" || place.category === filter);

  placeGrid.innerHTML = filtered
    .map(
      ({ place, index }) => `
        <article class="place-card" data-detail-type="place" data-detail-index="${index}">
          <img src="${place.image}" alt="${place.name} — ${place.location}" loading="lazy" decoding="async" />
          <div class="place-card-content">
            <div class="place-meta">
              <span>${place.location}</span>
              <span class="place-tag">${place.period}</span>
            </div>
            <h3>${place.name}</h3>
            <p class="card-summary">${place.description}</p>
            <button class="detail-button" type="button" data-detail-type="place" data-detail-index="${index}">Batafsil ma'lumot</button>
            <a class="image-credit" href="${place.imagePage}" target="_blank" rel="noopener noreferrer">Rasm manbasi: Wikimedia Commons</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRegions() {
  regionGrid.innerHTML = regions
    .map(
      (region, index) => `
        <article class="region-card" data-detail-type="region" data-detail-index="${index}">
          <img src="${region.image}" alt="${region.name} manzarasi" loading="lazy" decoding="async" />
          <div class="region-card-content">
            <p class="region-center">Markazi: ${region.center}</p>
            <h3>${region.name}</h3>
            <p class="card-summary">${region.description}</p>
            <p class="region-highlights"><strong>Ko'rishga arziydi:</strong> ${region.highlights}</p>
            <button class="detail-button" type="button" data-detail-type="region" data-detail-index="${index}">Hudud haqida batafsil</button>
            <a class="image-credit" href="${region.imagePage}" target="_blank" rel="noopener noreferrer">Rasm manbasi: Wikimedia Commons</a>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderPlaces(button.dataset.filter);
  });
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function performSearch() {
  const query = searchInput.value.trim().toLocaleLowerCase("uz");

  if (!query) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <h3>Qidiruv so'zi kiritilmagan</h3>
        <p>Masalan: Samarqand, Buxoro, Xiva yoki Registon deb yozing.</p>
      </div>
    `;
    return;
  }

  const matchingPlaces = places
    .map((place, index) => ({ place, index }))
    .filter(({ place }) =>
      `${place.name} ${place.location} ${place.description} ${place.period}`
        .toLocaleLowerCase("uz")
        .includes(query)
    );
  const matchingRegions = regions
    .map((region, index) => ({ region, index }))
    .filter(({ region }) =>
      `${region.name} ${region.center} ${region.description} ${region.highlights}`
        .toLocaleLowerCase("uz")
        .includes(query)
    );

  if (!matchingPlaces.length && !matchingRegions.length) {
    searchResults.innerHTML = `
      <div class="empty-state">
        <h3>Hech narsa topilmadi</h3>
        <p>"${escapeHTML(searchInput.value)}" bo'yicha natija yo'q. Boshqa nom yoki shahar nomini kiriting.</p>
      </div>
    `;
    return;
  }

  const placeResults = matchingPlaces
    .map(
      ({ place, index }) => `
        <article class="search-result-card">
          <p class="region-center">Tarixiy joy · ${place.location}</p>
          <h3>${place.name}</h3>
          <p>${place.description}</p>
          <button class="detail-button" type="button" data-detail-type="place" data-detail-index="${index}">Batafsil ma'lumot</button>
        </article>
      `
    )
    .join("");
  const regionResults = matchingRegions
    .map(
      ({ region, index }) => `
        <article class="search-result-card">
          <p class="region-center">Hudud · Markazi: ${region.center}</p>
          <h3>${region.name}</h3>
          <p>${region.description}</p>
          <p><strong>Ko'rishga arziydi:</strong> ${region.highlights}</p>
          <button class="detail-button" type="button" data-detail-type="region" data-detail-index="${index}">Hudud haqida batafsil</button>
        </article>
      `
    )
    .join("");

  searchResults.innerHTML = placeResults + regionResults;
}

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element) || target.closest(".image-credit")) return;
    const detailTarget = target.closest("[data-detail-type]");
    if (detailTarget) {
      openDetail(
        detailTarget.dataset.detailType,
        Number(detailTarget.dataset.detailIndex)
      );
    }
  });

  document.getElementById("closeDetail").addEventListener("click", () => {
    detailDialog.close();
  });

  detailDialog.addEventListener("click", (event) => {
    if (event.target === detailDialog) detailDialog.close();
  });

  function appendChatMessage(role, text) {
    const message = document.createElement("div");
    message.className = `chat-message ${role === "user" ? "user-message" : "assistant-message"}`;
    message.textContent = text;
    chatMessages.append(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return message;
  }

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = chatInput.value.trim();
    if (!text || sendChat.disabled) return;

    conversation.push({ role: "user", content: text });
    appendChatMessage("user", text);
    chatInput.value = "";
    sendChat.disabled = true;
    sendChat.textContent = "Javob kutilmoqda...";
    const pendingMessage = appendChatMessage("assistant", "Javob tayyorlanmoqda...");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: aiProvider.value,
          messages: conversation.slice(-12),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "AI xizmatida xatolik yuz berdi.");
      }

      pendingMessage.textContent = result.reply;
      conversation.push({ role: "assistant", content: result.reply });
    } catch (error) {
      pendingMessage.textContent = error.message;
      pendingMessage.classList.add("chat-error");
      conversation.pop();
    } finally {
      sendChat.disabled = false;
      sendChat.textContent = "Yuborish";
      chatInput.focus();
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  document.getElementById("clearChat").addEventListener("click", () => {
    conversation.length = 0;
    chatMessages.replaceChildren();
    appendChatMessage(
      "assistant",
      "Salom! O'zbekiston haqida istalgan tilda savol bering."
    );
  });

searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

renderPlaces();
renderRegions();
searchResults.innerHTML = `
  <div class="empty-state">
    <h3>Qidiruv uchun so'z kiriting</h3>
    <p>Masalan: Registon, Buxoro, Samarqand yoki Xiva.</p>
  </div>
`;
