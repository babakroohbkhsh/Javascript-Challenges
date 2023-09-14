"use strict";
// Create a function that takes
// two numbers as arguments and returns their sum.

const sum = function (x, y) {
  return x + y;
};

console.log(sum(23, 14));

// Create a function that takes the age
//  in years and returns the age in days.

const ageToDayas = function (age) {
  return age * 365;
};

console.log(ageToDayas(65));

// Create a function that takes a number as an argument,
// increments the number by +1 and returns the result.

function addition(num) {
  return (num += 1);
  // return ++num;
}

console.log(addition(10));

// Fix the code in the code tab to pass this challenge (only syntax errors).
// Look at the examples below to get an idea of what the function should do.

// function squaed(b) {
//   return b * b;
// }

function squared(b) {
  return b * b;
  // return Math.pow(b,2);
}

console.log(squared(10));

// example :
// cosole.log(squared(5)) --> 25

// Write a function that converts hours into seconds

function howManySeconds(hours) {
  return hours * 60 * 60;
  // return hours * Math.pow(60,2);
}

console.log(howManySeconds(2));

// Create a function that takes the number of wins, draws and losses
// and calculates the number of points a football team has obtained so far.

function footballPoints(wins, draws, Losses) {
  return wins * 3 + draws * 1 + Losses * 0;
}

console.log(footballPoints(3, 2, 1));

// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions.
// The input is an expression in the form of a string.

function calculator(str) {
  return eval(str);
}
// *** The eval() function evaluates JavaScript
// code represented as a string and returns its completion value.
// The source is parsed as a script. ***

console.log(calculator("23+27"));

// Create a function that takes an integer and returns true
// if it's divisible by 100, otherwise return false.

function divisible(num) {
  num % 100 === 0 ? (num = true) : (num = false);
  return num;
}

console.log(divisible(100));
console.log(divisible(568));

//Create a function that calculates the area of a rectangle.
//  If the arguments are invalid, your function must return -1.

function area(h, w) {
  if (h > 0 && w > 0) {
    return h * w;
  } else {
    return -1;
  }
}

console.log(area(10, 25));
console.log(area(-10, 25));

// Create a function that returns how many possible arrangements can come
//  from a certain number of switches (on / off).
//  In other words, for a given number of switches,
//  how many different patterns of on and off can we have?

function posCom(num) {
  return Math.pow(2, num);
}

console.log(posCom(10));

// Create a function that calculates the chance of being an imposter.
//  The formula for the chances of being an imposter is 100 × (i / p)
//   where i is the imposter count and p is the player count.
//    Make sure to round the value to the nearest integer and return the value as a percentage.

function imposterFormula(i, p) {
  const imposter = 100 * (i / p);
  return Math.round(imposter) + "%";
}
// Math.round() ==> 5.95,5.5,5.05 ==> 6,6,5
console.log(imposterFormula(1, 8));

// A leap year happens every four years,
// so it's a year that is perfectly divisible by four.
// However, if the year is a multiple of 100 (1800, 1900, etc),
// the year must be divisible by 400.
// Write a function that determines if the year is a leap year or not.

function leapYear(year) {
  let leap;
  year % 4 === 0 ? (leap = true) : (leap = false);
  return leap;
}

console.log(leapYear(2020));
console.log(leapYear(2021));

// Here's an image of four models. Some of the cubes are hidden behind other cubes.
//  Model one consists of one cube. Model two consists of four cubes, and so on...
// Stack the Boxes Write a function that takes a number n and returns the number of
// stacked boxes in a model n levels high, visible and invisible.

function stackboxes(num) {
  return Math.pow(num, 2);
}

console.log(stackboxes(5));

// Given a Rubik's Cube with a side length of n,
// return the number of individual stickers that are needed to cover the whole cube.

const cube = (n) => {
  return Math.pow(n, 2) * 6;
};
console.log(cube(3));

// The 50-30-20 strategy is a simple way to budget,
// which involves spending 50% of after-tax income on needs,
// 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function
// that will return an object that shows how much a person needs to spend on needs, wants,
// and savings.

