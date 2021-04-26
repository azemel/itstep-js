

const game = (canvas) => {

  /**
   * @type {CanvasRenderingContext2D}
   */
  const context = canvas.getContext("2d"); // webgl webgl2

  dino = new Dino({
    r: 50,
    vx: 100,
    g: 300,
    vy0: 200,
  });

  // cactuses = createArray(spawnCactus({ rMin: 20, rMax: 60 }))(10);

  for (let index = 0; index < 10; index++) {
    cactuses.push(spawnCactus({ rMin: 20, rMax: 60, dMin: 200, dMax: 300 })(cactuses));
  }


  window.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      dino.jump();
      event.preventDefault();
    }
  });

  gameIsOver = false;
  startTime = Date.now();
  lastFrameTime = Date.now();
  doFrame(context)(); // 60 fps
}

let dino = null;
let cactuses = [];


let gameIsOver = false;
let startTime = 0;
let lastFrameTime = 0;

/**
 * @param {CanvasRenderingContext2D} context
 */
const doFrame = context => () => {
  let now = Date.now();
  let dt = (now - lastFrameTime) / 1000;
  lastFrameTime = now;

  if (!gameIsOver) {
    progress(dt);
  }

  render(context);

  requestAnimationFrame(doFrame(context));
}

const progress = (dt) => {

  dino.step(dt);

  cactuses.forEach(cactus => {
    if (collide(dino.shape, cactus.shape)) {
      console.log(dino.shape.o, cactus.shape.o);
      console.log(length(substract(dino.shape.o, cactus.shape.o)), dino.shape.r + cactus.shape.r);

      gameIsOver = true;
      console.log("game over");
    }
  });

  // Забываем кактусы из пршлого
  // Генерируем кактусы в будущем
  
}

const render = (context) => {

  // Render
  const width = context.canvas.offsetWidth;
  const height = context.canvas.offsetHeight;

  let horizon = height / 2;
  let middle = width / 2;

  const [x, y] = dino.shape.o;

  // console.log(dino);

  context.clearRect(0, 0, width, height);
  
  context.save();
  context.translate(0, horizon);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, 0);
  context.stroke();
  
  context.translate(middle - x, 0);


  context.save();
  context.translate(x, -y);
  renderDino(context) (dino);
  context.restore();

  cactuses.forEach(cactus => {
    context.save();
    
    const [cx, cy] = cactus.shape.o;
    context.translate(cx, -cy);
    renderCactus(context) (cactus);
    context.restore();
  });

  // x += 1 * dt;

  context.restore();
}