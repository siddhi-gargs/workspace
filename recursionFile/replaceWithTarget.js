function addQuote(inputToString) {
  return " \"" + inputToString + "\" ";
}

function extraArgOfReplaceTarget(string, text, replace, empty, endIndex) {

  if (endIndex === -1) {
    return "";
  }

  const currentTChar = text === string[endIndex] ? replace : string[endIndex];
  const makeNewString = empty + currentTChar;


  return extraArgOfReplaceTarget(string, text, replace, empty, endIndex - 1) + makeNewString;
}

function replaceWithTarget(a, b, c) {

  return extraArgOfReplaceTarget(a, b , c, "", a.length - 1);
}

function replaceWithCharTestCase(string, char, replace, expected) {
  const actualOutput = replaceWithTarget(string, char, replace);
  const status = actualOutput === expected ? "✅" : "❌";
  const message = "string" + addQuote(string) + "char" + addQuote(char);
  console.log(status + message + "replace" + addQuote(replace) + " actual " + actualOutput);
}


replaceWithCharTestCase("siddhi", "i", "e", "seddhe");
replaceWithCharTestCase("ooo", "o", "e", "eee");
replaceWithCharTestCase("help needed", " ", "_", "help_needed");
replaceWithCharTestCase("call mee", "l", "t", "catt mee");
replaceWithCharTestCase(" ", " ", "p", "p");
replaceWithCharTestCase("color", "o", "u", "culur");


