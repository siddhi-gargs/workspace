function maximum(first, second) {
  return first > second ? first : second;
}

function minimum(first, second) {
  return first < second ? first : second;
}

function findSlice(string, startIndex, endIndex) {
  if (startIndex === endIndex) {
    return string[startIndex];
  }
  
  return string[startIndex] + findSlice(string, startIndex + 1, endIndex);
}

function passValidIndex(string, index, endIndex) {
  
  return findSlice(string, maximum(index, 0), minimum(string.length - 1, endIndex));
}

function addQuote(inputToString) {
  return "\" " + inputToString + " \"";
}

function hcfTestcase(string, startIndex, endIndex, expected) {
  const actualOutput = passValidIndex(string, startIndex, endIndex);
  const status = actualOutput === expected ? "✅" : "❌";
  const message = "string" + addQuote(string) + "indexStart" + addQuote(startIndex);
  console.log(status + message + "end" + addQuote(endIndex) + " actual " + actualOutput);
}


sliceTestCase("siddhi", 2, 3, "dd");
sliceTestCase("ooo", -10, 2, "ooo");
sliceTestCase("help needed", 0, 7, "help nee");
sliceTestCase("call mee", 4, 19, " mee");
sliceTestCase("may be it will work properly", -18, 4, "may b");
sliceTestCase("color", -6, 10, "color");