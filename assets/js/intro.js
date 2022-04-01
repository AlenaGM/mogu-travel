<<<<<<< HEAD
console.log('intro');
// Берём кнопку вперёд
let btnRight = document.querySelector(".arrow__right");
// Берём кнопку назад
let btnLeft = document.querySelector(".arrow__left");
// Берём слайды
let slides = document.querySelectorAll(".reviews-card");
// Объявляем переменную i 
let y = 0;

// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++y
    // Условие если переменная i больше или равна количеству слайдов
    if (y >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[y - 1].classList.remove("block");
        // Присваиваем переменной i ноль
        y = 0;
        // Добавляем класс block следующему слайду
        slides[y].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[y - 1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[y].classList.add("block");
    }
})

btnLeft.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++y
    // Условие если переменная i больше или равна количеству слайдов
    if (y >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[y - 1].classList.remove("block");
        // Присваиваем переменной i ноль
        y = 0;
        // Добавляем класс block следующему слайду
        slides[y].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[y - 1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[y].classList.add("block");
    }
})
=======
const productContainers = [...document.querySelectorAll('.product-container')];
        const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
        const preBtn = [...document.querySelectorAll('.pre-btn')];

        productContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;

            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
            })

            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
            })
        })
>>>>>>> 39ebbd79b18e7d1b8a9381ebf7b0ba6f71f4fd35
