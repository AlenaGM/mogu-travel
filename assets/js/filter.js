const excursionsData = [
  {
    name: "Прогулки по Монмартру",
    code: "monmartre",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "5500",
    pricechild: "3000",
    duration: "3",
    description:
      "Район Монмартр, расположенный на одноименном холме, значительно отличается от других кварталов Парижа и своей историей, и атмосферой. В далеком прошлом здесь была небольшая деревня и женский монастырь. Когда Монмартр вошел в состав Парижа, его обитатели остались верны себе и сохранили деревенский уклад жизни. Затем этот живописный уголок французской столицы облюбовали художники.",
    capacity: "10",
    destination: ["monmartre", "paris"],
    image: "assets/img/monmartre",
  },
  {
    name: "Лион с первого взгляда",
    code: "lyon",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "5000",
    pricechild: "2500",
    duration: "4",
    description:
      "Лион подкупит вас старинными базиликами и площадями, видами с холма Фурвьер и набережной реки Сона, умением жить красиво и превращать гастрономию в религию. Вы увидите главные и секретные уголки города и поймете его девиз — «Only Lyon».",
    capacity: "15",
    destination: "lyon",
    image: "assets/img/lyon",
  },
  {
    name: "Страсбург: Франция с немецким акцентом",
    code: "strasbourg",
    category: "bus",
    categoryname: "Экскурсия на автобусе",
    priceadult: "3000",
    pricechild: "1000",
    duration: "2",
    description:
      "За 2 часа вас ни раз восхитит красота архитектуры Страсбурга. Вы увидите, какие пышные дворцы строили потомки знаменитых фамилий. И насколько простыми, но в то же время практичными, были дома ремесленников. Я проведу вас своим любимым маршрутом, который охватывает самые красивые достопримечательности, и поделюсь историями и секретами пребывания здесь.",
    capacity: "15",
    destination: "strasbourg",
    image: "assets/img/strasbourg",
  },
  {
    name: "По сказочным улочкам Кольмара",
    code: "colmar",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "3500",
    pricechild: "1500",
    duration: "2",
    description:
      "В Кольмаре кажется, что вы попали в волшебную сказку или на идеальную открытку — это притягательная неизведанная Европа! Во время прогулки вы увидите главные достопримечательности, узнаете о переплетении прошлого и настоящего, реального и воображаемого. И не только — я помогу почувствовать самобытность города и расскажу о его жизни изнутри.",
    capacity: "10",
    destination: "colmar",
    image: "assets/img/colmar",
  },
  {
    name: "Правда и выдумки о Марселе",
    code: "marseille",
    category: "bus",
    categoryname: "Экскурсия на автобусе",
    priceadult: "5000",
    pricechild: "2500",
    duration: "3",
    description:
      "Марсель настолько разнообразен и непостижим, что жители и гости города создают собственные образы этого места. На экскурсии вы поймете, что из этого — правда, что — предубеждение, а что — местная легенда. Ощутите загадочность города, совместившего в себе французские, итальянские и восточные традиции. И в результате посмотрите на Марсель по-своему через истории местных жителей.",
    capacity: "30",
    destination: "marseille",
    image: "assets/img/marseilles",
  },
  {
    name: "Монпелье — открыть настоящую Южную Францию",
    code: "montpellier",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "4000",
    pricechild: "2000",
    duration: "2",
    description:
      "Гуляя по малоизвестному Монпелье, вы узнаете о его богатом торговом, духовном и интеллектуальном прошлом, увидите старейшие еврейские бани, первый ботанический сад страны и факультет, на котором учился Нострадамус, попробуете местные деликатесы и дополните представление об обаятельном Юге Франции.",
    capacity: "5",
    destination: "montpellier",
    image: "assets/img/montpellier",
  },
  {
    name: "Многоликий Версаль",
    code: "versailles",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "6000",
    pricechild: "3000",
    duration: "4",
    description:
      "Версаль — это не только знаменитый королевский дворец и живописные сады, но и улочки антикваров, ухоженные дома, изысканные бутики, уютные кондитерские и оживленные рынки. Я помогу раскрыть все грани этого удивительного города и понять, что значит «дышать воздухом Версаля».",
    capacity: "10",
    destination: ["versailles", "paris"],
    image: "assets/img/versailles",
  },
  {
    name: "Руан — средневековые врата в Нормандию",
    code: "rouen",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "7000",
    pricechild: "4000",
    duration: "2",
    description:
      "В многогранном Руане каждый находит что-то свое, «для души». И я вам в этом помогу. Вы не только услышите множество любопытных фактов о бесстрашных викингах, отважной Жанне д’Арк и тайной символике готических соборов, но и увидите места, которые любили Клод Моне и Гюстав Флобер. А еще я порекомендую уютные заведения, где можно попробовать традиционный нормандский яблочный пирог тарт татен и свежайших нормандских устриц.",
    capacity: "15",
    destination: "rouen",
    image: "assets/img/rouen",
  },
  {
    name: "Ежедневная прогулка по Парижу",
    code: "paris",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "3000",
    pricechild: "1500",
    duration: "2",
    description:
      "На нашей дружеской прогулке вы познакомитесь с нетривиальной историей Парижа, окунетесь в романтическую атмосферу города и взглянете на него глазами местных жителей. Мы не только прогуляемся по достопримечательностям, с которых начинается Париж, но и расскажем о жизни в столице, о французском менталитете и самых вкусных местах города!",
    capacity: "15",
    destination: "paris",
    image: "assets/img/paris",
  },
  {
    name: "Ницца: любовь с первого взгляд",
    code: "nice",
    category: "foot",
    categoryname: "Экскурсия пешком",
    priceadult: "4000",
    pricechild: "2000",
    duration: "3",
    description:
      "Любовь к городу, как и любовь вообще, — сложное, многосоставное чувство. Я покажу Ниццу такой, какой её любят местные жители и обожают приезжие. Вы убедитесь, что здесь царит обеспеченность — вовсе не публики, давно облюбовавшей Французскую ривьеру, но богатство истории и культуры. Я поделюсь с вами знаниями о судьбе Ниццы и лучшими городскими «зарисовками» на тему любви: к морским просторам, солнцу, веселью, вкусной еде и даже религии.",
    capacity: "5",
    destination: "nice",
    image: "assets/img/nice",
  },
];

