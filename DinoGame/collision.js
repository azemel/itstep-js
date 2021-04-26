const vector = (x, y) => [x, y];

const length = v => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
// lengthSquare

const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const inverse = (a) => [-a[0], -a[1]];
const substract = (a, b) => add(a, inverse(b));


const circle = (x, y, r) => ({
  o: vector(x, y),
  r
});

const collide = (a, b) => a.r + b.r >= length(substract(a.o, b.o));
