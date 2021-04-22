

const game = (canvas) => {  

  /**
   * @type {CanvasRenderingContext2D}
   */
  const context = canvas.getContext("2d"); // webgl webgl2

  window.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      startJump();
      event.preventDefault();
    }
  });

  startTime = Date.now();
  lastFrameTime = Date.now();
  doFrame(context)(); // 60 fps
}

let startTime = 0;
let lastFrameTime = 0;

let x = 300;
let y = 0;

let vx = 10;
let vy = 0;

let g = 20; 
let v0 = 100; 

const startJump = () => {
  if (y === 0) {
    vy = v0;
  }
}


/**
 * @param {CanvasRenderingContext2D} context 
 */
const doFrame = context => () => {
  let now = Date.now();
  let dt = (now - lastFrameTime) / 100; // TODO: почему 100 ???
  lastFrameTime = now;


  vy = vy - g * dt;
  y = y + (vy * dt);

  if (y <= 0) {
    vy = 0;
    y = 0;
  }

  // x = x + vx * dt;
  console.log(dt, x);


  // Render
  const width = context.canvas.offsetWidth;
  const height = context.canvas.offsetHeight;

  let horizon = height / 2;
  let rDino = 50;

  context.save();
  context.clearRect(0, 0, width, height);


  context.translate(0, horizon + y);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, 0);
  context.stroke();


  context.beginPath();
  context.arc(x, -rDino - y, rDino, 0, Math.PI * 2);
  context.stroke();

  // x += 1 * dt;
  
  context.restore();
  requestAnimationFrame(doFrame(context));
}
