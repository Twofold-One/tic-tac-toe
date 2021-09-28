//newPlayer factory
const newPlayer = (name) => {
    const sayHello = () => console.log(`Hi ${name}!`);
    return {name, sayHello};
};

//gameBoard module
const gameBoard = (() => {
    let elements = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    
    const clear = () => {
        for (let i = 0; i < 9; i++) {
            gameBoard.elements[i] = '';
        }
    };

    return {elements, clear};
})();

//displayController
const displayController = (() => {
    
    const createGameboard = () => {
        for (let i = 0; i < 9; i++) {
            const gameboardContainer = document.querySelector('#gameboard');
            const gameboardCell = document.createElement('div');
            gameboardCell.setAttribute('id', `cell`);
            gameboardCell.setAttribute('data-cell', `${i}`);
            gameboardCell.classList.add('gameboard-cell');
            gameboardContainer.appendChild(gameboardCell);
        }
    };

    const displayGameboard = () => {
        for (let i = 0; i < 9; i++) {
            const gameboardCell = document.querySelector(`#cell[data-cell='${i}']`);
            if (gameBoard.elements[i] === 'x') {
                gameboardCell.classList.add('x');
            } else if (gameBoard.elements[i] === 'o') {
                gameboardCell.classList.add('o');
            } else {
                gameboardCell.classList.remove('x') || gameboardCell.classList.remove('o');
            }
        }
    };
    
    const displayX = () => {
        const gameboardCell = document.querySelectorAll('#cell');
        gameboardCell.forEach((cell) => {
            cell.addEventListener('click', function(e) {
                gameBoard.elements[e.target.dataset.cell] = 'x';
                displayController.displayGameboard();
            });
        });   
    };

    const displayO = () => {
        const gameboardCell = document.querySelectorAll('#cell');
        gameboardCell.forEach((cell) => {
            cell.addEventListener('click', function(e) {
                gameBoard.elements[e.target.dataset.cell] = 'o';
                displayController.displayGameboard();
            });
        });   
    };

    return {createGameboard, displayGameboard, displayX, displayO}
})();
displayController.createGameboard();
displayController.displayGameboard();

//gameFlow module
const gameFlow = (() => {

    const restart = () => {
        const restartBtn = document.querySelector('#restart-button');
        restartBtn.addEventListener('click', () => {
            gameBoard.clear();
            displayController.displayGameboard();
        });
    };

    const turn = () => {
        let xTurn = true;
        let oTurn = false;

        function displayOnTurn() {
            if (xTurn) {
                displayController.displayX();
            } else {
                displayController.displayO();
            }
        };

        function switchTurn() {
            if (xTurn) {
                xTurn = false;
                oTurn = true;
            } else {
                xTurn = true;
                oTurn = false;
            }
        }

        if (xTurn) {
            displayController.displayX();
            switchTurn();
        } else if (oTurn) {
            displayController.displayO();
            switchTurn();
        }
    }
    return {restart, turn};
})();

gameFlow.turn();
gameFlow.restart();









