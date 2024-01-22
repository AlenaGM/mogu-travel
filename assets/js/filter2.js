const excursionsJson = `[{
    "name": "Прогулки по Монмартру",
    "code": "monmartre",
    "category": "foot",
    "categoryname": "Экскурсия пешком",
    "priceadult": "5500",
    "pricechild": "3000",
    "duration": "3",
    "description": "Район Монмартр, расположенный на одноименном холме, значительно отличается от других кварталов Парижа и своей историей, и атмосферой. В далеком прошлом здесь была небольшая деревня и женский монастырь. Когда Монмартр вошел в состав Парижа, его обитатели остались верны себе и сохранили деревенский уклад жизни. Затем этот живописный уголок французской столицы облюбовали художники, нашедшие здесь всё необходимое: источники вдохновения, недорогое жильё и большое количество ресторанов с дешёвым вином. Уделите немного вашего времени этому самому романтичному кварталу Парижа, и он отплатит Вам сполна — незабываемыми впечатлениями и теплыми воспоминаниями!",
    "capacity": "10",
    "destination": "monmartre",
    "image": "assets/img/monmartre.jpeg"
}, {
    "name": "Лион с первого взгляда",
    "code": "lyon",
    "category": "foot",
    "categoryname": "Экскурсия пешком",
    "priceadult": "5000",
    "pricechild": "2500",
    "duration": "4",
    "description": "Лион подкупит вас старинными базиликами и площадями, видами с холма Фурвьер и набережной реки Сона, умением жить красиво и превращать гастрономию в религию. Вы увидите главные и секретные уголки города и поймете его девиз — «Only Lyon».",
    "capacity": "15",
    "destination": "lyon",
    "image": "assets/img/lyon.jpeg"
}, {
    "name": "Страсбург: Франция с немецким акцентом",
    "code": "strasbourg",
    "category": "bus",
    "categoryname": "Экскурсия на автобусе",
    "priceadult": "3000",
    "pricechild": "1000",
    "duration": "2",
    "description": "За 2 часа вас ни раз восхитит красота архитектуры Страсбурга. Вы увидите, какие пышные дворцы строили потомки знаменитых фамилий. И насколько простыми, но в то же время практичными, были дома ремесленников. Я проведу вас своим любимым маршрутом, который охватывает самые красивые достопримечательности, и поделюсь историями и секретами пребывания здесь.",
    "capacity": "10",
    "destination": "strasbourg",
    "image": "assets/img/strasbourg.jpeg"
}, {
    "name": "По сказочным улочкам Кольмара",
    "code": "colmar",
    "category": "foot",
    "categoryname": "Экскурсия пешком",
    "priceadult": "3500",
    "pricechild": "1500",
    "duration": "2",
    "description": "В Кольмаре кажется, что вы попали в волшебную сказку или на идеальную открытку — это притягательная неизведанная Европа! Во время прогулки вы увидите главные достопримечательности, узнаете о переплетении прошлого и настоящего, реального и воображаемого. И не только — я помогу почувствовать самобытность города и расскажу о его жизни изнутри.",
    "capacity": "10",
    "destination": "colmar",
    "image": "assets/img/colmar.jpeg"
}, {
    "name": "Правда и выдумки о Марселе",
    "code": "marseilles",
    "category": "bus",
    "categoryname": "Экскурсия на автобусе",
    "priceadult": "5000",
    "pricechild": "2500",
    "duration": "3",
    "description": "Марсель настолько разнообразен и непостижим, что жители и гости города создают собственные образы этого места. На экскурсии вы поймете, что из этого — правда, что — предубеждение, а что — местная легенда. Ощутите загадочность города, совместившего в себе французские, итальянские и восточные традиции. И в результате посмотрите на Марсель по-своему через истории местных жителей.",
    "capacity": "5",
    "destination": "marseilles",
    "image": "assets/img/marseilles.jpeg"
}, {
    "name": "Монпелье — открыть настоящую Южную Францию",
    "code": "montpellier",
    "category": "foot",
    "categoryname": "Экскурсия пешком",
    "priceadult": "4000",
    "pricechild": "2000",
    "duration": "2",
    "description": "Гуляя по малоизвестному Монпелье, вы узнаете о его богатом торговом, духовном и интеллектуальном прошлом, увидите старейшие еврейские бани, первый ботанический сад страны и факультет, на котором учился Нострадамус, попробуете местные деликатесы и дополните представление об обаятельном Юге Франции.",
    "capacity": "5",
    "destination": "montpellier",
    "image": "assets/img/montpellier.jpeg"
}, {
    "name": "Многоликий Версаль",
    "code": "versailles",
    "category": "bus",
    "categoryname": "Экскурсия на автобусе",
    "priceadult": "6000",
    "pricechild": "3000",
    "duration": "4",
    "description": "Версаль — это не только знаменитый королевский дворец и живописные сады, но и улочки антикваров, ухоженные дома, изысканные бутики, уютные кондитерские и оживленные рынки. Я помогу раскрыть все грани этого удивительного города и понять, что значит «дышать воздухом Версаля».",
    "capacity": "10",
    "destination": "versailles",
    "image": "assets/img/versailles.jpeg"
}, {
    "name": "Руан — средневековые врата в Нормандию",
    "code": "rouen",
    "category": "foot",
    "categoryname": "Экскурсия пешком",
    "priceadult": "7000",
    "pricechild": "4000",
    "duration": "2",
    "description": "В многогранном Руане каждый находит что-то свое, «для души». И я вам в этом помогу. Вы не только услышите множество любопытных фактов о бесстрашных викингах, отважной Жанне д’Арк и тайной символике готических соборов, но и увидите места, которые любили Клод Моне и Гюстав Флобер. А еще я порекомендую уютные заведения, где можно попробовать традиционный нормандский яблочный пирог тарт татен и свежайших нормандских устриц, не отправляясь на побережье.",
    "capacity": "15",
    "destination": "rouen",
    "image": "assets/img/rouen.jpeg"
}, {
    "name": "Ежедневная прогулка по Парижу",
    "code": "paris",
    "category": "foot",
    "categoryname": "Экскурсия пешком",
    "priceadult": "3000",
    "pricechild": "1500",
    "duration": "2",
    "description": "На нашей дружеской прогулке вы познакомитесь с нетривиальной историей Парижа, окунетесь в романтическую атмосферу города и взглянете на него глазами местных жителей. Мы не только прогуляемся по достопримечательностям, с которых начинается Париж, но и расскажем о жизни в столице, о французском менталитете и самых вкусных местах города!",
    "capacity": "15",
    "destination": "paris",
    "image": "assets/img/paris.jpeg"
}, {
    "name": "Ницца: любовь с первого взгляд",
    "code": "nice",
    "category": "foot",
    "categoryname": "Экскурсия пешком",
    "priceadult": "4000",
    "pricechild": "2000",
    "duration": "3",
    "description": "Любовь к городу, как и любовь вообще, — сложное, многосоставное чувство. Я покажу Ниццу такой, какой её любят местные жители и обожают приезжие. Вы убедитесь, что здесь царит обеспеченность — вовсе не публики, давно облюбовавшей Французскую ривьеру, но богатство истории и культуры. Я поделюсь с вами знаниями о судьбе Ниццы и лучшими городскими «зарисовками» на тему любви: к морским просторам, солнцу, веселью, вкусной еде и даже религии.",
    "capacity": "5",
    "destination": "nice",
    "image": "assets/img/nice.jpeg"
}]`;

