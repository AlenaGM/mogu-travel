// --- JS код ддя раздела "Остались вопросы?" --- //
const form = document.getElementById('form');
const userName = document.getElementById('userName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const submit = document.getElementById('btn');


function check() {
    // очистка сообщений об ошибках
    let errorMessages = document.querySelectorAll('.error');
    for (let error of errorMessages) {
        error.style.display = 'none';
    }

    // проверка валидности введеной информации в input
    let isValid = true; // валидна ли форма

    if(!userName.checkValidity()) {
        isValid = false;
        document.getElementsByClassName('userNameError')[0].style.display = 'block';
    }

    if(!phone.checkValidity()) {
        isValid = false;
        document.getElementsByClassName('phoneError')[0].style.display = 'block';
    }

    if(!email.checkValidity()) {
        isValid = false;
        document.getElementsByClassName('emailError')[0].style.display = 'block';
    }

    return isValid;
}


userName.addEventListener('blur', check);
phone.addEventListener('blur', check);
email.addEventListener('blur', check);


submit.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let isValid = check();
    if (isValid) {
        alert(`Спасибо! Мы свяжемся с Вами в ближайшее время`);
        form.reset();
    }
});



// -----------------------------------------------------------------

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

//МЕНЮ-БУРГЕР

const burgerMenu = document.querySelector('.menu__burger');
const bodyMenu = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link')

if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
    });
}

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick() {
        if (burgerMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            burgerMenu.classList.remove('_active');
            bodyMenu.classList.remove('_active');
        }
    }
}