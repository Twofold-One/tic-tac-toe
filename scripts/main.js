//newPlayer factory
const newPlayer = (name) => {
    const sayHello = () => console.log(`Hi ${name}!`);
    return {name, sayHello};
}

//gameBoard module
const gameBoard = (() => {
    const gameboard = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    

    return {gameboard};

})();

//displayController
const displayController = (() => {
    
    const createGameboard = () => {
        for (let i = 0; i < 9; i++) {
            const gameboardContainer = document.querySelector('#gameboard');
            const gameboardCell = document.createElement('div');
            gameboardCell.setAttribute('id', `cell-${i}`);
            gameboardCell.classList.add('gameboard-cell');
            gameboardContainer.appendChild(gameboardCell);
        }
    }

    const displayGameboard = () => {
       const gamebordCell = document.querySelectorAll('.gameboard-cell');
    }

    return {createGameboard}
})();

displayController.createGameboard();