const filters = document.querySelector("#filters");

filters.addEventListener("change", filterExcursions);

function filterExcursions() {
  const type = [...filters.querySelectorAll("#type input:checked")].map(
    (n) => n.value
  );
  let nbpers = Number(filters.querySelector("#nbpers").value);
  let costMin = Number(document.querySelector("#pricemin").value);
  let costMax = Number(document.querySelector("#pricemax").value);
  const dest = filters.querySelector("#dest").value;
  const duration = [...filters.querySelectorAll("#duration input:checked")].map(
    (n) => n.value
  );

  const filteredExcursions = excursionsData.filter(
    (n) =>
      (!type.length || type.includes(n.category)) &&
      (!dest || n.destination.includes(dest)) &&
      n.capacity >= nbpers &&
      (!duration.length || duration.includes(n.duration)) &&
      (!costMin || costMin <= n.priceadult) &&
      (!costMax || costMax >= n.priceadult)
  );

  console.log(filteredExcursions);

  document.getElementById("result").textContent = declOfNum(
    filteredExcursions.length,
    [
      `Найдена ${filteredExcursions.length} экскурсия`,
      `Найдены ${filteredExcursions.length} экскурсии`,
      `Найдено ${filteredExcursions.length} экскурсий`,
    ]
  );

  outputExcursions(filteredExcursions);
}

//reset filters
document.querySelector(".sidebar__reset").addEventListener("click", () => {
  filters.querySelector("#nbpers").value = 1;
  filters.querySelector("#dest").value = "";
  filters.querySelector("#pricemin").value = lowestPrice;
  filters.querySelector("#pricemax").value = highestPrice;

  let inputs = document.querySelectorAll("input");

  for (const input of inputs) {
    if (input.type == "checkbox" || input.type == "radio")
      input.checked = false;
  }

  filterExcursions();

  document.getElementById("result").textContent = "";
});

function outputExcursions(excursions) {
  document.getElementById("excursions__container").innerHTML = excursions
    .map(
      (n) => `
      <div class="excursion__item">
      <div class= "excursion__img">
          <picture>
          <source
            srcset="${n.image}.webp"
            type="image/webp"
          />
          <img
            src="${n.image}.png"
            srcset="${n.image}.png"
            alt="${n.code}"
            class="excursion__thumb"
          />
        </picture>
      </div>
      <div class= "excursion__card">
          <div class= "excursion__category">${n.categoryname}</div>
          <h3 class="excursion__title" id="${n.code}">${n.name}</h3>
          <div class="excursion__info">
            <div class="excursion__info_price">
              <div><img src="assets/img/coins.svg" alt="coins" />${
                n.priceadult
              }</div>
              <span>Взрослый билет</span>
            </div>
            <div class="excursion__info_price">
              <div><img src="assets/img/coins.svg" alt="coins" />${
                n.pricechild
              }</div>
              <span>Детский билет</span>
            </div>
            <div class="excursion__info_price">
              <div><img src="assets/img/clock.svg" alt="clock" />${
                n.duration
              }</div>
            </div>
          </div>
          <div class="excursion__description">${n.description.slice(
            0,
            450
          )} </div>
          <div class="excursion__buttons">
            <a class="button" href="#">Подробнее</a>
          </div>
      </div>
  </div>`
    )
    .join("");
}

