// Рекурсию
// Деревья  // HTMl
// Events
// Date, setTimeout, setInterval, Promise???

const reverseString = (string) => {
  let reversedString = ""

  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }

  return reversedString;
}

const reverseStringRecursive = (string) => {
  if (true) { // условие остановки
    retrun // заготовленный результат
  } else {
    return reverseStringRecursive(??) // измененный параметр
  }
}



console.log(reverseString("abcd"));

// 
const fibonacci = (n) => {
  if (n === 1) {
    return 0; 
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

// fibonacci[1] // 0
// fibonacci[2] // 1

// fibonacci[3] = fibonacci[2] + fibonacci[1] // 0 + 1 = 1
// fibonacci[4] = fibonacci[3] + fibonacci[2] // 1 + 1 = 2
// //...

for (let i = 1; i < 10; i++) {
  console.log(fibonacci(i));
}