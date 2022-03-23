
let json = `[{
    "name": "Золотое кольцо Абхазии",
    "code": "gold",
    "category": "plane",
    "priceadult": "2000",
    "pricechild": "1000",
    "duration":"2",
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
        "priceadult": "2000",
        "pricechild": "1000",
        "duration":"2",
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
            "priceadult": "2000",
            "pricechild": "1000",
            "duration":"2",
            "description":"очень красиво",
            "favorite":"0",
            "capacity":"",
            "destination":"50",
            "date":"12.05.22",
            "image": "assets/img/3.jpeg"
            }]`

document.addEventListener("DOMContentLoaded", function () {
    let excursions = JSON.parse(json);
    let excursionsContent = "";
    for (let excursion of excursions) {
        excursionsContent +=
            `<div class="excursion_item">
                    <img class="characterImage" src="${excursion.image}" alt="${excursion.code}"></img>
                    <h2 class="characterName" id="${excursion.code}">${excursion.name}</h2>
                    <div class="excursionInfo">
                        <div> ${excursion.priceadult}</div>
                        <div> ${excursion.pricechild}</div>
                        <div> ${excursion.duration}</div>
                        <div> ${excursion.description}</div>
                        <div> ${excursion.favorite}</div>
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


        // if (radio.value === 'bus' && radio.checked) {
        //     let result = excursions.filter((x) => x.category === "bus");
        //     console.log(result);
        // }
        // else if (radio.value === 'plane' && radio.checked) {
        //     let result = excursions.filter((x) => x.category === "plane");
        //     console.log(result);
        // }
        // else {
        //     let result = excursions.filter((x) => x.category === "foot");
        //     console.log(result);
        // }
    }

})



