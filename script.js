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

function renderPlaces(filter = "all") {
  const filtered =
    filter === "all"
      ? places
      : places.filter((place) => place.category === filter);

  placeGrid.innerHTML = filtered
    .map(
      (place) => `
        <article class="place-card">
          <img src="${place.image}" alt="${place.name} — ${place.location}" loading="lazy" decoding="async" />
          <div class="place-card-content">
            <div class="place-meta">
              <span>${place.location}</span>
              <span class="place-tag">${place.period}</span>
            </div>
            <h3>${place.name}</h3>
            <p>${place.description}</p>
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
      (region) => `
        <article class="region-card">
          <img src="${region.image}" alt="${region.name} manzarasi" loading="lazy" decoding="async" />
          <div class="region-card-content">
            <p class="region-center">Markazi: ${region.center}</p>
            <h3>${region.name}</h3>
            <p>${region.description}</p>
            <p class="region-highlights"><strong>Ko'rishga arziydi:</strong> ${region.highlights}</p>
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

  const matchingPlaces = places.filter((place) =>
    `${place.name} ${place.location} ${place.description} ${place.period}`
      .toLocaleLowerCase("uz")
      .includes(query)
  );
  const matchingRegions = regions.filter((region) =>
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
      (place) => `
        <article class="search-result-card">
          <p class="region-center">Tarixiy joy · ${place.location}</p>
          <h3>${place.name}</h3>
          <p>${place.description}</p>
        </article>
      `
    )
    .join("");
  const regionResults = matchingRegions
    .map(
      (region) => `
        <article class="search-result-card">
          <p class="region-center">Hudud · Markazi: ${region.center}</p>
          <h3>${region.name}</h3>
          <p>${region.description}</p>
          <p><strong>Ko'rishga arziydi:</strong> ${region.highlights}</p>
        </article>
      `
    )
    .join("");

  searchResults.innerHTML = placeResults + regionResults;
}

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
