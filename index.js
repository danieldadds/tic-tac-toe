// DOM Assignment

const boxOne = document.getElementById("One");
const boxTwo = document.getElementById("Two");
const boxThree = document.getElementById("Three");
const boxFour = document.getElementById("Four");
const boxFive = document.getElementById("Five");
const boxSix = document.getElementById("Six");
const boxSeven = document.getElementById("Seven");
const boxEight = document.getElementById("Eight");
const boxNine = document.getElementById("Nine");

//game board to store the players, gameboard and players turn

const gameBoard = {
  players: [],
  spaces: ["F", "F", "F", "F", "F", "F", "F", "F", "F"],
  playerTurn: false,
};

/// assign player name, marker and color

const Player = (name, marker, color) => {
  const getName = () => name;
  const getMarker = () => marker;
  const getColor = () => color;

  return { getName, getMarker, getColor };
};

//game controls

const gameControls = (() => {
  // add move

  const playerSelection = (player) => {
    let color = player.getColor();
    let marker = player.getMarker();

    boxOne.addEventListener("click", function () {
      addMove(0, marker, color);
    });
    boxTwo.addEventListener("click", function () {
      addMove(1, marker, color);
    });
    boxThree.addEventListener("click", function () {
      addMove(2, marker, color);
    });
    boxFour.addEventListener("click", function () {
      addMove(3, marker, color);
    });
    boxFive.addEventListener("click", function () {
      addMove(4, marker, color);
    });
    boxSix.addEventListener("click", function () {
      addMove(5, marker, color);
    });
    boxSeven.addEventListener("click", function () {
      addMove(6, marker, color);
    });
    boxEight.addEventListener("click", function () {
      addMove(7, marker, color);
    });
    boxNine.addEventListener("click", function () {
      addMove(8, marker, color);
    });
  };
  const addMove = (space, marker, color) => {
    if (gameBoard.playerTurn === true && marker === "X") {
      if (gameBoard.spaces[space] === "F") {
        gameBoard.spaces[space] = marker;
        console.log(gameBoard.spaces);
        console.log("box " + space + " selected" + " by " + marker);
        gameBoard.playerTurn = false;
        gameControls.playerSelection(playerTwo);
      } else {
        console.log(gameBoard.spaces + " please go again");
      }
    } else if (gameBoard.playerTurn === false && marker === "O") {
      if (gameBoard.spaces[space] === "F") {
        gameBoard.spaces[space] = marker;
        console.log(gameBoard.spaces);
        gameBoard.playerTurn = true;
        gameControls.playerSelection(playerOne);
      } else {
        console.log(gameBoard.spaces + " please go again");
      }
    } else {
      console.log("you've already had your turn");
      console.log(gameBoard.spaces);
    }
  };

  const addMarker = (space, player) => {};
  return {
    addMove,
    addMarker,
    playerSelection,
  };
})();

const playerOne = Player("Daniel", "X", "Black");
const playerTwo = Player("Jordan", "O", "Red");

// gameControls.addMove(0, playerOne.getMarker(), playerOne);
// gameControls.addMove(5, playerTwo.getMarker(), playerTwo);

// gameControls.playerSelection(playerOne);
