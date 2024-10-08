class PowerUps {
  constructor() {
    this.powerUps = [];
  }

  init() {
    this.ctx = game.ctx;
  }

  update() {
    for (let i = 0; i < this.powerUps.length; i++) {
      const powerUp = this.powerUps[i];
      powerUp.update();
      if (powerUp.x + powerUp.width < 0) {
        this.powerUps.splice(i, 1);
      }
    }
  }

  addPowerUp() {
    const powerUp = new PowerUp();
    powerUp.init();
    this.powerUps.push(powerUp);
  }
}

class PowerUp {
  constructor() {
    this.x = game.width;
    this.y = game.height - 50;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
  }

  init() {
    this.ctx = game.ctx;
  }

  update() {
    this.x -= this.speed;
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default PowerUps;
