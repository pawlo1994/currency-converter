{
    const welcome = () => {
        console.log("Welcome to currency converter v1.1 by Paweł Suchy");
    };

    const changeMainBackground = (userInputValue) => {
        const main = document.querySelector(".js-main");
        if (+userInputValue.value >= 1000000) {
            main.classList.add("main--januszed");
        } else {
            main.classList.remove("main--januszed");
        };
    };

    const convertPlnToOtherCurrency = (currencyValue, userInputValue) => {
        let plnValueElement = +userInputValue.value;
        return (plnValueElement / currencyValue).toFixed(2);
    };

    const showConvertedValues = (userInputValue) => {
        const eurValueElement = 4.56;
        const chfValueElement = 4.13;
        const usdValueElement = 3.81;
        const eurElement = document.querySelector(".js-eur__value");
        const chfElement = document.querySelector(".js-chf__value");
        const usdElement = document.querySelector(".js-usd__value");
        eurElement.innerText = convertPlnToOtherCurrency(eurValueElement, userInputValue);
        chfElement.innerText = convertPlnToOtherCurrency(chfValueElement, userInputValue);
        usdElement.innerText = convertPlnToOtherCurrency(usdValueElement, userInputValue);
    };

    const init = () => {
        const mainInputPln = document.querySelector(".js-form__input--pln");
        const mainForm = document.querySelector(".js-form");
        mainForm.addEventListener("submit", (event) => {
            event.preventDefault();
            changeMainBackground(mainInputPln);
            showConvertedValues(mainInputPln);
        })
    };

    welcome();
    init();

}