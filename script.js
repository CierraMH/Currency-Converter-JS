const myHeaders = new Headers();
myHeaders.append("apikey", "zJzhsrABF2GXhxqRH7plI6N2Eweh327L");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

// fetch("https://api.apilayer.com/exchangerates_data/convert?to={base}&from={target}&amount={amount}", requestOptions)

// https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01

const base = document.getElementById("base-currency");
const target = document.getElementById("target-currency");
const amount = document.getElementById("amount");
const convert = document.getElementById("converted-amount");
const buttonConvert = document.getElementById("convert-button");
const historical = document.getElementById("historical-rates-container");
const saveFavorite = document.getElementById("save-favorite");

buttonConvert.addEventListener("click", function (event) {
  console.log("convert-started?");
  let baseCurrency = base.value;
  let targetCurrency = target.value;
  let amountValue = amount.value;
  fetch("https://api.exchangeratesapi.io/v1/convert?from=${base}&to=${target}&${amount}&date=2020-12-10", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .then((data) => {
      let rate = data.rates[targetCurrency];
      let total = rate * amountValue;
      result.innerHTML = `${amountValue} ${baseCurrency} = ${total}
                   ${targetCurrency}`;
    })
    .catch((error) => console.log("error", error));
});

