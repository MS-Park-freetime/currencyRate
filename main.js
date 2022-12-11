let currencyRatio = {
    USD: {
        KRW: 1301.46,
        USD: 1,
        VND: 23575.00,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00077,
        VND: 18.11,
        unit: "원"
    },
    VND: {
        KRW: 0.055,
        USD: 0.000042,
        VND: 1,
        unit: "동"
    },
};
//currencyRatio.USD.unit;

//area1
let fromCurrency = 'KRW';
let toCurrency = 'USD';
let fromResult = '원';
let toResult = '달러';

document.querySelectorAll("#from-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("from-button").textContent=this.textContent;
   
    fromCurrency = this.textContent;
    convert();
}));



//area2
document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent=this.textContent;
    toCurrency = this.textContent;
   
    convert();
}));

//키입력시 변환
function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

    document.getElementById("to-input").value = convertedAmount;
}

function unconvert(){
    let unamount = document.getElementById("to-input").value;
    let unconvertedAmount = unamount * currencyRatio[toCurrency][fromCurrency];

    document.getElementById("from-input").value = unconvertedAmount;
}






