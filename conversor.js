const amountInput = document.getElementById ('amount-input');
const amountConverted = document.getElementById('amount-result');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const ConvertButton = document.getElementById('convert-button');
const swapButton = document.getElementById('swap-icons');
const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");
const exchangeRate = document.getElementById("exchange-rate");

const rates = {
  "USD": 5.5,
 
  "BRL": 1.0,  // Exemplo: 1 USD = 1.8 BRL
  "EUR": 6.2,
   
};

function updateFlags() {

  console.log(fromCurrency.value);
  console.log(toCurrency.value);

    fromFlag.src = `img/flags/${fromCurrency.value.toLowerCase()}.png`;

    toFlag.src = `img/flags/${toCurrency.value.toLowerCase()}.png`;

    
}



 

function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;

  exchangeRate.textContent =
  `1 ${from} = ${(rates[from] / rates[to]).toFixed(2)} ${to}`;

  if ( amountInput.value === "") {
    amountConverted.value = "";
    return;
  }
    
  const amount = amountInput.value;
  
  
  const amountInBRL = amount * rates[from]; // Converte para BRL
  const amountConvertedValue = amountInBRL / rates[to];
  amountConverted.value = amountConvertedValue.toFixed(2);
  updateFlags();

  
  

 
 
 






}

function swapCurrencies() {
  const tempCurrency = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCurrency;

  updateFlags();
  convertCurrency();

  

  
}



amountInput.addEventListener("click", convertCurrency);
amountInput.addEventListener("input", convertCurrency);
swapButton.addEventListener("click", swapCurrencies);

fromCurrency.addEventListener("change", () => {
    updateFlags();
    convertCurrency();
});

toCurrency.addEventListener("change", () => {
    updateFlags();
    convertCurrency();
});

updateFlags();
convertCurrency();


