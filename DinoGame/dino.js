
class Dino {
  shape;
  position;

  // R = 50;

  // x = 0;
  // y = 0;

  vx = 10;
  vy = 0;

  g = 20;
  vy0 = 100;

  constructor({ r, vx, g , vy0 }) {
    this.position = [0, 0];
    this.shape = circle(0, 0 + r, r);
    this.vx = vx;
    this.g = g;
    this.vy0 = vy0;
  }

  jump() {
    if (this.position[1] === 0) {
      this.vy = this.vy0;
    }
  }

  step(dt) {
    let [x, y] = this.position;
    let r = this.shape.r;

    this.vy -= this.g * dt;
    y += (this.vy * dt);

    // Столкновение с землей
    if (y <= 0) {
      this.vy = 0;
      y = 0;
    }

    x += this.vx * dt;

    this.shape = circle(x, y + r, r);
    this.position = [x, y];
    console.log(this.position);
  }

}


renderDino = (context) => (dino) => {
  context.beginPath();
  context.arc(0, 0, dino.shape.r, 0, Math.PI * 2);
  context.stroke();
}