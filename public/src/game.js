const gameArea = {
  screen: document.querySelector("#screen"),
  canvas: document.createElement("canvas"),

  gameStart: function () {
    this.canvas.width = "700";
    this.canvas.height = "700";
    this.context = this.canvas.getContext("2d");

    this.screen.appendChild(this.canvas);
    this.screen.setAttribute("class", "screen");

    window.addEventListener("keydown", this.keyPressEvent);
    this.gameInterval = setInterval(updateGameArea, FPS);
  },

  keyPressEvent: function (e) {
    if (e.key == "ArrowLeft" || e.key == "a") {
      car.goLeftLane();
    }
    if (e.key == "ArrowRight" || e.key == "d") {
      car.goRightLane();
    }
  },

  clearCanvas: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  gameOver: function () {
    clearInterval(this.gameInterval);
    if (currentScore > highscore) {
      localStorage.setItem("highscore", currentScore);
    }

    const displayGameOver = document.createElement("div");
    displayGameOver.setAttribute("class", "displayGameOver");
    this.screen.append(displayGameOver);
    displayGameOver.innerText = "Game Over!!!";

    const restartButton = document.createElement("div");
    restartButton.setAttribute("class", "restartButton");
    restartButton.innerText = "Restart";

    displayGameOver.append(restartButton);
    restartButton.addEventListener("click", function () {
      window.location.reload();
      playGame();
    });
  },
};
