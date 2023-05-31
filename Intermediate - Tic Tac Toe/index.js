// module
// use to control init game, turns, testing for winner
const gameBoard = (() => {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  let turn;
  const openButton = document.getElementById("openDialog");
  const closeButton = document.getElementById("closeDialog");
  const closeButtonTwo = document.getElementById("closeDialogTwo");

  openButton.addEventListener("click", () => {
    dialog.showModal();
  });
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
  closeButtonTwo.addEventListener("click", () => {
    dialog.close();
  });
  // getUserName()

  const decideInitialSymbol = () => {
    // if turn undefined the game has just started
    console.log(turn);
    if (turn === undefined) {
      Math.round(Math.random()) === 0 ? (turn = "O") : (turn = "X");
    }
    // console.log(turn);
    // return { turn };
  };
  console.log(turn);

  const decidePlayerSymbol = () => {
    let playerOneSymbol = "X";
    let playerTwoSymbol = "O";
    if (Math.round(Math.random()) === 0) {
      playerOneSymbol = "O";
      playerTwoSymbol = "X";
    }
    return { playerOneSymbol, playerTwoSymbol };
  };

  const decideInitialTurn = () => {};

  const handlePlayerTurn = () => {
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
  // handlePlayerTurn

  return {
    turn,
    gameBoard,
    decidePlayerSymbol,
    decideInitialSymbol,
    swapSymbol,
  };
})();

// module
// only use for taking user input and updating the UI
const displayController = (() => {
  const allCells = Array.from(document.querySelectorAll(".cell"));

  allCells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      console.log(gameBoard.turn);
      gameBoard.gameBoard[index] = gameBoard.turn;
    });
  });

  const updateScreen = () => {
    if (allCells.length) {
      for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        allCells[i].textContent = gameBoard.gameBoard[i];
      }
    }
  };

  return { updateScreen };
})();

// players - multiple. use a factory
const player = (name, number, symbol) => {
  return { name, number, symbol };
};
const playerOne = player("john");
const playerTwo = player("smith");

gameBoard.decideInitialSymbol();
// gameBoard.decidePlayerSymbol();
console.log(gameBoard.decideInitialSymbol());
