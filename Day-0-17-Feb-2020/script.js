const calculate = document.querySelector('.btn');
const result = document.querySelector('#results');

calculate.addEventListener('click', e => {
  e.preventDefault();
  
  result.style.display = 'block';
});
