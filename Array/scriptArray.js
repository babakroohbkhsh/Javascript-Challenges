"use strict";

const log = console.log.bind(document);

// Create a function that finds each factor of a given number n.
// Your solution should return an array of the number(s) that meet this criteria.

function findFactors(n) {
  const fact = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      fact.push(i);
    }
  }
  return fact;
}

log(findFactors(9));

// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays.
// The first array should contain only even numbers.
// The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(arr) {
  const newArr = arr.map((x) => Number(x));
  const newCombnine = [];
  newCombnine.push(
    newArr.filter((x) => x % 2 === 0),
    newArr.filter((y) => y % 2 !== 0)
  );
  return newCombnine;
}

// Second Way
// function cleanUpArray(arr) {
// 	var evens = arr.map(Number).filter(x => x % 2 == 0)
// 	var odds = arr.map(Number).filter(x => x % 2 == 1)
// 	return [evens, odds]
// }

log(cleanUpArray(["7", "4", "8"]));

// Given an array of numbers, remove the largest and smallest numbers,
// and calculate the average of the remaining numbers.

function trimmedAverages(arr) {
  let sorted = arr.sort((a, b) => a - b);
  sorted.pop();
  sorted.shift();
  return Math.round(sorted.reduce((a, b) => a + b) / sorted.length);
}

log(trimmedAverages([4, 5, 7, 100]));
