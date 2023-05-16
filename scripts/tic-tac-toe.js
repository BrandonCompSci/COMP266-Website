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
	// The user (human) goes first and plays with the 'X' symbol
    constructor() {
        this.cells = Array.from(document.querySelectorAll('.cell'));
        this.currentPlayer = 'X';
        this.gameFinished = false;

		// Provide an array of all winning combinations
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

		// Default text output when game is still in progress
        this.result.textContent = 'Awaiting result ...';
    }
  
    // Make a move at the given cell index
    makeMove(cellIndex) {
		// Check if game is finished or all cells are full
        if (this.gameFinished || this.cells[cellIndex].textContent !== '') {
            return;
        }
        
		// Set text content of selected cell to symbol of current player
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
            // Check if three cells within any of the 'winning combinations' match
			if (this.cells[a].textContent !== '' &&
                this.cells[a].textContent === this.cells[b].textContent &&
                this.cells[b].textContent === this.cells[c].textContent
            ) {
				// Mark the three winning cells as 'winner'
                this.cells[a].classList.add('winner');
                this.cells[b].classList.add('winner');
                this.cells[c].classList.add('winner');
                
				// Since a winner is found, end the game
				this.gameFinished = true;

				// Below game board, display the player who won and update overall score
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
			// Increment wins by 1 if the user wins
            this.wins.textContent = Number(this.wins.textContent) + 1;
        } else {
			// Increment losses by 1 if the user loses
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
    getBotMove() {
        // Initializes empty cells upon each new turn
		// Create an array to store the empty cell indices
		// Iterate over all cells -- when empty cell is found, add it to the array
        const emptyCells = [];
        for (let i = 0; i < this.cells.length; i++) {
            if (this.cells[i].textContent === '') {
                emptyCells.push(i);
            }
        }

		// Returns an integer that will be used as the cell index
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

	/**
	 * 
	 * Unit 6 code
	 * 
	 */

	// "sweetalert2" plugin configuration
	function sweetAlert() {
		Swal.fire({
			titleText: 'Rules',
			text: 'Tic-Tac-Toe is a classic two-player game played on a grid of 3x3 squares.' + 
				' The objective of the game is to be the first player to get three of their marks in a row,' +
				' either horizontally, vertically, or diagonally.',
			icon: 'info',
			confirmButtonText: 'Got it!'
		})
	}

	// Event listener for "info" icon
    const infoIcon = document.querySelector(".fa-circle-info");
    infoIcon.addEventListener("click", () => {
        sweetAlert();
    });
})();