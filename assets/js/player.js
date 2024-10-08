class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 50 ;
    this.height = 50;
    this.speed = 5;
    this.jumpSpeed = 10;
    this.gravity = 0.5;
    this.velocityX = 0;
    this.velocityY = 0;
  }

  init() {
    this.ctx = game.ctx;
  }

  update() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.velocityY += this.gravity;
    this.y += this.velocityY;
    if (this.y + this.height > game.height) {
      this.y = game.height - this.height;
      this.velocityY = 0;
    }
    if (this.x + this.width > game.width) {
      this.x = game.width - this.width;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  }

  jump() {
    this.velocityY = -this.jumpSpeed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }
}

export default Player;
