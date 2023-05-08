/**
 * Unit 5 - Tic-Tac-Toe
 * Interactive game versus a computer opponent
 * 
 * First player to place three of their symbols in a
 * horizontal, vertical, or diagonal line wins
 * 
 * Author: Brandon Gautier
 */

// Create a class to handle the primary game functions
class GameBoard {
	// Construct the game board and provide default settings
    constructor() {
        this.cells = Array.from(document.querySelectorAll('.cell'));
        this.currentPlayer = 'X';
        this.gameFinished = false;
        this.winningCombinations = [
        // Rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonals
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.result = document.querySelector('#result');
        this.wins = document.querySelector('#wins');
        this.losses = document.querySelector('#losses');
        this.draws = document.querySelector('#draws');
        this.result.textContent = 'Awaiting result ...';
    }
  
    // Make a move at the given cell index
    makeMove(cellIndex) {
        if (this.gameFinished || this.cells[cellIndex].textContent !== '') {
            return;
        }
        
        this.cells[cellIndex].textContent = this.currentPlayer;
        this.checkWinner();
        
		// Switch current player if game is not finished
        if (!this.gameFinished) {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
			if (this.currentPlayer === 'O') {
                // Make bot appear to be 'thinking' before move
				// Give it 500 ms delay before making move
				const botMove = this.getBotMove();
                setTimeout(() => this.makeMove(botMove), 500);
            }
        }
    }
  
    // Check if there is a winner
	// For each value in winningCombinations:
	// If three cells match and are not empty, then mark cells as winners
    checkWinner() {
        for (let i = 0; i < this.winningCombinations.length; i++) {
            const [a, b, c] = this.winningCombinations[i];
            if (this.cells[a].textContent !== '' &&
                this.cells[a].textContent === this.cells[b].textContent &&
                this.cells[b].textContent === this.cells[c].textContent
            ) {
                this.cells[a].classList.add('winner');
                this.cells[b].classList.add('winner');
                this.cells[c].classList.add('winner');
                this.gameFinished = true;
                this.result.textContent = `Player ${this.currentPlayer} has won!`;
          
                this.updateScore();
                return;
            }
        }

		// Verify whether game ended in a draw
        if (this.isDraw()) {
            this.gameFinished = true;
            this.result.textContent = 'Draw!';
            this.draws.textContent = Number(this.draws.textContent) + 1;
        }
    }
  
    // Check if the game is a draw
    isDraw() {
        return this.cells.every(cell => cell.textContent !== '');
    }
    
    // Update Score
    updateScore() {
        if (this.currentPlayer === 'X') {
            this.wins.textContent = Number(this.wins.textContent) + 1;
        } else {
            this.losses.textContent = Number(this.losses.textContent) + 1;
        }
    }
  
    // Reset the game board to default settings
    reset() {
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('winner');
        });
        this.currentPlayer = 'X';
        this.gameFinished = false;
        this.result.textContent = 'Awaiting result ...';
    }
  
    // Get bot move
    // Bot chooses a random move based on one of the empty cells
	// Returns an integer that will be used as cell index
    getBotMove() {
        // Initializes empty cells upon each new turn
        const emptyCells = [];
        for (let i = 0; i < this.cells.length; i++) {
            if (this.cells[i].textContent === '') {
                emptyCells.push(i);
            }
        }
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }
}

// Code is wrapped in an immediately invoked function expression (IIFE) 
// to avoid polluting the global namespace with variables and functions:
(function() {
    // When page is refreshed, reset all game stats
    const gameBoard = new GameBoard();
    
    // Add event listeners to each cell
	// Call makeMove method when a cell is clicked
    gameBoard.cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            gameBoard.makeMove(index);
        });
    });
    
    // Add event listener to reset button
    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', () => {
        gameBoard.reset();
    });
})();