// const fiftyThirtyTwenty = (ati) => {
//   return `Needs: ${(ati * 50) / 100} , Wants: ${(ati * 30) / 100}, Savings: ${
//     (ati * 20) / 100
//   }.`;
// };

// console.log(fiftyThirtyTwenty(10000));
// console.log(fiftyThirtyTwenty(13450));

//One
// const fiftyThirtyTwenty = a => a = {Needs:a/2,Wants:a/.3,Savings:a/.2};

//Two
// const fiftyThirtyTwenty = (ati) => {

//   // return { Needs: ati * 0.5, Wants: ati * 0.3, Savings: ati * 0.2 };
// };
//Three
// const fiftyThirtyTwenty = (ati) => {
//   let ten = ati * 10;
//   let needs = ten * 5,
//     wants = ten * 3,
//     savings = ten * 2;
//   return { Needs: needs, Wants: wants, Savings: savings };
// };
//Four
function fiftyThirtyTwenty(ati) {
  var a = {};
  a.Needs = ati * 0.5;
  a.Wants = ati * 0.3;
  a.Savings = ati * 0.2;
  return a;
}
console.log(fiftyThirtyTwenty(13450));

// Create a function that takes a positive integer n and returns the nth "star number".
// A star number is a centered figurate number that represents a centered hexagram
// (six-pointed star), such as the one that Chinese checkers is played on.

const starNumber = (n) => {
  return 6 * n * (n - 1) + 1;
};

console.log(starNumber(3));

// Create a function that determines whether or not it's possible to
// split a pie fairly given these three parameters:

//     Total number of slices.
//     Number of recipients.
//     How many slices each person gets.

// equalSlices(11, 5, 2) ➞ true
// // 5 people x 2 slices each = 10 slices < 11 slices

// equalSlices(11, 5, 3) ➞ false
// // 5 people x 3 slices each = 15 slices > 11 slices

function equalslinces(total, people, each) {
  let personEach = people * each;
  let totalBool;
  if (total >= personEach) {
    totalBool = true;
  } else {
    totalBool = false;
  }
  return totalBool;
}

console.log(equalslinces(15, 5, 3));
console.log(equalslinces(10, 8, 2));

// Create a function that inverts the rgb values of a given tuple.

function colorInvert(rgb) {
  let rgbNew = [];
  for (let i = 0; i <= 2; i++) {
    if (rgb[i] - 255 < 0) {
      rgbNew.push((rgb[i] - 255) * -1);
    } else {
      rgbNew.push((rgb[i] - 255) * 1);
    }
    // rgb.push(Math.floor(Math.random() * 255));
  }
  return rgbNew;
}

console.log(colorInvert([32, 45, 65]));
console.log(colorInvert([255, 255, 255]));
console.log(colorInvert([0, 0, 0]));

// You are given two numbers a and b.
// Create a function that returns the next number
// greater than a and b and divisible by b.

// One
// function divisibleByB(a, b) {
//   let i = a;
//   while (i % b != 0) {
//     i++;
//   }
//   return i;
// }
// console.log(divisibleByB(17, 8));
// Two
const divisibleByB = (a, b) => b * Math.ceil(a / b);
console.log(divisibleByB(24, 7));

// Mubashir needs your help to find next integral perfect
// square after the one passed as a parameter.
// Create a function which takes a given number n and
// returns next integral perfect square number. Return
// null if the given number is not a perfect square.

function nextSquare(n) {
  let number;
  if (Number.isInteger(Math.sqrt(n))) {
    number = Math.sqrt(n);
    number += 1;
    number = Math.pow(number, 2);
  } else {
    number = null;
  }

  return number;
}

console.log(nextSquare(25));

// Given a number n, find if its 2nd, 4th and 8th roots are all integers (perfect roots),
//  return true if it exists, false if not.

// One
// function perfectRoots(n) {
//   return n > 0 && Math.sqrt(n) % 1 === 0;
// }

