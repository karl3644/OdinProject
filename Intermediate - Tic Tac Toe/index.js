// players - multiple. use a factory
const player = (name, turn, symbol) => {
  return { name, turn, symbol };
};

// module
// use to control init game, turns, testing for winner
const gameBoard = (() => {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  let turn;

  // const dialogEvents = {
  // const openButton = document.getElementById("openDialog");
  // const closeButton = document.getElementById("closeDialog");
  // const closeButtonTwo = document.getElementById("closeDialogTwo");

  // openButton.addEventListener("click", () => {
  //   dialog.showModal();
  // });
  // closeButton.addEventListener("click", () => {
  //   dialog.close();
  // });
  // closeButtonTwo.addEventListener("click", () => {
  //   dialog.close();
  // });
  // getUserName()
  // }

  const swapSymbol = () => {
    turn === "X" ? (turn = "O") : (turn = "X");
  };

  const decideInitialSymbol = (() => {
    // if turn undefined the game has just started
    if (turn === undefined) {
      Math.round(Math.random()) === 0 ? (turn = "O") : (turn = "X");
    }
  })();

  const decidePlayerSymbol = (() => {
    let playerOneSymbol = "X";
    let playerTwoSymbol = "O";
    if (Math.round(Math.random()) === 0) {
      playerOneSymbol = "O";
      playerTwoSymbol = "X";
    }
    return { playerOneSymbol, playerTwoSymbol };
  })();

  // const handlePlayerTurn = () => {
  //   if (decideInitialSymbol().turn === decidePlayerSymbol().playerOneSymbol) {
  //     // playerOne = 1;
  //     // playerTwo = 2;
  //   } else {
  //     // playerOne = 2;
  //     // playerTwo = 1;
  //   }
  // };

  // const initGame = () => {}
  // getUserInput(name)
  // decideInitialSymbol
  // handlePlayerTurn

  const playerOne = player("karl", 1, decidePlayerSymbol.playerOneSymbol);
  const playerTwo = player("smith", 2, decidePlayerSymbol.playerTwoSymbol);

  console.log(playerOne, playerTwo);

  return {
    turn,
    // turnNo,
    gameBoard,
    // decidePlayerSymbol,
    decideInitialSymbol,
    swapSymbol,
  };
})();

// module
// only use for taking user input and updating the UI
const displayController = (() => {
  const allCells = Array.from(document.querySelectorAll(".cell"));

  // const createEvent = () => {
  allCells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      gameBoard.gameBoard[index] = gameBoard.turn;
      // gameBoard.swapSymbol();
      // gameBoard.handleChange(gameBoard.turn);
      // gameBoard.increaseCount();
      // console.log(gameBoard.turnNo);
      // console.log(gameBoard.gameBoard);
      updateScreen();
    });
  });
  // };

  const updateScreen = () => {
    if (allCells.length) {
      for (let i = 0; i < gameBoard.gameBoard.length; i++) {
        allCells[i].textContent = gameBoard.gameBoard[i];
      }
    }
  };

  return { updateScreen };
})();
