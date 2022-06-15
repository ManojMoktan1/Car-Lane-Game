function GameBackground(gameSpeed) {
  this.y = 0;
  this.height = gameArea.canvas.height;
  this.maximumBg = this.y + this.height;
  this.down = -gameSpeed++;
  this.image = document.createElement("img");
  this.image.src = "images/lane-1.jpg";
  this.draw = function () {
    ctx = gameArea.context;
    ctx.globalCompositeOperation = "destination-over";
    ctx.drawImage(
      this.image,
      0,
      this.y,
      gameArea.canvas.width,
      gameArea.canvas.height
    );
    ctx.drawImage(
      this.image,
      0,
      this.y - this.height,
      gameArea.canvas.width,
      gameArea.canvas.height
    );
    this.y -= this.down;
    if (this.y > this.maximumBg) {
      this.y = 0;
    }
  };
}
