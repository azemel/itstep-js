
class Game {

  dino = null;
  futureCactuses = [];
  pastCactuses = [];
  
  gameIsOver = false;
  gameIsPaused = false;
  startTime = 0;
  lastFrameTime = 0;
  
  score = 0;

  width;
  height;

  horizon;
  middle;



  constructor(canvas) {

    const context = canvas.getContext("2d");
  
    // Render
    this.width = context.canvas.offsetWidth;
    this.height = context.canvas.offsetHeight;

    this.horizon = this.height / 2;
    this.middle = this.width / 2;

    this.dino = new Dino({
      r: 50,
      vx: 300,
      g: 8000,
      vy0: 2000,
    });
  
    this.spawnCactus = spawnCactus({ rMin: 20, rMax: 40, dMin: 400, dMax: 500 });

    for (let index = 0; index < 2; index++) {
      this.futureCactuses.push(this.spawnCactus(this.futureCactuses));
    }
  
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        if (this.gameIsPaused) {
          this.gameIsPaused = false;
        } else {
          this.dino.jump();
          event.preventDefault();
        }

      }
    });

    window.addEventListener("blur", () => {
      this.gameIsPaused = true;
    })

    this.render = this.render_(context);
  }

  start() {
    this.gameIsOver = false;
    this.gameIsPaused = false;
    this.startTime = Date.now();
    this.lastFrameTime = Date.now();
    this.doFrame(); // 60 fps
  }

  
  /**
   * @param {CanvasRenderingContext2D} context
   */
  doFrame = () => {
    let now = Date.now();
    let dt = (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;

    if (!this.gameIsOver && !this.gameIsPaused) {
      this.progress(dt);
    }

    this.render();

    requestAnimationFrame(this.doFrame);
  }

  progress = dt => {

    this.dino.step(dt);

    this.futureCactuses.forEach(cactus => {
      if (collide(this.dino.shape, cactus.shape)) {
        this.gameIsOver = true;
        console.log("game over");
      }
    });

    
    const dinoLeft = this.dino.shape.o[0] - this.dino.shape.r;
    while (true) {
      let cactus = this.futureCactuses[0];
      if (!cactus || (dinoLeft < cactus.shape.o[0] + cactus.shape.r)) {
        break;
      }
      
      this.score += 1;
      this.pastCactuses.push(this.futureCactuses.shift());
      if (this.pastCactuses.length > 10) {
        this.pastCactuses.shift();
      }
      this.futureCactuses.push(this.spawnCactus(this.futureCactuses));
    
    }

    
  }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  render_ = context => () => {

    const [x, y] = this.dino.shape.o;

    context.clearRect(0, 0, this.width, this.height);
    
    context.save();
    context.translate(0, this.horizon);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.width, 0);
    context.stroke();
    
    context.translate(this.middle - x, 0);


    context.save();
    context.translate(x, -y);
    renderDino(context) (this.dino);
    context.restore();

    // console.log([...pastCactuses, ...futureCactuses]);
    [...this.pastCactuses, ...this.futureCactuses].forEach(cactus => {
      context.save();
      
      const [cx, cy] = cactus.shape.o;
      context.translate(cx, -cy);
      renderCactus(context) (cactus);
      context.restore();
    });

    // x += 1 * dt;


    context.restore();

    context.font = "800 24px monospace";
    context.textBaseline = "top";
    
    context.save();
    context.translate(this.width, 0);
    // context.scale(2, 2);
    context.textAlign = "right";
    context.fillText(this.score, -10, 10);
    context.restore();

    
    if (this.gameIsOver) {
      context.save();
      context.translate(this.middle, 0);
      // context.scale(2, 2);
      context.textAlign = "center";
      context.fillText("Конец", 0, 10);
      context.restore();
    } else if (this.gameIsPaused) {
      context.save();
      context.translate(this.middle, 0);
      // context.scale(2, 2);
      context.textAlign = "center";
      context.fillText("Пауза", 0, 10);
      context.restore();
    }
  }

}

