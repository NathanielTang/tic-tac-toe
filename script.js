const gameboard = (()=>{
    let gameboardArray = [1,2,3,4,5,6,7,8,9]
        //nine objects, with Status: X, O, or empty
        //then the other functions will manipulate the objects within gameboardArray to change the Status property
    let gameboardSpace = document.querySelector('#gameboardSpace')
    const createGameboard = () => {
        gameboardArray.forEach(element => {
            let gameboardSquare = document.createElement('div');
            gameboardSquare.textContent = "X";

            gameboardSpace.appendChild(gameboardSquare)
        }); 
    } 
    return {createGameboard}
})();

const gameFlow = (() => {

})();

const player = (name) => {
    const sayName = () => {
        console.log(name)
    }
    return {
        name,
        sayName
    }
}

const addPlayer = () => {
    //add name from HTML and assign X or O
    //get DOM
    let getName = document.querySelector('#playerName');
    let name = getName.textContent;

    console.log(name)

    player(name)
}

console.log('hello world')