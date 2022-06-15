let car;
let roadBackground;
let carObstacles = [];
let gameSpeed = 2;
const lanePosition = [240, 340, 430];
let index = 1;
const FPS = 14;
let highscore = 0;
let currentScore = 0;
const carHeight = 50;
const carWidth = 30;

function playGame(displayStart) {
  displayStart.classList.toggle("display-none");
  gameArea.gameStart();

  car = new Car(carWidth, carHeight);
  roadBackground = new GameBackground(gameSpeed);
  carObstacle1 = new CarObstacle(carWidth, carHeight, -80);
  carObstacle2 = new CarObstacle(carWidth, carHeight, -200);
  carObstacles.push(carObstacle1);
  carObstacles.push(carObstacle2);

  setInterval(() => {
    gameSpeed += 1;
  }, 4000);

  if (localStorage.getItem("highscore") !== null) {
    highscore = localStorage.getItem("highscore");
  }
}

function showScore() {
  gameArea.context.fillStyle = "#32CD32";
  gameArea.context.font = "26px Sans-serif";
  gameArea.context.fillText(`High Score: ${highscore}`, 500, 60);
  gameArea.context.fillText(`Your Score: ${currentScore}`, 40, 60);
}

function updateGameArea() {
  gameArea.clearCanvas();
  showScore();
  car.carUpdate();
  carObstacles.forEach((carObstacle) => {
    checkCarCollision(carObstacle);
    carObstacle.obstacleUpdate();
  });

  function checkCarCollision(carObstacle) {
    if (
      carObstacle.x + carWidth > car.x &&
      carObstacle.y < car.y + carHeight &&
      carObstacle.x < car.x + carWidth &&
      carObstacle.y + carHeight > car.y
    ) {
      gameArea.gameOver();
    }
  }
  roadBackground.draw();
}
