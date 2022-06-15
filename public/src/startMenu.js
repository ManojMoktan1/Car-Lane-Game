body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "black";

function startMenu() {
  gameArea.screen.position = "relative";
  const displayStart = document.createElement("div");
  displayStart.setAttribute("class", "displayStart");
  displayStart.innerHTML = "Car Lane Game";
  gameArea.screen.append(displayStart);

  const gameStartButton = document.createElement("div");
  gameStartButton.setAttribute("class", "gameStartButton");
  gameStartButton.innerText = "Start";
  displayStart.append(gameStartButton);
  gameStartButton.onclick = function () {
    playGame(displayStart);
  };
}
