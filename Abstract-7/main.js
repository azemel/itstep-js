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
// "abcd" ""
  // "abc" "d"
    // "ab" "dc"
      // "a" "dcb"
        // "" "dcba"
// const reverseStringRecursive = (string, reversedString = "") => {
//   reversedString += string[string.length - 1];
//   string = string.substring(0, string.length - 1);

//   if (string.length === 0) { 
//       return reversedString;
//   } else {
//       return reverseStringRecursive(string, reversedString);
//   }
// }


// "" => ""
// "a" =>  "a"

// r("abc") => r("bc") + "a" => r("c") + "b" + "a" => "c" + "b" + "a";

const reverseStringRecursive = string => {
  if (string.length === 1) { 
    return string;
  } else {
    return reverseStringRecursive(string.slice(1)) + string[0];
  }
}


// string => string.length <= 1 ? string : (reverseStringRecursive(string.slice(1)) + string[0])





console.log(reverseString("abcd"));
console.log(reverseStringRecursive("asdfsadf"));

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

// for (let i = 1; i < 10; i++) {
//   console.log(fibonacci(i));
// }



// [] => 0
// [10] => 10 + s([])
// s([10, 20]) => 10 + s([20]) => 10 + 20 + s([]) => 10 + 20 + 0; 
// s([1, 2, 3]) => 1 + s([2, 3]) => 1+ 2 + s([3]) => 1+ 2 + 3
const arraySumRecursive = array => {
  if (array.length === 0) { 
    return 0;
  } else {
    return array[0] + arraySumRecursive(array.slice(1));
  }
}




const ar = [1, 2, 3];
console.log(arraySumRecursive(ar));

console.log(ar);