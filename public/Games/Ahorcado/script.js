const questions = [
    { question: "Parte de la PC que almacena datos permanentemente", answer: "DISCO DURO" },
    { question: "Componente que se encarga de procesar la información", answer: "PROCESADOR" },
    { question: "Memoria de acceso aleatorio", answer: "RAM" },
    { question: "Dispositivo que permite la entrada de datos", answer: "TECLADO" },
    { question: "Dispositivo que permite la salida de datos en forma visual", answer: "MONITOR" }
];

let currentQuestion;
let answer;
let guessedLetters = [];
let wrongGuesses = 0;
const maxWrongGuesses = 5;
let timer;
let timeLeft = 60;
let score = 0;

const startContainer = document.getElementById('start-container');
const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');
const questionContainer = document.getElementById('question-container');
const wordContainer = document.getElementById('word-container');
const lettersContainer = document.getElementById('letters-container');
const hangmanImage = document.getElementById('hangman-image');
const timerContainer = document.getElementById('timer');
const hiddenInput = document.getElementById('hidden-input');

startButton.addEventListener('click', startGame);
hiddenInput.addEventListener('input', handlePhysicalKeyboardInput);

function startGame() {
    startContainer.style.display = 'none';
    gameContainer.style.display = 'flex';
    hiddenInput.focus();
    resetGame();
    startTimer();
}

function displayQuestion() {
    questionContainer.innerHTML = currentQuestion.question;
}

function displayWord() {
    wordContainer.innerHTML = answer.split('').map(letter => guessedLetters.includes(letter) || letter === ' ' ? letter : '_').join(' ');
}

function displayLetters() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    lettersContainer.innerHTML = alphabet.split('').map(letter => 
        `<div class="letter" onclick="guessLetter('${letter}')">${letter}</div>`
    ).join('');
}

function guessLetter(letter) {
    if (guessedLetters.includes(letter)) return;
    guessedLetters.push(letter);

    const letterElement = Array.from(lettersContainer.children).find(el => el.textContent === letter);

    if (answer.includes(letter)) {
        letterElement.classList.add('correct');
    } else {
        letterElement.classList.add('incorrect');
        wrongGuesses++;
        hangmanImage.src = `img/hangman${wrongGuesses}.png`;
    }

    displayWord();

    if (wrongGuesses === maxWrongGuesses) {
        endGame('Has perdido! La palabra era: ' + answer);
    } else if (answer.split('').every(letter => guessedLetters.includes(letter) || letter === ' ')) {
        score++;
        resetGameWithLessTime();
    }
}

function handlePhysicalKeyboardInput(event) {
    const letter = event.target.value.toUpperCase();
    if (letter.match(/^[A-Z]$/)) {
        guessLetter(letter);
    }
    hiddenInput.value = ''; // Clear the input field
}

function resetGame() {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    answer = currentQuestion.answer;
    guessedLetters = [];
    wrongGuesses = 0;
    hangmanImage.src = 'img/hangman0.png';
    displayQuestion();
    displayWord();
    displayLetters();
    hiddenInput.focus(); // Ensure the hidden input is focused
}

function startTimer() {
    timeLeft = 60;
    timerContainer.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerContainer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame('Se acabó el tiempo! La palabra era: ' + answer);
        }
    }, 1000);
}

function resetTimerWithLessTime() {
    clearInterval(timer);
    timeLeft = Math.max(timeLeft - 5, 10); // Reduce el tiempo en 5 segundos, mínimo 10 segundos
    timerContainer.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerContainer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame('Se acabó el tiempo! La palabra era: ' + answer);
        }
    }, 1000);
}

function resetGameWithLessTime() {
    resetTimerWithLessTime();
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    answer = currentQuestion.answer;
    guessedLetters = [];
    wrongGuesses = 0;
    hangmanImage.src = 'img/hangman0.png';
    displayQuestion();
    displayWord();
    displayLetters();
    hiddenInput.focus(); // Ensure the hidden input is focused
}

function endGame(message) {
    clearInterval(timer);
    hangmanImage.src = 'img/hangman5.png'; // Cargar la imagen 5
    setTimeout(() => {
        showAlert(message + '\nPuntaje final: ' + score);
        startContainer.style.display = 'flex';
        gameContainer.style.display = 'none';
        score = 0;
    }, 1000); // Esperar 500ms antes de mostrar el mensaje
}

function showAlert(message) {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'custom-alert';
    alertContainer.innerText = message;

    document.body.appendChild(alertContainer);

    setTimeout(() => {
        alertContainer.remove();
    }, 5000); // Eliminar el mensaje después de 3 segundos
}

displayQuestion();
displayWord();
displayLetters();