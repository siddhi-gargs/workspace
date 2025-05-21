function bothShouldHaveSameChar(string, subString) {
  for (let i = 0; i < subString.length; i++) {
    const isPresent = isCharPresent(string, subString[i]);
    if (!isPresent) {
      return false;
    }
  } 
  return true; 
}

function testCases() {
  console.log(bothShouldHaveSameChar("ABCD", "DABC"));
  console.log(bothShouldHaveSameChar("ABCD", "B"));
  console.log(bothShouldHaveSameChar("ABCD", "BCAD"));
  console.log(bothShouldHaveSameChar("ABCD", ""));
  console.log(bothShouldHaveSameChar("ABCD", "DAh"));
  console.log(bothShouldHaveSameChar("ABCD", "DAh"));
  console.log(bothShouldHaveSameChar("ABCD", "DAh"));
}

function testCasesInCorrectPosition(string, comparingString, expected) {
  const actual = atCorrectPosition(string, comparingString);
  const mark = actual === expected ? "✅" : "❌";
  console.log(mark, "string", string, "comaparingString", comparingString);
}

function positionTestCases() {
  testCasesInCorrectPosition("SIT", "TWO", 0);
  testCasesInCorrectPosition("SIT", "SI", 2);
  testCasesInCorrectPosition("SIT", "S", 1);
  testCasesInCorrectPosition("SIT", "SIT", 3);
  testCasesInCorrectPosition("SIT", "I", 0);
}

function atCorrectPosition(generate, userInput) {
  let count = 0;
  for (let i = 0; i < generate.length; i++) {
    if (generate[i] === userInput[i]) {
      count++;
    }
  }
  return count;
}

function isCharPresent(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

function howManyCharPresent(string, subString) {
  let occurences = 0;
  for (let i = 0; i < subString.length; i++) {
    if (isCharPresent(string, subString[i])) {
      occurences++;
    }
  }
  return occurences;
}

function addMarkNoOfTimes(currentIndex, mark) {
  if (currentIndex === 0) {
    return "";
  }
  return mark + addMarkNoOfTimes(currentIndex - 1, mark);
}

function giveClue(random, guess) {
  const charPresent = howManyCharPresent(random, guess);
  const atRightPosition = atCorrectPosition(random, guess);
  const signForCharPresent = addMarkNoOfTimes(charPresent, "🟠");
  const signForCorrectPos = addMarkNoOfTimes(atRightPosition, "🟢");

  return signForCharPresent + signForCorrectPos;
}

console.log(giveClue("6743", "3452"));

function testCasesOfCharPresent(string, comparingString, expected) {
  const actual = howManyCharPresent(string, comparingString);
  const mark = actual === expected ? "✅" : "❌";
  console.log(mark, "actual", actual, "expected", expected);
}

function testCasesNoOfCharPresntInString() {
  testCasesOfCharPresent("1245", "6341", 2);
  testCasesOfCharPresent("9765", "5679", 4);
  testCasesOfCharPresent("23", "89", 0);
  testCasesOfCharPresent("4334", "4300", 2);
  testCasesOfCharPresent("1245", "0128", 2);
  testCasesOfCharPresent("1245", "3498", 1);
  testCasesOfCharPresent("1245", "9086", 0);
}
