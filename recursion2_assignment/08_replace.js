function replaceWithTarget(string, target, replace, empty, currentI) {
  if (currentI === -1) {
    return "";
  }
  
  const currentTChar = target === string[currentI] ? replace : string[currentI];
  const makeNewString = empty + currentTChar;

  return replaceWithTarget(string, target, replace, empty, currentI - 1) + makeNewString;
}

function replace(text, target, replacement) {
  return replaceWithTarget(text, target, replacement, "", text.length - 1);
}

function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function message(text, target, replace, actualOutput, expected) {
  const input1Msg = "text" + addQuote(text);
  const input2Msg = "target" + addQuote(target);
  const input3Msg = "replace" + addQuote(replace);
  const inputMessage = input1Msg + input2Msg + input3Msg;
  const actualOutputMsg = "actual" + addQuote(actualOutput);
  const expectedOutputMsg = "expected" + addQuote(expected);

  return inputMessage + actualOutputMsg + expectedOutputMsg;
}

function indcator(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function replaceWithCharTestCase(text, target, char, expected) {
  const output = replace(text, target, char);
  const getMark = indcator(output, expected);
  const completeMessage = message(text, target, char, output, expected);
  console.log(getMark + completeMessage);
}

replaceWithCharTestCase("siddhi", "i", "e", "seddhe");
replaceWithCharTestCase("ooo", "o", "e", "eee");
replaceWithCharTestCase("help needed", " ", "_", "help_needed");
replaceWithCharTestCase("call mee", "l", "t", "catt mee");
replaceWithCharTestCase(" ", " ", "p", "p");
replaceWithCharTestCase("color", "o", "u", "culur");
replaceWithCharTestCase("m", "m", "u", "u");
replaceWithCharTestCase("aaa", "a", "b", "bbb");
replaceWithCharTestCase("chear", "r", "t", "cheat");
replaceWithCharTestCase("man", "a", "e", "men");