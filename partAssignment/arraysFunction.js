// You are given an array of strings. Write a function to return a single string that is the concatenation of the last character of every string in the array.

const example = ["abc","def","ghi"];
const lastElementConcat = function(init, element) {
  return init += element.at(-1); 
}

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(lastElementConcat, "");
}

const isPositive = function(element) {
  return element === Math.abs(element);
}

const predicate = function(element) {
  return element.some(isPositive);
}

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(predicate);
}

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in the array. 0 is not positive.

const product = function(init, element) {
  return init * element;
}

const productOfPositives = function (numbers) {
  const positives = numbers.filter(function(element) { return element > 0});
  return positives.reduce(product, 1);
}

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e". 

const elementContainE = function(element){
  const array = element.split("");
  return array.some(function(element) { return element === "e"});
}

const longest = function(init, element) {
  return init.length > element.length ? init : element;
}

const longestEWord = function (strings) {
  const containNeededChar = strings.filter(elementContainE);
  return containNeededChar.reduce(longest, "");
}

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers. Return `true` if they do, and `false` otherwise.

const isEachEven = function(array) {
  return array.every(function(element) { return (element & 1) === 0;})
}

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(isEachEven);
}

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// Write a function to calculate the sum of the squares of all the odd numbers in the array

const addSquare = function(init, element) {
  return init + (element * element);
}

const sumOfSquaresOfOdds = function (numbers) {
  const odds = numbers.filter(function(element) { return (element & 1) === 1});
  return odds.reduce(addSquare, 0);
}

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length. Return `true` if they do, and `false` otherwise. 


const areAllOfSameLength = function (listOfStrings) {
  const lengthElement1 = listOfStrings[0].length;
  return listOfStrings.every(function(element) {
    return element.length === lengthElement1;});
}

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed. 

const subSet = function(init, element){
  if (!init.includes(element)) {
    init.push(element);
  }

  return init;
}

const removeDuplicates = function (numbers) {
  return numbers.reduce(subSet, []);
}

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a vowel. Return `true` if they do, and `false` otherwise.  

const isVowelOrNot = function(element) {
  return "aeiou".includes(element);
}

const allStartWithAVowel = function (words) {
  const mapFirstChar = words.map(function(element) { return element[0]; });
  return mapFirstChar.every(isVowelOrNot);
}

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements up to that index.

const add = function(init, element) {
  const newElement = init.at(-1) + element;
  init.push(newElement);
  return init;
}

const runningTotal = function (numbers) {
  const array = numbers.reduce(add, [0]); 
  array.shift();
  return array;
}

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list. 

const twoElementsPair = function(init, element) {
  if (init.at(-1).length === 2) {
    init.push([]);
  }
  init.at(-1).push(element);
  return init;
}

const pairs = function (list) {
  return list.reduce(twoElementsPair, [[]]);
}

const patternTestCase = function(failedCases, func, expected, ...inputs) {
  const actualOutput = func(inputs);

  if (expected !== actualOutput) {
    failedCases.push(inputs, expected, actualOutput);
  }
}

const allTestCase = function() {
  const failedCase = [];
  testAllLastChar(failedCase);
  testLongestE(failedCase);
  testAllListEven(failedCase);
  testSumOfOdds(failedCase);
  testAreAllStringEqual(failedCase);
  // testRemoveDuplicates(failedCase);
  testAllStartWIthVowel(failedCase);
  addUpto(failedCase);

  console.table(failedCase);
}

const testAllLastChar = function(failedCase) {
  patternTestCase(failedCase, allLastChars, "cbc",  "bc", "ab", "dc");
  patternTestCase(failedCase, allLastChars, "ab", "a", "b");
  patternTestCase(failedCase, allLastChars, "cfi", "abc","def","ghi");
  patternTestCase(failedCase, allLastChars, "cfit", "abc","def","ghi", "ofpt");
}

const testLongestE = function(failedCase) {
  patternTestCase(failedCase, longestEWord, "eee", "e", "ee", "eee");
  patternTestCase(failedCase, longestEWord, "ee", "e", "ee", "nough");
  patternTestCase(failedCase, longestEWord, "enough", "e", "ee", "enough");
  patternTestCase(failedCase, longestEWord, "adfe", "e", "ee", "adfe");
}

const testAllListEven = function(failedCase) {
  patternTestCase(failedCase, areAllListsEven, true, [2, 4], [6, 6]);
  patternTestCase(failedCase, areAllListsEven, false, [2, 4], [6, 1]);
  patternTestCase(failedCase, areAllListsEven, true, [2, 4], [6, 4]);
  patternTestCase(failedCase, areAllListsEven, true, [2, 4], [6, 4], [2, 12]);
  patternTestCase(failedCase, areAllListsEven, false, [2, 4], [6, 4], [2, 1]);
}

const testSumOfOdds = function(failedCase) {
  patternTestCase(failedCase, sumOfSquaresOfOdds, 1, 1, 2, 4);
  patternTestCase(failedCase, sumOfSquaresOfOdds, 9, 18, 2, 4, 3);
  patternTestCase(failedCase, sumOfSquaresOfOdds, 1, 1, 2, 4, 8);
  patternTestCase(failedCase, sumOfSquaresOfOdds, 10, 10, 3, 1, 8, 4);
  patternTestCase(failedCase, sumOfSquaresOfOdds, 10, 10, 3, 1, 8, 4, 10);
  patternTestCase(failedCase, sumOfSquaresOfOdds, 35, 10, 3, 1, 8, 4, 5);
}

const testAreAllStringEqual = function(failedCase) {
  patternTestCase(failedCase, areAllOfSameLength, false, "e", "eu");
  patternTestCase(failedCase, areAllOfSameLength, true, "eu", "eu", "uy");
  patternTestCase(failedCase, areAllOfSameLength, false, "eu", "eu", "uyt");
  patternTestCase(failedCase, areAllOfSameLength, true, "eu", "eu", "uy", "ty");
  patternTestCase(failedCase, areAllOfSameLength, true, "euy", "euy", "uyu");
}

const testRemoveDuplicates = function(failedCase) {
  patternTestCase(failedCase, removeDuplicates, [1], 1, 1);
  patternTestCase(failedCase, removeDuplicates, [1, 2], 1, 2, 2);
  patternTestCase(failedCase, removeDuplicates, [1, 2], 1, 2, 2, 1, 2);
  patternTestCase(failedCase, removeDuplicates, [1, 2, 3], 1, 2, 2, 3);
  patternTestCase(failedCase, removeDuplicates, [1, 2, 3], 1, 2, 2, 3, 3);
  patternTestCase(failedCase, removeDuplicates, [1, 2, 3], 1, 2, 2, 3, 3, 3);
}

const testAllStartWIthVowel = function(failedCase) {
  patternTestCase(failedCase, allStartWithAVowel, true, "a", "e");
  patternTestCase(failedCase, allStartWithAVowel, false, "ca", "ee");
  patternTestCase(failedCase, allStartWithAVowel, false, "ca", "ef");
  patternTestCase(failedCase, allStartWithAVowel, true, "ia", "oe");
  patternTestCase(failedCase, allStartWithAVowel, false, "ta", "e");
  patternTestCase(failedCase, allStartWithAVowel, true, "ant", "eye", "id");

}

const addUpto = function(failedCase) {
  patternTestCase(failedCase, runningTotal, [1, 2, 3], 1, 1, 1);
  patternTestCase(failedCase, runningTotal, [1, 3, 6, 10], 1, 2, 3, 4);
}

allTestCase();