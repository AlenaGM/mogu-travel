let json = `[{
        "name": "Золотое кольцо Абхазии (из Адлера)",
        "code": "gold",
        "category": "plane",
        "priceadult": "2 000",
        "pricechild": "1 000",
        "duration":"2 часа",
        "description":"очень красиво",
        "favorite":"0",
        "capacity":"",
        "destination":"50",
        "date":"12.05.22",
        "image": "assets/img/1.jpeg"
    },{
        "name": "Золотое кольцо Грузии",
        "code": "gold",
        "category": "bus",
        "priceadult": "2 000",
        "pricechild": "1 000",
        "duration":"2 часа",
        "description":"очень красиво",
        "favorite":"0",
        "capacity":"",
        "destination":"50",
        "date":"12.05.22",
        "image": "assets/img/2.jpeg"
    },{
        "name": "Золотое кольцо Армении",
        "code": "gold",
        "category": "foot",
        "priceadult": "2 000",
        "pricechild": "1 000",
        "duration":"2 часа",
        "description":"очень красиво",
        "favorite":"0",
        "capacity":"",
        "destination":"50",
        "date":"12.05.22",
        "image": "assets/img/3.jpeg"
    }]`

document.addEventListener("DOMContentLoaded", function() {
    let excursions = JSON.parse(json);
    let excursionsContent = "";
    for (let excursion of excursions) {
        excursionsContent +=
            `<div class="excursion_item">
                <div class= "container_img">
                    <img class="characterImage" src="${excursion.image}" alt="${excursion.code}"></img>
                </div>
                <div class= "container_card">
                    <p class= "tour_name">Автобусный тур</p>
                    <h2 class="characterName" id="${excursion.code}">${excursion.name}</h2>
                    <div class="excursionInfo">
                        <div class= "container_for_price">
                            <i class="fa-solid fa-coins"></i>
                            <div class= "priceadult"> ${excursion.priceadult}</div>
                            <i class="fa-solid fa-coins"></i>
                            <div class= "pricechild"> ${excursion.pricechild}</div>
                            <i class="fa-regular fa-clock"></i>
                            <div class= "duration"> ${excursion.duration}</div>
                        </div>
                        <div class= "container_for_ticket">
                            <p class= "adult">Взрослый билет</p>
                            <p class= "child">Детский билет</p>
                        </div>    
                        <div class="description"> ${excursion.description}</div>
                        <div class="container">
                            <a class="more" href="#">Подробнее</a>
                            <button class="click"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>`
    }

    document.getElementById("excursions_container").innerHTML = excursionsContent;

});

let buttonShow = document.getElementById("show");
let radioType = document.querySelectorAll('input[name="type"]');

buttonShow.addEventListener("click", function excursionType() {
    let excursions = JSON.parse(json);

    for (const radio of radioType) {

        if (radio.checked) {
            let result = excursions.filter((x) => x.category === radio.value);
            console.log(result);
        }
    }

})