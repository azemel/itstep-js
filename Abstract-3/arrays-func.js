console.log("Функции");

const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));


let numbers = createArray()(10);
console.log("Генерируем массив", numbers);



// 0 1 2 3 4 - indexes
// 0 2 4 6 8 - step=2
// 0 3 6 9 12 - step=3
// 6 9 12 15 18 - step=3, start=6

// 0 - 10 
// step=1 => 10 
// step=2 => 5
// step=3 => 4 0, 3, 6, 9, (12)
const range = (start, end, step = 1) => 
  createArray(index => start + index * step ) (Math.ceil((end - start) / step));

console.log("Генерируем промежуток от 1 до 10", range(1, 11));
console.log("Генерируем промежуток от 0 до -10", range(0, -11, -1));
console.log("Генерируем промежуток от 3 до 11 с шагом 2", range(3, 12, 2));



const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

const createRandomArray = (min, max) => 
  createArray(() => randomInt(min, max));

let randoms = createRandomArray(-5, 20) (10);
console.log("Генерируем массив случайных чисело от -5 до 20", randoms);



numbers = createArray(index => index + 1)(9);

// const getSum = numbers => {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// };
const getSum = numbers => 
  numbers.reduce((sum, number) => sum + number, 0);
console.log("Вычисляем сумму чисел в массиве", getSum(numbers), numbers);


const getProduct = numbers => 
  numbers.reduce((product, number) => product * number, 1);
console.log("Вычисляем произведение чисел в массиве", getProduct(numbers), numbers);


const getMin = numbers => 
  numbers.reduce((min, number) => number < min ? number : min, Infinity);
// const getMin = numbers => numbers.reduce((min, number) => Math.min(min, number), Infinity);
// const getMin = numbers => Math.min(...numbers);

console.log("Находим наименьшее число", getMin(randoms), randoms);



// 1 -1 4 2 10 8 (max  10)
// index    max           number    return
// 0        -Infinity     1         1 (number)
// 1        1             -1        1 (max)
// 2        1             4         4 (number)
// 3        4             2         4 (max)
// 4        4             10        10(number)
// 5        10            8         10(max)
// retrun 10;
const getMax = numbers => 
  numbers.reduce((max, number) => number > max ? number : max, -Infinity);

console.log("Находим наибольшее число", getMax(randoms), randoms);


////// ЗАКЛАДКА


// let numbers = [1, 3, 13, 45, 2, -1, 0];

console.log(numbers.includes(13));
console.log(numbers.includes(12));


// let indexOf13 = numbers.indexOf(13);
// numbers[indexOf13] = 100;
// console.log(numbers);

console.log(numbers.indexOf(13));
console.log(numbers.indexOf(12));


// a1 || a2 || a3 || .... || an
const includes = (array, search) => 
  array.some(item => item === search);

console.log(includes(numbers, 13));
console.log(includes(numbers, 12));


const isPositive = (n) => {
  return n > 0;
} 

// a1 && a2 && a3 && .... && an
const areAllPositive = array => 
  array.every(n => n > 0);


console.log(areAllPositive(numbers));
console.log(areAllPositive([1, 2, 4]));

const filterNegative = array => array.filter(item => item < 0);

console.log(filterNegative(numbers));
console.log(filterNegative([-1, -2, 3, -4]));

const filterNumbersEqualToIndex = array => array.filter((n, index) => n === index);

console.log(filterNumbersEqualToIndex([0, 3, 2, 4, 5, 5])) // [0, 2, 5]


const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// true && true && false && true && false = false
const areAllLeapYears = years => years.every(isLeapYear);
 
// false || true || true|| false || true || false = true
const areSomeLeapYears = years => years.some(isLeapYear);

// const map = mappingFucntion => numbers => {

//   const map = [];

//   for (let i = 0; i < numbers.length; i++) {
//     map.push(/*операция на д элементом i*/);
//   }

//   return map;
// }

const getSquares = numbers => numbers.map(n => n * n);


console.log(numbers);
console.log(getSquares([1, 2 ,3 ]));




// [1..10]



console.log(range(0, -10, -1));
console.log(range(0, -10, -1)
  .map(n => n * n)
  .map(n => n / 2)
  .map(n => Math.floor(n))
  .filter(n => n % 4 === 0)
  .map(n => "".padStart(n, "*"))
);


// const createRandomArray = (min, max, length) => {
//   // let arr = [];
//   // for (let i = 0; i < length; i++){
//   //   arr.push(randomInt(min, max));
//   // }
//   // return arr;
// };



console.log(createRandomArray(-5, 10) (20));


// const copy = array => Array.from(array);

const tmp = createRandomArray(0, 10) (10);
const copy = Array.from(tmp);

console.log(tmp);

console.log(tmp.sort());

console.log(tmp);
console.log(copy);
// console.log(tmp.reverse());


//reduce // C# Aggregate
// 0 1 2 3 4 
// (0, 0) => 0 + 0 = 0 
// (0, 1) => 0 + 1 = 1
// (1, 2) => 1 + 2 = 3
// (3, 3) => 3 + 3 = 6
// (6, 4) => 6 + 4 = 10

const map = mapingFucntion => array => 
  array.reduce((mapped, element) => {
    mapped.push(mapingFucntion(element));
    return mapped;
  }, []);

// const getSum = numbers => {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// };

console.log(getSum(range(0, 5)));
console.log(getProduct(range(1, 5)));
console.log(map(n => n * n) (range(0, 5)));

