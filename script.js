const gameboard = (() => {
  let gameboardArray = [
      {status: "empty"},
      {status: "empty"},
      {status: "empty"},
      {status: "empty"},
      {status: "empty"},
      {status: "empty"},
      {status: "empty"},
      {status: "empty"},
      {status: "empty"},
  ];

 
  let gameboardSpace = document.querySelector("#gameboardSpace");
  const _createGameboard = () => {
    gameboardSpace.innerHTML = "";
    gameboardArray.forEach((element, index) => {
      let gameboardSquare = document.createElement("div");
      gameboardSquare.classList.add("gameboard");
      gameboardSquare.dataset.index = index;

      if (element.status === "empty") {
        gameboardSquare.textContent = "";
      } else if (element.status === "X") {
        gameboardSquare.textContent = "X";
      } else if (element.status === "O") {
        gameboardSquare.textContent = "O";
      } else return;
      gameboardSpace.appendChild(gameboardSquare);

      gameboardSquare.addEventListener("click", markSpace);
    });
  };

  const markSpace = function markSpace() {
    //where mark is X or O;
    let index = this.dataset.index;
    mark = "X";

    if (gameboardArray[index].status != "empty") return;

    console.log("a" + this.dataset.index);

    if (mark === "X") {
      gameboardArray[index].status = "X";
    } else if (mark === "O") {
      gameboardArray[index].status = "O";
    }
    render();
    //gameFlow.changeTurn();
    
  };
  const render = () => {
    _createGameboard();
  };
  
  return {render, markSpace};
})();

gameboard.render();

const gameFlow = (() => {
    //make a function to assign X or O to player 1 or 2.

    const changeTurn = () => {

    }
})();

const Player = (name, mark) => {
  return {
    name,
    mark,
  };
};

const addPlayer = (() => {
 
  let nameInput = document.querySelector("#playerName");
  let getName = nameInput.value;
   let addPlayerButton = document.querySelector('#addPlayer')
    addPlayerButton.addEventListener('click', bad)
    addPlayerButton.addEventListener('click', add)
    

    function bad() {
        nameInput.textContent = "";
        console.log('i suck');
        console.log(getName)
    }
    
  console.log('i suk')
  function add() {
      console.log("IT WORKS")
      getName
      //some logic to decide player 1 or 2, then IF ...
        let player1;
        let player2;
      if (player1 === false) {
          player1 = Player(getName, "X")
    } if (player1 === true) {
        player2 = Player(getName, "O")
    }
return{
        add 
    }
   
};
})();
