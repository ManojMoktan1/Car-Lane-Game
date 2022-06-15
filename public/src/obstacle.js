function CarObstacle(width, height, y) {
  this.width = width;
  this.height = height;
  this.y = y;
  this.yInitial = y;
  this.dy = 1;
  this.index = getIndexFromRange();
  this.x = lanePosition[this.index];

  this.obstacleUpdate = function () {
    ctx = gameArea.context;
    this.image = document.createElement("img");
    this.image.src = "images/obstacle-1.png";
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.obstacleMotion();
    if (this.y >= gameArea.canvas.height) {
      this.obstacleReset();
    }
  };
  this.obstacleMotion = function () {
    this.y = this.y + this.dy * gameSpeed;
  };
  this.obstacleReset = function () {
    this.y = this.yInitial;
    this.index = getIndexFromRange();
    this.x = lanePosition[this.index];
    currentScore += 1;
  };
}
