// scripts.js

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let player1Name = '';
let player2Name = '';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const messageDisplay = document.getElementById('message');
const startGameButton = document.getElementById('startGame');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');

startGameButton.addEventListener('click', startGame);

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function startGame() {
    player1Name = player1Input.value;
    player2Name = player2Input.value;

    if (player1Name === '' || player2Name === '') {
        alert('Please enter names for both players.');
        return;
    }

    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    messageDisplay.innerHTML = `${player1Name} (X) goes first`;
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.pointerEvents = 'auto';
    });
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    checkWinner();
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameActive = false;
        const winnerName = currentPlayer === 'X' ? player1Name : player2Name;
        messageDisplay.innerHTML = `Congratulations🥳🥳, ${winnerName}! You won!`;
        messageDisplay.classList.add('congratulations🥳🥳');
        return;
    }

    if (!gameState.includes('')) {
        gameActive = false;
        messageDisplay.innerHTML = 'Game is a draw!';
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageDisplay.innerHTML = currentPlayer === 'X' ? `${player1Name} (X)'s turn` : `${player2Name} (O)'s turn`;
}
