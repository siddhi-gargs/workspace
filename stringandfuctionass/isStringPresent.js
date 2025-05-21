function max(end, text) {
  
  const lastIndex = text.length - 1;
  return end > lastIndex ? lastIndex : end
  
}

function min(start) {
  return start < 0 ? 0 : start
}

function slice(text, start, end) {
  
  let slice = "";
  const endOfIndex = max(end, text);
  for (let index = min(start); index <= endOfIndex; index++) {
    slice = slice + text[index];
  }

  return slice;
}

function isSubstring(string, subString) {
  
  let isSubstringPresent = false;
  const subIndex = subString.length - 1;
  const stringLastIndex = string.length - subIndex;
  
  for (let index = 0; index < stringLastIndex; index++) {
    let indexSlice = index;
    let endindex = index + subIndex;
    console.log(indexSlice, endindex, string);
    const slices = slice(string, indexSlice, endindex);
    console.log(slices);
    if (slices === subString) {
      return true;
    }
  }
  
  return isSubstringPresent;
}

console.log(isSubstring("practical" , "mon"));


function comment(mark, string, subString , expected, actual){
  const markAndInput = mark + " string is '" + string + "' subsring is '" + subString + "' expected is '";
  const checkSegment = expected + "' actual is '" + actual + "'";
  return markAndInput + checkSegment;
}

function EqualOrMark(actual, expected) {
  const isEqual = actual === expected;
  const isCorrect = isEqual ? "✅" : "❌";
  return isCorrect;
}

function testCase(string, subString, expected) {
  const actual = isSubstring(string, subString);
  console.log(comment(EqualOrMark(actual, expected), string, subString, expected, actual));
} 

function allTestCases(){

  testCase("", "", false);
  testCase("hello", "lo", true);
  testCase("", "sgg", false);
  testCase(" ", " ", true);
  testCase('aaaa', 'a', true);
  testCase("hello", "yu", false);

}

allTestCases();


// "hello"  => "ello"
