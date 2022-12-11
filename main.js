let currencyRatio = {
    USD: {
        KRW: 1301.46,
        USD: 1,
        VND: 23575.00,
        IDR: 15603.00,
        JPY: 136.58,
        EUR: 0.95,
        ARS: 169.93,
        CZK: 23.04,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00077,
        VND: 18.11,
        IDR: 11.96,
        JPY: 0.10,
        EUR: 0.00073,
        ARS: 0.13,
        CZK: 0.018,
        unit: "원"
    },
    VND: {
        KRW: 0.055,
        USD: 0.000042,
        VND: 1,
        IDR: 0.66,
        JPY: 0.0058,
        EUR: 0.000040,
        ARS: 0.0072,
        CZK: 0.00098,
        unit: "동"
    },
    IDR: {
        KRW: 0.084,
        USD: 0.000064,
        VND: 1.51,
        IDR: 1,
        JPY: 0.0088,
        EUR: 0.000061,
        ARS: 0.011,
        CZK: 0.0015,
        unit: "루피아"
    },
    JPY: {
        KRW: 9.55,
        USD: 0.0073,
        VND: 172.62,
        IDR: 114.24,
        JPY: 1,
        EUR: 0.0069,
        ARS: 1.24,
        CZK: 0.17,
        unit: "엔"
    },
    EUR: {
        KRW: 1374.90,
        USD: 1.05,
        VND: 24851.59,
        IDR: 16447.90,
        JPY: 144.04,
        EUR: 1,
        ARS: 178.13,
        CZK: 24.29,
        unit: "유로"
    },
    ARS: {
        KRW: 7.68,
        USD: 0.0059,
        VND: 138.74,
        IDR: 91.82,
        JPY: 0.80,
        EUR: 0.0056,
        ARS: 1,
        CZK: 0.14,
        unit: "페소"
    },
    CZK: {
        KRW: 56.60,
        USD: 0.043,
        VND: 1023.13,
        IDR: 677.15,
        JPY: 5.93,
        EUR: 0.041,
        ARS: 7.37,
        CZK: 1,
        unit: "코루나"
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
    document.getElementById("from-result").textContent=currencyRatio[fromCurrency].unit;
    fromCurrency = this.textContent;
    convert();
}));



//area2
document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent=this.textContent;
    document.getElementById("to-result").textContent=currencyRatio[toCurrency].unit;
    toCurrency = this.textContent;
   
    convert();
}));

//키입력시 변환
function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

    document.getElementById("to-input").value = convertedAmount;
}
//역변환
function unconvert(){
    let unamount = document.getElementById("to-input").value;
    let unconvertedAmount = unamount * currencyRatio[toCurrency][fromCurrency];

    document.getElementById("from-input").value = unconvertedAmount;
}






