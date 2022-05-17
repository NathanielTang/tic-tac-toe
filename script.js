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
    addPlayer.displayTurn();
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

    if (mark1 === "empty" || mark2 === "empty" || mark3 === "empty") {
      return;
    } else if (mark1 === mark2 && mark2 === mark3) {
      console.log(`${mark1} wins!`);
      for (i = 0; i < 9; i++) {
        if ((gameboardArray[i].status = "empty")) {
          gameboardArray[i].status = i;
        }
      }
      return (gameStatus = `${mark1} win`);
    }
  };

  const _checkWin = () => {
    checkGameStatus(0, 1, 2);
    checkGameStatus(0, 3, 6);
    checkGameStatus(0, 4, 8);
    checkGameStatus(1, 4, 7);
    checkGameStatus(2, 4, 6);
    checkGameStatus(3, 4, 5);
    checkGameStatus(2, 5, 8);
    checkGameStatus(6, 7, 8);
    if (gameFlow.checkTurnNine() === "nine") {
      console.log("tie");
    }
  };

  return { render, markSpace, clearGameboard };
})();

gameboard.render();


const gameFlow = (() => {
  //make a function to assign X or O to player 1 or 2.
  let turn = 1;
  let playerXwins = 0;
  let playerOwins = 0;

  const changeTurn = () => {
    
    if (turn % 2 === 0) {
      turn++;
      return "O";
    } else {
      turn++;
      return "X";
    }
  };

  const checkTurn = () => {
      return turn;
  }

  const checkTurnNine = () => {
    if (turn === 10) {
      return "nine";
    }
    return false;
  };
  const _newGame = () => {
    turn = 0;
    gameboard.clearGameboard();
  };

  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", _newGame);

  const addWin = (mark) => {
    if ((mark = "X")) {
      playerXwins++;
    }
    if ((mark = "O")) {
      playerOwins++;
    }
  };
  return {
    changeTurn,
    checkTurnNine,
    checkTurn,
  };
})();

const Player = (name, mark) => {
  return {
    name,
    mark,
  };
};

const addPlayer = (() => {
  let nameInput = document.getElementById("playerName");

  let addPlayerButton = document.querySelector("#addPlayer");
  addPlayerButton.addEventListener("click", _add);

  const playerDiv = document.querySelector("#players");
  let player1 = "";
  let player2 = "";

  function _add() {
    let getName = nameInput.value;
    if (player2 != "") return;
    if (player1 === "") {
      player1 = Player(getName, "X");
      _createPlayerCard(player1, "Player 1: ");
      displayTurn();
    } else {
      player2 = Player(getName, "O");
      _createPlayerCard(player2, "Player 2: ");
      displayTurn();

    }
  nameInput.value = "";

  }

  function _createPlayerCard(player, string) {
    let playerCard = document.createElement("div");
    playerDiv.appendChild(playerCard);
    let playerName = document.createElement("p");
    playerName.textContent = string + player.name;
    let playerMark = document.createElement("p");
    playerMark.textContent = "Playing as " + player.mark;

    playerCard.appendChild(playerName);
    playerCard.appendChild(playerMark);
  }

  const _newPlayers = () => {
    player1 = "";
    player2 = "";
    playerDiv.innerHTML = "";
  };

  const changePosition = () => {
    if (player1 === "" || player2 === "") return;
    
    console.log("aaa" + player1.mark);

    if (player1.mark === "X") {
      player1.mark = "O";
      player2.mark = "X";
    } else if (player1.mark === "O") {
      player1.mark = "X";
      player2.mark = "O";
    }

    playerDiv.innerHTML = "";

    _createPlayerCard(player1, "Player 1: ");

    _createPlayerCard(player2, "Player 2: ");
  };

  const displayTurnDiv = document.getElementById("displayTurn")
  const displayTurnCard = document.getElementById("displayTurnCard")
  const displayTurn = () => {
    let turn = "";
    if (gameFlow.checkTurn() % 2 === 0) {
        turn = "O";
      } else {
        turn = "X";
      }
      //if players exist then use names
      //if no players just use symbol

      if (turn === "X") {
          if (player1.mark === "X") {
            displayTurnDiv.textContent = player1.name + "'s turn";
           }
           else {
            displayTurnDiv.textContent = player2.name + "'s turn";
           }
      }
      if (turn === "O") {
        if (player1.mark === "O") {
            displayTurnDiv.textContent = player1.name + "'s turn";
           }
           else {
            displayTurnDiv.textContent = player2.name + "'s turn";
           }
      }
      
  }

  displayTurn();
  const newPlayersButton = document.getElementById("newPlayers");
  newPlayersButton.addEventListener("click", _newPlayers);

  const changePositionButton = document.getElementById("changePosition");
  changePositionButton.addEventListener("click", changePosition);

  nameInput.value = "";

  return {
      displayTurn,
  }
})();
