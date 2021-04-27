{
    const mainForm = document.querySelector(".js-form");
    const mainInputPln = document.querySelector(".js-form__input--pln");

    const init = () => {
        console.log("Welcome to currency converter v1.1 by Paweł Suchy");
    };

    const changeMainBackground = () => {
        const main = document.querySelector(".js-main");
        if (+mainInputPln.value >= 1000000) {
            main.classList.add("main--januszed");
        } else {
            main.classList.remove("main--januszed");
        };
    };

    const convertPlnToOtherCurrency = (currencyValue) => {
        let plnValueElement = +mainInputPln.value;
        return (plnValueElement / currencyValue).toFixed(2);
    };

    const assignValueIntoTextField = () => {
        const eurValueElement = 4.56;
        const chfValueElement = 4.13;
        const usdValueElement = 3.81;
        const eurElement = document.querySelector(".js-eur__value");
        const chfElement = document.querySelector(".js-chf__value");
        const usdElement = document.querySelector(".js-usd__value");
        eurElement.innerText = convertPlnToOtherCurrency(eurValueElement);
        chfElement.innerText = convertPlnToOtherCurrency(chfValueElement);
        usdElement.innerText = convertPlnToOtherCurrency(usdValueElement);
    };

    init();
    mainForm.addEventListener("submit", (event) => {
        event.preventDefault();
        changeMainBackground();
        assignValueIntoTextField();
    });
}