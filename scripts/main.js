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
        for (let i = 0; i <= 9; i++) {
            const gameboardContainer = document.querySelector('#gameboard');
            const gameboardElement = document.createElement('div');
            gameboardElement.setAttribute('id', `element-${i}`);
            gameboardElement.classList.add('gameboard-element');
            gameboardContainer.appendChild(gameboardElement);
        }
    }

    const displayGameboard = () => {
       const gamebordElement = document.querySelectorAll('.gameboard-element');
    }

    return {createGameboard}
})();

displayController.createGameboard();

