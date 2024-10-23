const images = [
    { "img": "/img/AbrazaderaPlastica.png" },
    { "img": "/img/AlcoholIsopropilico.png" },
    { "img": "/img/CortaHilos.png" },
    { "img": "/img/Destornilladores.png" },
    { "img": "/img/ManillaAntiestatica.webp" },
    { "img": "/img/Multimetro.png" },
    { "img": "/img/OrganizadorDePiezas.png" },
    { "img": "/img/Soplador.png" },
    { "img": "/img/TapeteAntiestatico.png" },
    { "img": "/img/TrapoAntiestatico.png" }
];

let cards = [];
let flippedCards = [];
let matchedCards = 0;
let startTime;
let timerInterval;

function startGame() {
    cards = [...images, ...images];
    cards.sort(() => 0.5 - Math.random());
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.innerHTML = `
            <div class="front"></div>
            <div class="back" style="background-image: url('${card.img}')"></div>
        `;
        cardElement.addEventListener('click', flipCard);
        cardContainer.appendChild(cardElement);
    });
    startTime = new Date();
    timerInterval = setInterval(updateTime, 1000);
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flip')) {
        this.classList.add('flip');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.dataset.index;
    const index2 = card2.dataset.index;
    if (cards[index1].img === cards[index2].img) {
        matchedCards += 2;
        flippedCards = [];
        if (matchedCards === cards.length) {
            clearInterval(timerInterval);
            calculateScore();
            showCongratulations();
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            flippedCards = [];
        }, 1000);
    }
}

function updateTime() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('time').innerText = `Tiempo: ${elapsedTime}`;
}

function calculateScore() {
    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    const score = Math.max(100 - elapsedTime, 0);
    document.getElementById('score').innerText = `Puntaje: ${score}`;
}

function showCongratulations() {
    const congratulations = document.getElementById('congratulations');
    congratulations.style.display = 'block';
    setTimeout(() => {
        congratulations.style.display = 'none';
    }, 3000);
}

function restartGame() {
    clearInterval(timerInterval);
    matchedCards = 0;
    flippedCards = [];
    document.getElementById('time').innerText = 'Tiempo: 0';
    document.getElementById('score').innerText = 'Puntaje: 0';
    startGame();
}

document.getElementById('restart-button').addEventListener('click', restartGame);

startGame();