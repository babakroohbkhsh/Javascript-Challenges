"use strict";

// In this challenge, a farmer is asking you to tell him how many
// legs can be counted among all his animals. The farmer breeds three species:
//     chickens = 2 legs
//     cows = 4 legs
//     pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species.
// You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

console.log(animals(4, 5, 6));

// Create a function that returns the number of frames shown in
// a given number of minutes for a certain FPS.

function frames(minutes, fps) {
  return minutes * 60 * fps;
}

console.log(frames(5, 6));

// Create a function that takes two arguments.
// Both arguments are integers, a and b.
// Return true if one of them is 10 or if their sum is 10.

function makesTen(a, b) {
  return a + b == 10 || a === 10 || b === 10;
}

console.log(makesTen(2, 8));

// Write a function that checks whether a person can watch an MA15+ rated movie.
// One of the following two conditions is required for admittance:
//     The person is at least 15 years old.
//     They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptIntoMovie(age, isSupervised) {
  return age >= 15 || isSupervised;
}

console.log(acceptIntoMovie(13, true));

// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.

// Return the number of people there will be when the spaceship is complete.

function futurePeople(population, n) {
  return 3 * 10 * 12 * n + population;
}

console.log(futurePeople(1400, 2));

// Write a function that accepts base (decimal), height (decimal)
// and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

function areaShape(base, height, shape) {
  let area;
  if (shape === "parallelogram") {
    area = base * height;
  } else if (shape === "triangle") {
    area = 0.5 * base * height;
  }
  return area;
}
console.log(areaShape(2, 6, "triangle"));
console.log(areaShape(3, 8, "parallelogram"));

// A typical car can hold four passengers and one driver, allowing five people to travel around.
// Given n number of people, return how many cars are needed to seat everyone comfortably.

// function carsNeeded(n) {
//   let car;
//   if (n % 5 === 0) {
//     car = Math.floor(n / 5);
//   } else {
//     car = Math.floor(n / 5) + 1;
//   }
//   return car;
// }

function carsNeeded(n) {
  let car;
  n % 5 === 0 ? (car = Math.floor(n / 5)) : (car = Math.floor(n / 5) + 1);
  return car;
}

console.log(carsNeeded(111));

// Create a function that takes an array and returns
//  the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
  let typeIndex = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    typeIndex[i] = typeof arr[i];
  }
  return typeIndex;
}

console.log(arrayValuesTypes([1, 2, "null", []]));

// Write a function that stutters a word as if someone is struggling to read it.
// The first two letters are repeated twice with an ellipsis ... and space after each,
// and then the word is pronounced with a question mark ?.

function stutter(word) {
  const letter =
    word.slice(0, 2) + "... " + word.slice(0, 2) + "... " + word + "?";
  return letter;
}

console.log(stutter("incredible"));

// Create a function that returns the ASCII value of the passed in character.

function ctoa(c) {
  return c.charCodeAt();
}

console.log(ctoa("$"));

// Create a function that takes two numbers and returns their sum as a binary string.

function addBinary(a, b) {
  const sum = a + b;
  if (sum >= 0) {
    return sum.toString(2);
  } else {
    return (~sum).toString(2);
  }
}

console.log(addBinary(2, 3));

const countDs = (s) => s.match(/D/gi).length;
console.log(countDs("my friend Dylan got distracted in school."));

// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function
// that takes n cups bought and return as an integer the total number of cups I would get.

function totalCups(n) {
  return Math.floor(n + n / 6);
}

console.log(totalCups(7));

// You hired three programmers and you (hopefully) pay them.
// Create a function that takes three numbers (the hourly wages of each programmer)
// and returns the difference between the highest-paid programmer and the lowest-paid.

function programmers(one, two, three) {
  return Math.max(one, two, three) - Math.min(one, two, three);
}

console.log(programmers(25, 1480, 465));

// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

function evenOrOdd(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  if (sum % 2 === 0 || sum === 0) {
    return "even";
  } else if (sum === null) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOrOdd(2, 6, 7, 11, 3));

// Given the side length x find the area of a hexagon.

function areaOfHexagon(x) {
  if (x <= 0) {
    return null;
  }
  let area = (3 * (Math.sqrt(3) * Math.pow(x, 2))) / 2;
  let areaO = Number.parseFloat(area).toFixed(1);
  return eval(areaO);
}

// Create a function that takes a positive integer n,
//  and returns the sum of all the cubed values from 1 to n.

// For example, if n is 3:

function sumCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}

console.log(sumCubes(4));

// Create a function that takes a number n
// and returns the first 10 multiples of n with 1 added to it, separated by commas.

function nTablesPlusOne(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(n * i + 1);
  }
  return table.toString();
}

console.log(nTablesPlusOne(7));

// Create a function that takes two arguments:
// a father's current age fAge and his son's current age sAge.
// Сalculate how many years ago the father was twice as old as his son,
// or in how many years he will be twice as old.

function ageDifference(fAge, sAge) {
  const diff = fAge - sAge;
  const twiceAge = diff - sAge;
  return Math.abs(twiceAge);
}

console.log(ageDifference(54, 31));

// Create a function that takes two arguments of an array of numbers arr and a
// constant number n and returns the n largest numbers from the given array.

function largestNumbers(n, arr) {
  function compareNumbers(a, b) {
    return a - b;
  }
  arr.sort(compareNumbers);
  console.log(arr);
  // return arr.slice(0, n); minmum numbers
  // return arr.slice(arr.length - n, arr.length);
  return arr.slice(arr.length - n);
}
// ***
// function largestNumbers(n, arr) {
//   return arr.sort((a, b) => a - b).slice(arr.length - n);
// }
console.log(largestNumbers(2, [1, 30, 4, 21, 100000]));

// Write a function that takes a year and returns its corresponding century.

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(1752));

function multiplyByLength(arr) {
  return arr.map((x) => x * arr.length);
}

console.log(multiplyByLength([1, 5, 4, 8, 6, 7, 9, 10]));

// convert percentages to decimal
// var percent = "50%";
// var result = parseFloat(percent) / 100.0;

// Create a function that applies a discount d to every number in the array.

function getDiscounts(nums, d) {
  return nums.map((x) => x * (parseFloat(d) / 100.0));
}

console.log(getDiscounts([20, 10, 36, 69], "65%"));

// Sam and Frodo need to be close. If they are side by side in the array,
// your function should return true. If there is a name between them, return false.

function middleEarth(arr) {
  if (
    arr.indexOf("Sam") + 1 === arr.indexOf("Frodo") ||
    arr.indexOf("Frodo") + 1 === arr.indexOf("Sam")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(middleEarth(["Orc", "Frodo", "Legolas", "Sam", "Bilbo"]));
console.log(middleEarth(["Aragorn", "Gandalf", "Sam", "Frodo", "Gollum"]));

// Given an integer n. Your task is to find how many digits
// this integer contains without using String or Array methods!

const sumDigits = (n) => Math.ceil(Math.log10(n + 1) || 1);
