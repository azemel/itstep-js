console.log(
  [true, 2, "10"].reduce(
    ((r, a) => r + (a + 2)), 
    false
  )
);

// (false, true) => 0 + (1 * 2); = 2
// (2, 2) => 2 + (2 * 2); = 6
// (6, "10") => 6 + (10 * 2); = 26


