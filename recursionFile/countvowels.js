function addQuote(inputToString) {
  return "\" " + inputToString + " \"";
}

function isVowelPresentInString (char, vowels, currentIndex) {
  if (vowels[currentIndex] === char) {
    return 1;
  }

  if (currentIndex === 0) {
    return 0;
  }

  return isVowelPresentInString(char, vowels, currentIndex - 1);
}

function countVowels(string, vowels, count, endIndex) {

  const isneedToincrese = isVowelPresentInString(string[endIndex], vowels, vowels.length - 1);

  if (endIndex === 0){
    return count + isneedToincrese;
  }
  
  return countVowels(string, vowels, count + isneedToincrese, endIndex - 1);
}

function extraArgumentForCountVowels(string){

  return countVowels(string, "aeiouAEIOU", 0, string.length - 1);
}

function testCaseCountVowel(string, expected) {
  const actualOutput = extraArgumentForCountVowels(string);
  const status = actualOutput === expected ? "✅" : "❌";
  const message = "string" + addQuote(string) + "expected" + addQuote(expected);
  console.log(status + message + "actual" + addQuote(actualOutput));
}

const string = prompt("enter string :");

console.log(extraArgumentForCountVowels(string));
extraArgumentForCountVowels(string);
extraArgumentForCountVowels(string);
extraArgumentForCountVowels(string);



function allTestCase() {
  testCaseCountVowel("dilate", 3);
  testCaseCountVowel("anticipation", 6);
  testCaseCountVowel("infatuation", 6);
  testCaseCountVowel("commotion", 4);
  testCaseCountVowel("sernity", 2);
  testCaseCountVowel("wheeing", 3);
  testCaseCountVowel("dozzed off", 3);
}