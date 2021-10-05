//gameBoard module
const gameBoard = (() => {
    let elements = ["", "", "", "", "", "", "", "", ""];
    
    const clear = () => {
        for (let i = 0; i < 9; i++) {
            gameBoard.elements[i] = "";
        }
    };

    return {elements, clear};
})();

//displayController
const displayController = (() => {

    const createGameboard = () => {
        for (let i = 0; i < 9; i++) {
            const gameboardContainer = document.querySelector("#gameboard");
            const gameboardCell = document.createElement("div");
            gameboardCell.setAttribute("id", `cell`);
            gameboardCell.setAttribute("data-cell", `${i}`);
            gameboardCell.classList.add("gameboard-cell");
            gameboardContainer.appendChild(gameboardCell);
        }
    };

    const displayGameboard = () => {
        
        for (let i = 0; i < 9; i++) {
            const gameboardCell = document.querySelector(`#cell[data-cell='${i}']`);
            if (gameBoard.elements[i] === 'x') {
                gameboardCell.classList.add('x');
                gameboardCell.classList.remove('o');
            } else if (gameBoard.elements[i] === 'o') {
                gameboardCell.classList.add('o');
                gameboardCell.classList.remove('x');
            } else {
                gameboardCell.classList.remove('x') || gameboardCell.classList.remove('o');
            }
        }
    };

    return {createGameboard, displayGameboard}
})();
displayController.createGameboard();

//gameFlow module
const gameFlow = (() => {
    const stopGameWindow = document.querySelector("#stop-game-window");
    const messageDisplay = document.querySelector("#gameflow-message");
    const gameboardCell = document.querySelectorAll("#cell");
    let xTurn = true;
    let xWin;
    let oWin;
    let draw;

    function cellClick(e) {
        const cellEl = e.target;
        const currentTurn = xTurn ? "x" : "o";
        placeElement(cellEl, currentTurn);
        displayController.displayGameboard();
        checkForWin(); 
        switchTurn();

        function placeElement(cellEl, currentTurn) {
            gameBoard.elements[cellEl.dataset.cell] = currentTurn;
        };

        function switchTurn() {
            xTurn = !xTurn;
        };
    };

    const turn = () => {   
        gameboardCell.forEach((cellEl) => {
            cellEl.addEventListener("click", cellClick, {once: true});
        });
    };

    const checkForWin = () => {
        const currentElement = xTurn ? "x" : "o";
        let currentElementIndexes;
        
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        findElementIndex();

        if (isDraw()) {
            draw = true;
            messageDisplay.textContent = "Draw";
            stopGame();
            gameFlow.restart();
        } else if (isElementWin()) {
            if (currentElement === "x") {
                xWin = true;
                stopGame();
                gameFlow.restart();
                messageDisplay.textContent = "X's win!";
            } else if (currentElement === "o") {
                oWin = true;
                messageDisplay.textContent = "O's win!";
                stopGame();
                gameFlow.restart();  
            }
        };
         
        
        function findElementIndex() {
            let indices = [];
            let element = currentElement;
            let idElement = gameBoard.elements.indexOf(element);
            while (idElement !== -1) {
                indices.push(idElement);
                idElement = gameBoard.elements.indexOf(element,idElement + 1);
            }
            return currentElementIndexes = indices;
        }

        function isElementWin() {
            return winCombinations.some(combination => {
                return combination.every(index => {
                    return currentElementIndexes.includes(index);
                });
            });
        } 

        function isDraw() {
            return (!gameBoard.elements.some(emptyCell) && !isElementWin())
        }

            function emptyCell(cell) {
                return cell === "";
            }
    };

    const restart = () => {

        const restartBtn = document.querySelector("#restart-button");
        restartBtn.addEventListener("click", restartApp, {once: true});
        
        function restartApp() {
            gameBoard.clear();
            displayController.displayGameboard();
            messageDisplay.textContent = "";
            xTurn = true;
            xWin = undefined;
            oWin = undefined;
            draw = undefined;
            stopGameWindow.classList.remove("show");
            turn();
        }
    }

    const stopGame = () => {
        stopGameWindow.classList.add("show");
    }

    return {xTurn, xWin, oWin, draw, turn, restart, checkForWin, stopGame};
})();
gameFlow.restart();
gameFlow.turn();
