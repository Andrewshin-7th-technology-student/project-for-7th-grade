class Enemies {
  constructor() {
    this.enemies = [];
  }

  init() {
    this.ctx = game.ctx;
  }

  update() {
    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i];
      enemy.update();
      if (enemy.x + enemy.width < 0) {
        this.enemies.splice(i, 1);
      }
    }
  }

  addEnemy() {
    const enemy = new Enemy();
    enemy.init();
    this.enemies.push(enemy);
  }
}

class Enemy {
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
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Enemies;