outputExcursions(excursionsData);

//nb pers input
let personsInp = document.querySelector("#nbpers");
const maxCapacity = Math.max(...excursionsData.map((exc) => exc.capacity));

// eslint-disable-next-line no-unused-vars
function changeQuantity(type) {
  if (type === "minus") {
    personsInp.value == 1 ? (personsInp.value = 1) : personsInp.value--;
    document.querySelector("#nbpers").value = personsInp.value;
  }
  if (type === "plus") {
    personsInp.value == maxCapacity
      ? (personsInp.value = maxCapacity)
      : personsInp.value++;
  }

  document.querySelector("#persons").textContent = declOfNum(personsInp.value, [
    "человек",
    "человека",
    "человек",
  ]);

  filterExcursions();
}

function declOfNum(n, text_arr) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_arr[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_arr[1];
  }
  if (n1 === 1) {
    return text_arr[0];
  }
  return text_arr[2];
}

// eslint-disable-next-line no-unused-vars
function checkquantity() {
  personsInp.value = Math.trunc(personsInp.value);
  if (personsInp.value < 1) personsInp.value = 1;
  if (personsInp.value > maxCapacity) personsInp.value = maxCapacity;
}
// PRICE RANGE SLIDER
const highestPrice = Math.max(...excursionsData.map((exc) => exc.priceadult));
const lowestPrice = Math.min(...excursionsData.map((exc) => exc.priceadult));

document.querySelector("#rangemin").value = lowestPrice;
document.querySelector("#rangemax").value = highestPrice;

const rangeInputMin = document.querySelector("#rangemin"); //minval
const rangeInputMax = document.querySelector("#rangemax"); //maxval
const priceInputMin = document.querySelector("#pricemin"); //priceInputMin
const priceInputMax = document.querySelector("#pricemax"); //priceInputMax
const minGap = 0;
const range = document.querySelector(".filter-slider-track");

const sliderMinValue = parseInt(rangeInputMin.min);
const sliderMaxValue = parseInt(rangeInputMax.max);

function slideMin() {
  let gap = parseInt(rangeInputMax.value) - parseInt(rangeInputMin.value);
  if (gap <= minGap) {
    rangeInputMin.value = parseInt(rangeInputMax.value) - minGap;
  }
  priceInputMin.value = rangeInputMin.value;
  setArea();
}

function slideMax() {
  let gap = parseInt(rangeInputMax.value) - parseInt(rangeInputMin.value);
  if (gap <= minGap) {
    rangeInputMax.value = parseInt(rangeInputMin.value) + minGap;
  }
  priceInputMax.value = rangeInputMax.value;
  setArea();
}

function setArea() {
  range.style.left = (rangeInputMin.value / sliderMaxValue) * 100 + "%";
  console.log((rangeInputMin.value / sliderMaxValue) * 100);
  range.style.right = 100 - (rangeInputMax.value / sliderMaxValue) * 100 + "%";
}

// eslint-disable-next-line no-unused-vars
function setMinPrice() {
  let minPrice = parseInt(priceInputMin.value);
  if (minPrice < sliderMinValue) {
    priceInputMin.value = sliderMinValue;
  }
  rangeInputMin.value = priceInputMin.value;
  slideMin();
}

// eslint-disable-next-line no-unused-vars
function setMaxPrice() {
  let maxPrice = parseInt(priceInputMax.value);
  if (maxPrice > sliderMaxValue) {
    priceInputMax.value = sliderMaxValue;
  }
  rangeInputMax.value = priceInputMax.value;
  slideMax();
}

slideMin();
slideMax();

//СПОЙЛЕР
const spoilers = document.querySelectorAll(".filter__item_subtitle");

spoilers.forEach((spoiler) => {
  spoiler.addEventListener("click", function addVisible() {
    spoiler.parentElement.classList.toggle("_visible");
    spoiler.lastElementChild.classList.toggle("_minus");
  });
});

//МЕНЮ-БУРГЕР

const burgerMenu = document.querySelector(".menu__burger");
const bodyMenu = document.querySelector(".menu__body");
const menuLinks = document.querySelectorAll(".menu__link");

if (burgerMenu) {
  burgerMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    burgerMenu.classList.toggle("_active");
    bodyMenu.classList.toggle("_active");
  });
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}

function onMenuLinkClick() {
  if (burgerMenu.classList.contains("_active")) {
    document.body.classList.remove("_lock");
    burgerMenu.classList.remove("_active");
    bodyMenu.classList.remove("_active");
  }
}
