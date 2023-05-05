const myHeaders = new Headers();
myHeaders.append("apikey", "zJzhsrABF2GXhxqRH7plI6N2Eweh327L");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const base = document.getElementById("base-currency");
const target = document.getElementById("target-currency");
const amount = document.getElementById("amount");
const convert = document.getElementById("converted-amount");
const buttonConvert = document.getElementById("convert-button");
const historicalButton = document.getElementById("historical-rates");
const historicalConvertion = document.getElementById("historical-rates-info");
const saveButton = document.getElementById("save-favorite");
const favoriteSaves = document.getElementById("favorite-currency-pairs");

buttonConvert.addEventListener("click", function (event) {
  // console.log("convert-started?");
  let baseCurrency = base.value;
  let targetCurrency = target.value;
  let amountValue = amount.value;
  fetch(`https://api.apilayer.com/exchangerates_data/convert?from=${baseCurrency}&to=${targetCurrency}&amount=${amountValue}`, requestOptions)
    .then((response) => response.json())
    // .then((result) => console.log(result))
    .then((data) => {
      let results = data.result;
      // let total = results * amountValue;
      convert.innerHTML = `${results} ${targetCurrency}`;
    })
    .catch((error) => console.log("error", error));
});


historicalButton.addEventListener("click", function(event){
  // console.log("worked?");
fetch(`https://api.apilayer.com/exchangerates_data/2020-12-10?&base=USD&symbols=USD,EUR`, requestOptions)
  .then((response) => response.json())
    // .then((result) => console.log(result))
    .then((data) => {
    let results = ` ${data.rates.USD} USD  = ${data.rates.EUR} EUR`;
historicalConvertion.innerHTML = `Historical exchange rate on Dec. 12, 2020: ${results} `
  })
  .catch((error) => console.log("error", error));
})

saveButton.addEventListener("click", function(){


  
})


function showResults(elementId, result){
  const resultElement = document.getElementById(elementId);
  resultElement.innerHTML = result;
  resultElement.style.display = "block";
}





// fetch("https://api.apilayer.com/exchangerates_data/convert?to={base}&from={target}&amount={amount}", requestOptions)

// https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01

// fetch(`https://api.apilayer.com/exchangerates_data/convert?from=${baseCurrency}&to=${targetCurrency}&${amountValue}&date=2020-12-10`, requestOptions)




// fetch(`https://api.apilayer.com/v1/convert?date=${date}&base=${baseCurrency}`, requestOptions)
// fetch(`https://api.apilayer.com/v1/2020-12-10&base=${baseCurrency}&${targetCurrency}`, requestOptions)
// fetch(`https://api.apilayer.com/v1/2020-12-10&base=${baseCurrency}`, requestOptions)
  // fetch(`https://api.apilayer.com/exchangerates_data/convert?date=${date}`, requestOptions)
  // .then((data) => {
  //   let results = data.result;
  //   convert.innerHTML = `${results} ${targetCurrency}`;
  // })