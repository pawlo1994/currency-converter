let main = document.querySelector(".js-main");
let mainForm = document.querySelector(".js-form");
let mainInputPln = document.querySelector(".js-form__input--pln");
let eurElement = document.querySelector(".js-eur__value");
let chfElement = document.querySelector(".js-chf__value");
let usdElement = document.querySelector(".js-usd__value");
let plnValueElement = +mainInputPln.value;
let eurValueElement = 4.56;
let chfValueElement = 4.13;
let usdValueElement = 3.81;
mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (+mainInputPln.value >= 1000000) {
        main.classList.add("main--januszed");
    } else {
        main.classList.remove("main--januszed");
    };
    eurElement.innerText = (+mainInputPln.value / eurValueElement).toFixed(2);
    chfElement.innerText = (+mainInputPln.value / chfValueElement).toFixed(2);
    usdElement.innerText = (+mainInputPln.value / usdValueElement).toFixed(2);
});