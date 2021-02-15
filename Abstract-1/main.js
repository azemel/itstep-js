

let balance = 0;
console.log("Ваш баланс: " + balance + "тг.");

if (balance > 0) {
  console.log("Все ок");
} else if (balance === 0) {
  console.log("Пусто");
} else {
  console.log("У вас должок");
}

balance += 500; // balance = balance + 500;
console.log("Ваш баланс: " + balance + "тг.");


if (balance > 0) {
  console.log("Все ок");
} else if (balance === 0) {
  console.log("Пусто");
} else {
  console.log("У вас должок");
}

balance -= 1000; // balance = balance - 1000;
console.log("Ваш баланс: " + balance + "тг.");


if (balance > 0) {
  console.log("Все ок");
} else if (balance === 0) {
  console.log("Пусто");
} else {
  console.log("У вас должок");
}

let a = "c";

if (true) {
  a = "a";
  console.log(a);
}

if (true) {
  let a = "b";
  console.log(a);
}

console.log(a);


