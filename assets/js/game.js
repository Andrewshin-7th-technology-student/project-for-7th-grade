class Game {
  constructor() {
    this.canvas = document.getElementById('game-container');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.fps = 60;
    this.deltaTime = 0;
    this.lastTime = 0;
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  update() {
    this.deltaTime = (performance.now() - this.lastTime) / 1000;
    this.lastTime = performance.now();
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.width, this.height);
    player.update();
    obstacles.update();
    powerUps.update();
    enemies.update();
  }

  start() {
    this.update();
    requestAnimationFrame(() => this.start());
  }
}

export default Game;
