//gameBoard module
const gameBoard = (() => {
    let elements = ["", "", "", "", "", "", "", "", ""];
    
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
displayController.displayGameboard();

//gameFlow module
const gameFlow = (() => {
    let xTurn;
    const turn = () => {   
        const gameboardCell = document.querySelectorAll("#cell");
        gameboardCell.forEach((cellEl) => {
            cellEl.addEventListener("click", cellClick, {once: true});

            function cellClick(e) {
                const cellEl = e.target;
                const currentTurn = xTurn ? "o" : "x";
                placeElement(cellEl, currentTurn);
                switchTurn();
                console.log(gameBoard.elements);
                checkForWin();
                displayController.displayGameboard();
            };

            function placeElement(cellEl, currentTurn) {
                gameBoard.elements[cellEl.dataset.cell] = currentTurn;
            };

            function switchTurn() {
                xTurn = !xTurn;
            };
        });
    };

    const restart = () => {
        const restartBtn = document.querySelector("#restart-button");
        restartBtn.addEventListener("click", () => {
            gameBoard.clear();
            displayController.displayGameboard();
            turn();
        });
    };

    const checkForWin = () => {
        let currentElement = xTurn ? "x" : "o";
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
        if (isElementWin()) {
            console.log(`${currentElement}'s win!`)
        }

        

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
        console.log(xTurn, currentElementIndexes);
    };

    return {turn, restart, checkForWin};
})();
gameFlow.turn();
//gameFlow.checkForWin();
gameFlow.restart();



// const arr1 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// const arr2 = [4, 5, 6];

// let yes = arr2.every(item => {
//     return arr1.some(combination => {
//         return combination.includes(item);
//     });
// });

// console.log(yes);
