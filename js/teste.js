const cards = document.querySelectorAll('.card');
const scoreElement = document.getElementById('score');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let matchedPairs = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    score++;
    scoreElement.textContent = score;
    matchedPairs++;

    if (matchedPairs === 8) {
        setTimeout(() => {
            alert('Parabéns! Você completou o jogo!');
        }, 500);
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
}

// Initial card flip
function initialFlip() {
    cards.forEach(card => card.classList.add('flipped'));
    
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flipped'));
        shuffle();
        cards.forEach(card => card.addEventListener('click', flipCard));
    }, 5000);
}

// Start the game
initialFlip();
