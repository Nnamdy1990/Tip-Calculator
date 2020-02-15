const display = document.querySelector('#display');
const tipSelector = document.querySelector('#tip-selector');
const amountInput = document.querySelector('#amount');
const submitForm = document.querySelector('#submitForm');


const calculatorData = {
  amount: 0,
  tip: '0',
}

display.innerHTML = `${0}`;

tipSelector.addEventListener('change', ({ target: { value }}) => {
  calculatorData.tip = value;
});

amountInput.addEventListener('input', ({ target: { value }}) => {
  calculatorData.amount = value;
});

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let { amount, tip } = calculatorData;
  amount = Number(amount);
  tip = Number(tip);
 
  let fullTip = `${((amount * (tip/100)) + amount)}`.trim();
  
  if(fullTip.length >= 12) {
    display.innerHTML = `<p>₦ ${fullTip.slice(0,2)} &times; 10<sup>${fullTip.slice(2).length}</sup></p>`;
  } else {
  display.innerHTML = `<p>₦ ${fullTip.toLocaleString()}</p>`;
  }
});