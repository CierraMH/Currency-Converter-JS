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
const saves = document.getElementsByClassName("saveDetails");

buttonConvert.addEventListener("click", function (event) {
  let baseCurrency = base.value;
  let targetCurrency = target.value;
  let amountValue = amount.value;
  if (amountValue < 0) {
    convert.innerHTML = `Error please enter a valid number`
    return
  }
  fetch(`https://api.apilayer.com/exchangerates_data/convert?from=${baseCurrency}&to=${targetCurrency}&amount=${amountValue}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      let results = data.result;
      convert.innerHTML = `${results} ${targetCurrency}`;
    }) 
        .catch((error) => console.log("error", error));
});


historicalButton.addEventListener("click", function(event){
fetch(`https://api.apilayer.com/exchangerates_data/2020-12-10?&base=USD&symbols=USD,EUR`, requestOptions)
  .then((response) => response.json())
    // .then((result) => console.log(result))
    .then((data) => {
    let results = ` ${data.rates.USD} USD  = ${data.rates.EUR} EUR`;
historicalConvertion.innerHTML = `Historical exchange rate on Dec. 12, 2020: ${results} `
  })
  .catch((error) => console.log("error", error));
})

let favorites = [];
saveButton.addEventListener("click", function(){
  let baseCurrency = base.value;
  let targetCurrency = target.value;
favorites.push(`<button class="saveDetails">${baseCurrency} / ${targetCurrency}</button>`)
favoriteSaves.innerHTML = `${favorites}`;
})

// saves.addEventListener("click", function(){
//   })

function showResults(elementId, result){
  const resultElement = document.getElementById(elementId);
  resultElement.innerHTML = result;
  resultElement.style.display = "block";
}