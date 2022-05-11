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
    console.log("a" + this.dataset.index);
    mark = "X";
    if (mark === "X") {
      gameboardArray[index].status = "X";
    } else if (mark === "O") {
      gameboardArray[index].status = "O";
    }
    render();
    console.log(this);
  };
  const render = () => {
    _createGameboard();
  };
  return {render, markSpace}; //don't return createGameboard
})();

gameboard.render();

const gameFlow = (() => {})();

const player = (name) => {
  const sayName = () => {
    console.log(name);
  };
  return {
    name,
    sayName,
  };
};

const addPlayer = () => {
  //add name from HTML and assign X or O
  //get DOM
  let getName = document.querySelector("#playerName");
  let name = getName.textContent;

  console.log(name);

  player(name);
};

const test = function test() {
  gameboard.render();
};
