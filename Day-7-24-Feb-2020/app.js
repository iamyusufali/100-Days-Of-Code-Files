const resultArea = document.querySelector('.result-area'),
  resultMsg = resultArea.querySelector('#result-msg'),
  guessMsg = resultArea.querySelector('#guess-left'),
  resultImage = resultArea.querySelector('.result-image');

// Show the level style as Activated
function activateLevel(e) {
  e.target.classList.add('active');
  Array.from(gameLevels.children).forEach(element => {
    if (!element.classList.contains('active')) {
      element.disabled = true;
    }
  });
  e.target.disabled = true;
  guessInput.disabled = false;
  guessButton.disabled = false;
  guessInput.placeholder = 'Now type here';
  displayInstructions();
}

// Displays instructions
function displayInstructions() {
  resultMsg.style.color = '#badc57';
  guessMsg.style.color = '#badc57';
  resultMsg.textContent = 'Now enter your guess';
  guessMsg.textContent = 'in the input above.';
  resultArea.style.display = 'block';
}

// Check result
function checkResult() {
  if (guessButton.textContent === 'Guess') {
    if (guessInput.value === '') {
      displayNoInputError();
    } else {
      guessInput.classList.remove('no-input');

      if (parseFloat(guessInput.value) === randomNumber) {
        console.log('Matched');
        displayWinningMsg();
      } else {
        calculateAttemptsLeft();
      }
    }
  } else if (guessButton.textContent === 'NEW GAME') {
    resetGame();
  }
}

// Display no input error
function displayNoInputError() {
  guessInput.classList.add('no-input');
  guessInput.placeholder = 'here ?';
  resultMsg.style.color = '#f5744d';
  guessMsg.style.color = '#f5744d';
  resultMsg.textContent = 'No guess entered!';
  guessMsg.textContent = 'First enter your guess then click Guess';
  resultArea.style.display = 'block';
}

// Display winning message
function displayWinningMsg() {
  // Disable elements
  guessInput.disabled = 'true';
  Array.from(gameLevels.children).forEach(element => {
    element.disabled = 'true';
  });

  // Style elements
  resultMsg.style.color = '#6AB04A';
  guessMsg.style.color = '#f5e169';
  resultMsg.textContent = 'Correct Guess!';
  guessMsg.textContent = 'You Won!';
  resultArea.style.display = 'block';
  guessButton.textContent = 'NEW GAME';
  resultImage.innerHTML = '<img src="./img/winner.png">';
}

// Calculate attempts(guesses) left
let attemptsLeft = 3;
function calculateAttemptsLeft() {
  let attemptsDisplayed = parseFloat(guessMsg.textContent.split(' ')[1]);
  if (isNaN(attemptsDisplayed)) {
    displayAttemptsLeft(attemptsLeft);
    attemptsLeft--;
  } else if (attemptsDisplayed > 1 && attemptsDisplayed <= 3) {
    displayAttemptsLeft(attemptsLeft);
    attemptsLeft--;
  } else if (attemptsDisplayed === 1) {
    gameOver();
  }
}

// Display attempts left
function displayAttemptsLeft(attemptsLeft) {
  resultMsg.style.color = '#f5744d';
  guessMsg.style.color = '#f5744d';
  resultMsg.textContent = 'Wrong Guess!';
  resultImage.innerHTML = '<img src="./img/wrong.png">';
  if (attemptsLeft > 1) {
    guessMsg.textContent = `Only ${attemptsLeft} guesses are left.`;
  } else {
    guessMsg.textContent = `Only ${attemptsLeft} guess is left.`;
  }

  resultArea.style.display = 'block';
}

// Show game over
function gameOver() {
  guessInput.disabled = 'true';
  guessButton.textContent = 'NEW GAME';
  resultMsg.style.color = '#f5744d';
  guessMsg.style.color = '#f5744d';
  resultMsg.textContent = '';
  guessMsg.textContent = 'GAME OVER!';
  resultImage.innerHTML = '<img src="./img/gameover.png">';
  resultArea.style.display = 'block';

  // Disable level selecting buttons
  Array.from(gameLevels.children).forEach(element => {
    element.disabled = 'true';
  });
}

// Reset game
function resetGame() {
  location.reload(true);
}
