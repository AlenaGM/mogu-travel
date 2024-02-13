// CONTACT FORM VALIDATION AND SENDING
const form = document.forms.contactForm;

let inputs = document.querySelectorAll(".field");
let errors;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkAllInputs();
  sendForm();
});

function checkAllInputs() {
  errors = [];

  for (let input of inputs) {
    checkInputValidity(input);
  }
}

function checkInputValidity(input) {
  let validity = input.validity;

  if (validity.valueMissing) {
    errors++;

    document.querySelector(
      `.${input.id}__Required`
    ).textContent = `Поле "${input.placeholder}" обязательно к заполнению`;
  }

  if (validity.patternMismatch) {
    errors++;

    document.querySelector(
      `.${input.id}__Required`
    ).textContent = `Поле "${input.placeholder}" указано неверно`;
  }
}

function sendForm() {
  const userContact = {
    name: form.elements.userName.value,
    email: form.elements.userEmail.value,
    phone: form.elements.userPhone.value,
  };

  const request = new Request("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify(userContact),
  });

  if (errors == 0) {
    console.log("Оставлена новая заявка:", userContact);

    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          document.getElementById(
            "successMessage"
          ).textContent = `Спасибо! Мы свяжемся с Вами в ближайшее время`;
          clearForm();
          setTimeout(() => {
            document.getElementById("successMessage").innerHTML = "";
          }, "10000");
        }
      })
      .catch((error) => {
        console.log(error.message);
        document.getElementById("successMessage").textContent =
          "An error has occurred. Please try again later!";
      });
  }
}

function clearForm() {
  inputs.forEach((input) => (input.value = ""));

  document
    .querySelectorAll(".form__inputs_error")
    .forEach((element) => (element.textContent = ""));
}

// SINGLE-INPUT ERROR MESSAGES
let namesRegex = /^[-a-zA-Zа-яА-Я'\s]+$/;
let emailRegex =
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,14})$/;
let phoneRegex = /^[0-9+]{1,}[0-9\-.()\s]{3,29}$/;

for (const input of inputs) {
  input.addEventListener("input", function () {
    if (input.value != "") {
      document.querySelector(`.${input.id}__Required`).textContent =
        (input.id == "userName" && namesRegex.test(input.value)) ||
        (input.type == "email" && emailRegex.test(input.value)) ||
        (input.type == "tel" && phoneRegex.test(input.value))
          ? (document.querySelector(`.${input.id}__Required`).textContent = ``)
          : (document.querySelector(
              `.${input.id}__Required`
            ).textContent = `Поле "${input.placeholder}" указано неверно`);
    } else {
      document.querySelector(
        `.${input.id}__Required`
      ).textContent = `Поле "${input.placeholder}" не заполнено`;
    }
  });
}

// EXCURSIONS AND REVIEWS SLIDERS
const sliderContainers = [...document.querySelectorAll(".slider-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

sliderContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//BURGER-MENU
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
