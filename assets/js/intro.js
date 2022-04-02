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