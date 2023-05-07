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

const gameText = document.getElementById("game-text");

//start button

const startButton = document.getElementById("start");

//game board to store the players, gameboard and players turn

const gameBoard = {
  players: [],
  spaces: ["F", "F", "F", "F", "F", "F", "F", "F", "F"],
  playerTurn: true,
  isWin: false,
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

  const clearBoard = () => {
    boxOne.style.backgroundColor = "";
    boxTwo.style.backgroundColor = "";
    boxThree.style.backgroundColor = "";
    boxFour.style.backgroundColor = "";
    boxFive.style.backgroundColor = "";
    boxSix.style.backgroundColor = "";
    boxSeven.style.backgroundColor = "";
    boxEight.style.backgroundColor = "";
    boxNine.style.backgroundColor = "";

    gameBoard.spaces = ["F", "F", "F", "F", "F", "F", "F", "F", "F"];
    // gameControls.clearBoard();
    gameBoard.playerTurn = true;
    gameBoard.isWin = false;
    gameText.textContent = "Player One go first";
    gameControls.playerSelection(playerOne);

    //// BUG WITH THE EVENT LISTENER --- NEED TO REWRITE AS CAUSING TO CRASH

    console.log(gameBoard.spaces);
  };
  const playerSelection = (player) => {
    let marker = player.getMarker();
    let color = player.getColor();

    boxOne.addEventListener("click", function () {
      addMove(0, marker);
      if (gameBoard.spaces[0] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxTwo.addEventListener("click", function () {
      addMove(1, marker, player);
      if (gameBoard.spaces[1] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxThree.addEventListener("click", function () {
      addMove(2, marker, color);
      if (gameBoard.spaces[2] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxFour.addEventListener("click", function () {
      addMove(3, marker, color);
      if (gameBoard.spaces[3] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxFive.addEventListener("click", function () {
      addMove(4, marker, color);
      if (gameBoard.spaces[4] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxSix.addEventListener("click", function () {
      addMove(5, marker, color);
      if (gameBoard.spaces[5] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxSeven.addEventListener("click", function () {
      addMove(6, marker, color);
      if (gameBoard.spaces[6] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxEight.addEventListener("click", function () {
      addMove(7, marker, color);
      if (gameBoard.spaces[7] === marker) {
        this.style.backgroundColor = color;
      }
    });
    boxNine.addEventListener("click", function () {
      addMove(8, marker, color);
      if (gameBoard.spaces[8] === marker) {
        this.style.backgroundColor = color;
      }
    });
  };
  const addMove = (space, marker) => {
    checkWin(playerOne.getName(), playerOne.getMarker());
    checkWin(playerTwo.getName(), playerTwo.getMarker());
    if (
      gameBoard.playerTurn === true &&
      marker === "X" &&
      gameBoard.isWin === false
    ) {
      if (gameBoard.spaces[space] === "F") {
        gameBoard.spaces[space] = marker;
        console.log(gameBoard.spaces);
        console.log("box " + space + " selected" + " by " + marker);
        gameBoard.playerTurn = false;
        gameText.textContent = "Player two's turn";
        gameControls.playerSelection(playerTwo);
      } else {
        gameText.textContent = "Player One go again";
        gameControls.playerSelection(playerOne);
      }
    } else if (gameBoard.playerTurn === false && marker === "O") {
      if (gameBoard.spaces[space] === "F") {
        gameBoard.spaces[space] = marker;
        console.log(gameBoard.spaces);

        gameBoard.playerTurn = true;
        gameText.textContent = "Player One's turn";
        gameControls.playerSelection(playerOne);
      } else {
        gameControls.playerSelection(playerTwo);
      }
    } else if (gameBoard.spaces === "X" || gameBoard.spaces === "O") {
      gameText.textContent = "Marker in use, go again!";
      console.log(gameBoard.spaces);
    }
  };

  const checkWin = (player, marker) => {
    if (
      gameBoard.spaces[0] === marker &&
      gameBoard.spaces[1] === marker &&
      gameBoard.spaces[2] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
    } else if (
      gameBoard.spaces[3] === marker &&
      gameBoard.spaces[4] === marker &&
      gameBoard.spaces[5] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
      gameControls.clearBoard();
    } else if (
      gameBoard.spaces[6] === marker &&
      gameBoard.spaces[7] === marker &&
      gameBoard.spaces[8] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
      gameControls.clearBoard();
    } else if (
      gameBoard.spaces[0] === marker &&
      gameBoard.spaces[4] === marker &&
      gameBoard.spaces[8] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
      gameControls.clearBoard();
    } else if (
      gameBoard.spaces[6] === marker &&
      gameBoard.spaces[4] === marker &&
      gameBoard.spaces[2] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
      gameControls.clearBoard();
    } else if (
      gameBoard.spaces[0] === marker &&
      gameBoard.spaces[3] === marker &&
      gameBoard.spaces[6] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
      gameControls.clearBoard();
    } else if (
      gameBoard.spaces[1] === marker &&
      gameBoard.spaces[4] === marker &&
      gameBoard.spaces[7] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
      gameControls.clearBoard();
    } else if (
      gameBoard.spaces[2] === marker &&
      gameBoard.spaces[5] === marker &&
      gameBoard.spaces[8] === marker
    ) {
      gameBoard.isWin = true;
      gameText.innerText = player + " wins!";
      console.log(player + "player one wins");
      gameControls.clearBoard();
    }
    // else {
    //   gameText.innerText = "its a draw";
    //   console.log("its a draw");
    // }
  };
  return {
    clearBoard,
    addMove,
    checkWin,
    playerSelection,
  };
})();

const playerOne = Player("Daniel", "X", "Black");
const playerTwo = Player("Jordan", "O", "Red");

// start game \

startButton.addEventListener("click", function () {
  gameControls.clearBoard();
});