let excursionsContent = "";

document.addEventListener("DOMContentLoaded", createAllExcursions);
document
  .querySelector(".reset__text")
  .addEventListener("click", resetAllExcursions);

function createAllExcursions() {
  let excursions = JSON.parse(excursionsJson);
  for (let excursion of excursions) {
    createCard(excursion);
  }
  document.getElementById("excursions__container").innerHTML =
    excursionsContent;
}

function resetAllExcursions() {
  let radioButtons = document.querySelectorAll('input[type="radio"]');
  for (const radio of radioButtons) {
    radio.checked = false;
  }
  createAllExcursions();
}

function createCard(obj) {
  excursionsContent += `<div class="excursion__item">
        <div class= "excursion__img">
            <img src="${obj.image}" alt="${obj.code}"></img>
        </div>
        <div class= "excursion__card">
            <p class= "excursion__category">${obj.categoryname}</p>
            <h2 class="excursion__title" id="${obj.code}">${obj.name}</h2>
            <div class="excursion__info">
                <div class= "info__price">
                    <i class="fa-solid fa-coins"></i>
                    <div class= "priceadult">${obj.priceadult}</div>
                    <i class="fa-solid fa-coins"></i>
                    <div class= "pricechild"> ${obj.pricechild}</div>
                    <i class="fa-regular fa-clock"></i>
                    <div class= "duration">${obj.duration}</div>
                </div>
                <div class= "info__ticket">
                    <p class= "adult">Взрослый билет</p>
                    <p class= "child">Детский билет</p>
                </div>
                <div class="description">${obj.description}</div>
                <div class="container">
                    <a class="more" href="#">Подробнее</a>
                </div>
            </div>
        </div>
    </div>`;
  return excursionsContent;
}
