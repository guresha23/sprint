document.addEventListener('DOMContentLoaded', function() {
  const words = ['javascript', 'hangman', 'programming', 'developer', 'coding'];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  let guessedLetters = [];
  let guessesLeft = 6;

  const wordDisplay = document.getElementById('word-display');
  const guessesDisplay = document.getElementById('guesses-left');
  const guessInput = document.getElementById('guess-input');
  const guessButton = document.getElementById('guess-button');
  const resetButton = document.getElementById('reset-button');
  const messageDisplay = document.getElementById('message');

  function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    guessesLeft = 6;
    displayWord();
    updateGuessesLeft();
    guessInput.disabled = false;
    guessButton.disabled = false;
    messageDisplay.textContent = '';
  }

  function displayWord() {
    const wordArray = selectedWord.split('');
    const displayedWord = wordArray.map(letter => (guessedLetters.includes(letter) ? letter : '_')).join('');
    wordDisplay.textContent = displayedWord;
  }

  function updateGuessesLeft() {
    guessesDisplay.textContent = `Guesses left: ${guessesLeft}`;
  }

  function checkWin() {
    if (wordDisplay.textContent === selectedWord) {
      messageDisplay.textContent = 'Congratulations! You won!';
      disableInput();
    } else if (guessesLeft === 0) {
      messageDisplay.textContent = `Game over! The word was "${selectedWord}".`;
      disableInput();
    }
  }

  function disableInput() {
    guessInput.disabled = true;
    guessButton.disabled = true;
  }

  function processGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (!guessedLetters.includes(guess)) {
      guessedLetters.push(guess);
      if (!selectedWord.includes(guess)) {
        guessesLeft--;
      }
    }

    displayWord();
    updateGuessesLeft();
    checkWin();
  }

  displayWord();
  updateGuessesLeft();

  guessButton.addEventListener('click', processGuess);

  guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      processGuess();
    }
  });

  resetButton.addEventListener('click', resetGame);
});

