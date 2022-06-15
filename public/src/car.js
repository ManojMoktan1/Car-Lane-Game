function Car(width, height) {
  this.width = width;
  this.height = height;
  this.y = 600;
  this.index = 1;

  this.x = lanePosition[this.index];

  this.gameSpeed = gameSpeed;
  this.carUpdate = function () {
    ctx = gameArea.context;
    this.image = document.createElement("img");
    this.image.src = "images/car-1.png";
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  this.goRightLane = function () {
    if (this.index < lanePosition.length - 1) {
      this.index++;
      this.x = lanePosition[this.index];
    }
  };

  this.goLeftLane = function () {
    if (this.index > 0) {
      this.index--;
      this.x = lanePosition[this.index];
    }
  };
}
