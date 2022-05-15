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
    for (i = 0; i < 9; i++) {
      gameboardArray[i].status = "empty";
    }
    _createGameboard();
    return;
  };

  const markSpace = function markSpace() {
    //where mark is X or O;
    let index = this.dataset.index;
    
    if (gameboardArray[index].status != "empty") return;

    let mark = gameFlow.changeTurn();

    if (mark === "X") {
      gameboardArray[index].status = "X";
    } else if (mark === "O") {
      gameboardArray[index].status = "O";
    }
    render();
    _checkWin();
  };

  const render = () => {
    _createGameboard();
  };

  let gameStatus = "tie";
  const checkGameStatus = (s1, s2, s3) => {
    //Parameters are the characters of square 1, 2, and 3, respectively.
    let mark1 = gameboardArray[s1].status;
    let mark2 = gameboardArray[s2].status;
    let mark3 = gameboardArray[s3].status;
    console.log(mark1 + " " + mark2 + " " + mark3)
    if (mark1 === "empty" || mark2 === "empty" || mark3 === "empty") {
        return
    }
    else if (mark1 === mark2 && mark2 === mark3) {
        console.log(`${mark1} wins!`);
        return gameStatus = `${mark1} win`
    }
    
  }

  const _checkWin = () => {
    checkGameStatus(0,1,2);
    checkGameStatus(0,3,6);
    checkGameStatus(0,4,8);
    checkGameStatus(1,4,7);
    checkGameStatus(2,4,6);
    checkGameStatus(3,4,5);
    checkGameStatus(2,5,8);
    checkGameStatus(6,7,8);
    if (gameFlow.checkTurnNine() === "nine") {
        console.log('tie');
    }
  }
  
  return { render, markSpace, clearGameboard };
})();

gameboard.render();

const gameFlow = (() => {
  //make a function to assign X or O to player 1 or 2.
  let turn = 1;

  const changeTurn = () => {
      console.log(turn)
    if (turn % 2 === 0) {
      turn++;
      return "O";
    } else {
      turn++;
      return "X";
    }
  };

  const checkTurnNine = () => {
    if (turn === 10) {
        return "nine"
    } return false
  }
  const _newGame = () => {
    turn = 0;
    gameboard.clearGameboard();
  };

  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", _newGame);

  

  return {
    changeTurn,
    checkTurnNine,
  };
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
    console.log("11" + getName);
  }
})();
