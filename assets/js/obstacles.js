class Obstacles {
  constructor() {
    this.obstacles = [];
  }

  init() {
    this.ctx = game.ctx;
  }

  update() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.update();
      if (obstacle.x + obstacle.width < 0) {
        this.obstacles.splice(i, 1);
      }
    }
  }

  addObstacle() {
    const obstacle = new Obstacle();
    obstacle.init();
    this.obstacles.push(obstacle);
  }
}

class Obstacle {
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
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Obstacles;
