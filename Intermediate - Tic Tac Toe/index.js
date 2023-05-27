// module
// use to control init game, turns, testing for winner
const gameBoard = () => {
  const gameBoard = ["X", "X", "X", "X", "X", "O", "O", "O", "O"];
  // const initGame = () => {}
  return { gameBoard };
};
// module
// only use for taking user input and updating the UI
const displayController = () => {
  const clickHandlerBoard = () => {
    console.log("test");
  };
  // updateScreen
  return { clickHandlerBoard };
};

// players - multiple. use a factory
const player = (name, number) => {
  return { name, number };
};
const playerOne = player("john", 1);
const playerTwo = player("smith", 2);
console.log(playerOne, playerTwo);

displayController().clickHandlerBoard();
