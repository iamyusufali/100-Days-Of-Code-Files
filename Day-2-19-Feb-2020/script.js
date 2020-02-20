// Alert Element
const alertMsg = document.querySelector('.alert');

// Calculation Elements
const form = document.querySelector('form');
const loanAmt = document.querySelector('#amount');
const loanInterest = document.querySelector('#interest');
const repaYears = document.querySelector('#years');

// Result Elements
const loader = document.querySelector('.loader');
const result = document.querySelector('#results');
const monthlyPay = document.querySelector('#monthly-pay');
const totalPay = document.querySelector('#total-pay');
const totalInt = document.querySelector('#total-int');

// Check required inputs
function checkRequiredInputs(e) {
  // Prevent default submit
  e.preventDefault();

  const amount = Number(loanAmt.value);
  const interest = Number(loanInterest.value);
  const years = Number(repaYears.value);

  if (amount < 1 || interest < 1 || years < 1) {
    alertMessage();
  } else {
    if ((loader.style.display = 'block')) {
      result.style.display = 'none';
    }
    loader.style.display = 'block';
    setTimeout(loanCalculation, 2000);
  }
}

// Calculation
function loanCalculation() {
  const loanPrincipal = Number(loanAmt.value);
  const actualInterest = Number(loanInterest.value) / 100 / 12;
  const loanPeriod = Number(repaYears.value) * 12;

  const x = Math.pow(1 + actualInterest, loanPeriod);

  const monthlyPayment = (loanPrincipal * actualInterest * x) / (x - 1);

  const totalPayment = monthlyPayment * loanPeriod;
  const totalInterest = totalPayment - loanPrincipal;

  displayResult(monthlyPayment, totalPayment, totalInterest);
}

// Display result
function displayResult(monthlyPayment, totalPayment, totalInterest) {
  monthlyPay.setAttribute('placeholder', `$${monthlyPayment.toFixed(2)}`);
  totalPay.setAttribute('placeholder', `$${totalPayment.toFixed(2)}`);
  totalInt.setAttribute('placeholder', `$${totalInterest.toFixed(2)}`);
  result.style.display = 'block';
  alertMsg.style.display = 'none';
  loader.style.display = 'none';
}

// Alert Message
function alertMessage() {
  alertMsg.style.display = 'block';
  result.style.display = 'none';
  setTimeout(clearAlert, 3000);
}

// Clear Alert Message
function clearAlert() {
  alertMsg.style.display = 'none';
}

// Event Listener
form.addEventListener('submit', checkRequiredInputs);
