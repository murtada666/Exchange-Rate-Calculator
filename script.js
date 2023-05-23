const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    currency_one = currencyEl_one.value;
    currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyEl_one}`)
    .then(res => res.json())
    .then(data => {
        rate = data.rates[currencyEl_two];

        rateEl.innerHTML = `1 ${currencyEl_one} = ${rate} ${currencyEl_two}`;

        amountEl_two.value = currencyEl_one * rate;

        
    })

}


// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener("click", () => {
    const temp = currencyEl_one;
    currencyEl_one = currencyEl_two;
    currencyEl_two = temp;
})