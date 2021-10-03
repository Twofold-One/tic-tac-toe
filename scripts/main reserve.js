// //DOM elements query module
// const element  = (() => {
//     const gameboardContainer = document.querySelector("#gameboard");
//     const gameboardCell = document.querySelector("#cell");
//     const gameboardCellAll = document.querySelectorAll("#cell");
//     const restartButton = document.querySelector("#restart-button");
//     return {gameboardContainer, gameboardCell, gameboardCellAll, restartButton};
// })();

// //display controller module
// const displayController = (() => {

//     const createGameboard = () => {
//         for (let i = 0; i < 9; i++) {
//             const gameboardCell = document.createElement("div");
//             gameboardCell.setAttribute("id", "cell");
//             gameboardCell.setAttribute("data-cell", `${i}`);
//             gameboardCell.setAttribute("class", "gameboard-cell")
//             element.gameboardContainer.append(gameboardCell);
//         }
//     };

//     const displayGameboard = () => {
//         for (let i = 0; i < 9; i++) {
//             const cell =  element.gameboardCell.querySelector(`[data-cell = '${i}']`);
//             if (gameBoard.cellElement[i] === 'x') {
                
//             }
//         }

//     };

//     return {createGameboard};
// })();
// displayController.createGameboard();

// //gameboard module
// const gameBoard = (() => {
//     const cellElement = ["", "", "", "", "", "", "", "", ""]

//     return {cellElement};
// })();

// //gameflow module
// const gameFlow = (() => {

//     return {};
// })();




//newPlayer factory
// const newPlayer = (name) => {
//     const sayHello = () => console.log(`Hi ${name}!`);
//     return {name, sayHello};
// };

// //gameBoard module
// const gameBoard = (() => {
//     let elements = ['', '', '', '', '', '', '', '', ''];
    
//     const clear = () => {
//         for (let i = 0; i < 9; i++) {
//             gameBoard.elements[i] = '';
//         }
//     };

//     return {elements, clear};
// })();

// //displayController
// const displayController = (() => {
    
//     const createGameboard = () => {
//         for (let i = 0; i < 9; i++) {
//             const gameboardContainer = document.querySelector('#gameboard');
//             const gameboardCell = document.createElement('div');
//             gameboardCell.setAttribute('id', `cell`);
//             gameboardCell.setAttribute('data-cell', `${i}`);
//             gameboardCell.classList.add('gameboard-cell');
//             gameboardContainer.appendChild(gameboardCell);
//         }
//     };

//     const displayGameboard = () => {
//         for (let i = 0; i < 9; i++) {
//             const gameboardCell = document.querySelector(`#cell[data-cell='${i}']`);
//             if (gameBoard.elements[i] === 'x') {
//                 gameboardCell.classList.add('x');
//             } else if (gameBoard.elements[i] === 'o') {
//                 gameboardCell.classList.add('o');
//             } else {
//                 gameboardCell.classList.remove('x') || gameboardCell.classList.remove('o');
//             }
//         }
//     };
    
// /*     const displayX = () => {
//         const gameboardCell = document.querySelectorAll('#cell');
//         gameboardCell.forEach((cell) => {
//             cell.addEventListener('click', function(e) {
//                 gameBoard.elements[e.target.dataset.cell] = 'x';
//                 displayController.displayGameboard();
//             });
//         });   
//     };

//     const displayO = () => {
//         const gameboardCell = document.querySelectorAll('#cell');
//         gameboardCell.forEach((cell) => {
//             cell.addEventListener('click', function(e) {
//                 gameBoard.elements[e.target.dataset.cell] = 'o';
//                 displayController.displayGameboard();
//             });
//         });   
//     }; */

//     return {createGameboard, displayGameboard}
// })();
// displayController.createGameboard();
// displayController.displayGameboard();

// //gameFlow module
// const gameFlow = (() => {
    
//     let xTurn = true;

//     const restart = () => {
//         const restartBtn = document.querySelector('#restart-button');
//         restartBtn.addEventListener('click', () => {
//             gameBoard.clear();
//             displayController.displayGameboard();
//             xTurn = true;
//             gameFlow.turn();
//         });
//     };


//     const turn = () => {
//         const gameboardCell = document.querySelectorAll('#cell');
//         gameboardCell.forEach((cell) => {
//             cell.addEventListener('click', cellClick, {once: true});
//         });

//         function cellClick(e) {
//             const cell = e.target;
//             const currentTurn =  xTurn ? 'x' : 'o';
//             placeElement(cell, currentTurn);
//             switchTurn();
//         }

//         function placeElement(cell, currentTurn) {
//             gameBoard.elements[cell.dataset.cell] = currentTurn;
//             displayController.displayGameboard();
//         }

//         function switchTurn() {
//             xTurn = !xTurn;
//         }
           
//     };

//     const checkForWin = () => {

//     };

//     return {restart, turn, checkForWin};
// })();
// gameFlow.checkForWin();
// gameFlow.turn();
// gameFlow.restart();