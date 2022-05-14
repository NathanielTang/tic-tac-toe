const gameboard = (() => {
  let gameboardArray = [
    { status: "empty" },
    { status: "empty" },
    { status: "empty" },
    { status: "empty" },
    { status: "empty" },
    { status: "empty" },
    { status: "empty" },
    { status: "empty" },
    { status: "empty" },
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

  const clearGameboard = () => {
      for (i=0; i<9;i++) {
          gameboardArray[i].status = "empty"
      };
      _createGameboard();
      return;
  }

  const markSpace = function markSpace() {
    //where mark is X or O;
    let index = this.dataset.index;
    let mark = gameFlow.changeTurn();

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

  return { render, markSpace , clearGameboard };
})();

gameboard.render();

const gameFlow = (() => {
  //make a function to assign X or O to player 1 or 2.
  let turn  = 1;


  const changeTurn = () => {
    if (turn % 2 === 0) {
        turn++;
        return "O";
    } else {
        turn++;
        return "X";
    }
  };

  
const newGame = () => {
    turn = 0;
    gameboard.clearGameboard();   
}

const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', newGame)

  return {
      changeTurn,
      newGame,
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
  let getName = nameInput.value; //error here
  let addPlayerButton = document.querySelector("#addPlayer");
  addPlayerButton.addEventListener("click", _add);


  function _add() {
    nameInput.value = "";
    console.log("11" + getName)
    
  }
})();