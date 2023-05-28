// module
// use to control init game, turns, testing for winner
const gameBoard = (() => {
  const gameBoard = ["x", "x", "y", "", "y", "", "", "", ""];
  let turn;

  // getUserName()

  const decideInitialSymbol = () => {
    // if turn undefined the game has just started
    if (turn === undefined) {
      Math.round(Math.random()) === 0 ? (turn = "O") : (turn = "X");
    }
    return { turn };
  };

  const decidePlayerSymbol = () => {
    let playerOneSymbol = "X";
    let playerTwoSymbol = "O";
    if (Math.round(Math.random()) === 0) {
      playerOneSymbol = "O";
      playerTwoSymbol = "X";
    }
    return { playerOneSymbol, playerTwoSymbol };
  };

  const firstPlayer = () => {
    if (decideInitialSymbol().turn === decidePlayerSymbol().playerOneSymbol) {
      // playerOne = 1;
      // playerTwo = 2;
    } else {
      // playerOne = 2;
      // playerTwo = 1;
    }
  };

  const swapSymbol = () => {
    turn === "X" ? (turn = "O") : turn === "O" ? (turn = "X") : null;
    return { turn };
  };

  // const initGame = () => {}
  // getUserInput(name)
  // decideInitialSymbol
  // decide player turn

  return {
    gameBoard,
    decidePlayerSymbol,
    decideInitialSymbol,
    swapSymbol,
    firstPlayer,
  };
})();
// module
// only use for taking user input and updating the UI
const displayController = (() => {
  const allCells = Array.from(document.querySelectorAll(".cell"));

  const clickHandlerBoard = () => {
    allCells.forEach((cell) => {
      cell.addEventListener("click", () => {
        console.log(cell.id);
      });
    });
  };

  const updateScreen = () => {
    if (allCells.length) {
      for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        allCells[i].textContent = gameBoard.gameBoard[i];
      }
    }
  };

  return { clickHandlerBoard, updateScreen };
})();

// players - multiple. use a factory
const player = (name, number, symbol) => {
  return { name, number, symbol };
};
const playerOne = player("john");
const playerTwo = player("smith");

// displayController.updateScreen();
// displayController.clickHandlerBoard();
// gameBoard.decideInitialSymbol();
// gameBoard.swapSymbol();
gameBoard.firstPlayer();
