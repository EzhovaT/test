$(document).ready(function () {
  $(".slider__track").slick({
    arrows: true,
    prevArrow: $("#prev"),
    nextArrow: $("#next"),
    infinite: false,
    dots: true,
    appendDots:$(".slider__controls"),
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


const minText = 5;
const maxText = 25;
const minNum = 10;
const maxNum = 15;

const inputPhone = document.querySelector("#phone"),
   inputText = document.querySelectorAll('input[type="text"]');

function validity (min = 10, max = 4, input) {
  const valueLengt = input.value.length;
  let parrent = input.parentElement;

  if(valueLengt < min) {
    input.setCustomValidity(`Нужно еще символов : ${min - valueLengt}`);
      if(parrent.hasChildNodes(".form__error-message")){
        parrent.removeChild(parrent.childNodes[2]);
      }
    input.insertAdjacentHTML('afterend', '<p class="form__error-message">Необходимо заполнить поле</p>')
    input.classList.add("form__input_error");
  } else if(valueLengt > max) {
    input.setCustomValidity(`Лишних символов : ${max - valueLengt}`);
  } else {
    input.setCustomValidity("");
      if(parrent.hasChildNodes(".form__error-message")){
        parrent.removeChild(parrent.childNodes[2]);
      }
    input.classList.remove("form__input_error");
  }

  input.reportValidity();
}

inputText.forEach((input) => {
  input.addEventListener("input", () => validity(minText, maxText, input));
})

inputPhone.addEventListener("input", () => validity(minNum, maxNum, inputPhone));