//Two
// function perfectRoots(n) {
//   const number = n ** 0.125 % 1 === 0;
//   return number;
// }

// Three

function perfectRoots(n) {
  let secondRoot = Math.sqrt(n);
  let fourRoot = Math.sqrt(secondRoot);
  let eightRoot = Math.sqrt(fourRoot);
  return Number.isInteger(secondRoot, fourRoot, eightRoot);
}

console.log(perfectRoots(256));

// For this challenge, you are supposed to find the sum of the digits of a two-digit number.
// Sounds easy, right? But for this challenge, I expect you to find the sum of the digits
// mathematically.Sure, you can convert the number into a string and then manipulate it so it
// returns the sum of the digits, but the point of this challenge is to see if you know how to
// return the sum of the digits of a two-digit number mathematically.

// twoDigitSum(45) -> 4 + 5 = 9

function twoDigitSum(n) {
  let sum = 0;
  // return n % 10;
  while (n) {
    sum = sum + (n % 10);
    n = n / 10;
  }
  return Math.floor(sum);
}

console.log(twoDigitSum(45));

// Create a function that takes two numbers and a mathematical
// operator and returns the result.
// function calculate(num1, num2, op) {
//   switch (op) {
//     case "+":
//       num1 += num2;
//       break;
//     case "-":
//       num1 -= num2;
//       break;
//     case "*":
//       num1 *= num2;
//       break;
//     case "/":
//       num1 /= num2;
//       break;
//     case "%":
//       num1 %= num2;
//       break;
//       defualt: console.log("your operation not valid");
//   }
//   return num1;
// }

//Two
// function calculate(num1, num2, op) {
//   return {
//     "+": num1 + num2,
//     "-": num1 - num2,
//     "*": num1 * num2,
//     "/": num1 / num2,
//     "%": num1 % num2,
//   }[op];
// }

//Three
function calculate(num1, num2, op) {
  return eval(`${num1} ${op} ${num2}`);
}
console.log(calculate(24, 25, "+"));

function justAnotherSumProblem(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(justAnotherSumProblem(-10, 1));

// Imagine a circle and two squares: a smaller and a bigger one.
// For the smaller one, the circle is a circumcircle and for the bigger one, an incircle.
// Create a function, that takes an integer (radius of the circle) and returns the difference
// of the areas of the two squares.

function squareAreasDifference(r) {
  const lengthLargSquar = r * 2;
  const areaLargeSquar = Math.pow(lengthLargSquar, 2);
  const areaSmallSquar = Math.pow(r, 2) + Math.pow(r, 2);
  return areaLargeSquar - areaSmallSquar;
}

console.log(squareAreasDifference(5));

// Create a function that takes a
//  number as an argument and returns the square root of that number cubed.

const cubeSquareRoot = (num) => num ** 1.5;

// You are given 2 out of 3 angles in a triangle, in degrees.
// Write a function that classifies the missing angle as either "acute",
// "right", or "obtuse" based on its degrees.
//     An acute angle is less than 90 degrees.
//     A right angle is exactly 90 degrees.
//     An obtuse angle is greater than 90 degrees
// (but less than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse",
// since the missing angle would be 149 degrees, which makes it obtuse.

function missingAngle(angle1, angle2) {
  const angle3 = 180 - (angle1 + angle2);
  let st;
  if (angle3 > 90) {
    st = "obtuse";
  } else if (angle3 < 90) {
    st = "acute";
  } else if (angle3 === 90) {
    st = "right";
  }
  return st;
}

// Create a function, that will for a given a, b, c, do the following:

//     Add a to itself b times.
//     Check if the result is divisible by c.
// One
// function abcmath(a, b, c) {
//   for (let i = 0; i <= b; i++) {
//     a = a + a;
//   }
//   return a % c === 0;
// }
// Two
const abcmath = (a, b, c) => (a * Math.pow(2, b)) % c === 0;

console.log(abcmath(5, 1, 2));
console.log(abcmath(1, 1, 3));

