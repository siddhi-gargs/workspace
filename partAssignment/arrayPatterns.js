const ALLSTYLES = ["filled-rectangle", "hollow-rectangle", 
  "alternating-rectangle", "spaced-alternating-rectangle", 
  "triangle", "right-aligned-triangle"
];
const STAR = "*";
const HYPHEN = "-";
const SPACE = " ";
const starHyphenSpace = [STAR, HYPHEN, SPACE];



function series(from, to, steps) {
  const patternSeries = [];
  for (let i = from; i < to; i += steps) {
    patternSeries.push(i);
  }
  
  return patternSeries;
}

function unfilledLine(dot, times) {
  const noOfSpace = times - 2;
  return dot + SPACE.repeat(noOfSpace) + dot;
}

function iterate(times, sign) {
  return sign.repeat(times);
}

function alternatePattern(dimension, array) {
  const alternatePattern = [];
  const [column, row] = [dimension[0], dimension[1]];

  for (const i of series(0, row, 1)) {
    const mark = array[i % array.length];
    alternatePattern.push(iterate(column, mark));
  }
  
  return alternatePattern;
}

function hollowRectangle(dimension, markArray) {
  const unfilledRectangle = [];
  const [column, row, mark] = [dimension[0], dimension[1], markArray[0]];

  if (row <= 2) {
    return filledRectangle(dimension, markArray);
  }
  
  for (const i of series(0, row - 2, 1)) {
    unfilledRectangle.push(unfilledLine(mark, column));
  }
  
  unfilledRectangle.unshift(iterate(column, mark));
  unfilledRectangle.push(iterate(column, mark));
  
  return unfilledRectangle;
}

function filledRectangle(dimension, markArray) {
  const packedRectangle = [];
  const [column, row, mark] = [dimension[0], dimension[1], markArray[0]];
  
  for (const i of series(0, row, 1)) {
    packedRectangle.push(iterate(column, mark));
  }
  
  return packedRectangle;
}

function concatCorrespondRow(array1, array2) {
  const concatedArray = [];
  
  for (const i in series(0 , array1.length, 1)) {
    concatedArray.push(array1[i] + SPACE.concat(array2[i]));
  }
  
  return concatedArray.join("\n");
}

const getPattern = function(index, dimension) {
  switch (index) {
    case 0: return filledRectangle(dimension, [STAR]);
    case 1: return hollowRectangle(dimension, [STAR]);
    case 2: return alternatePattern(dimension, [STAR, HYPHEN]);
    case 3: return alternatePattern(dimension, [STAR, HYPHEN, SPACE]);
  }
}

function isDimensionValid(dimension) {
  return dimension[0] > 0 && dimension[1] > 0;
}

const indexOfStyle = function(style) {
  for (const i of series(0, ALLSTYLES.length, 1)) {
    if (style === ALLSTYLES[i]) {
      return i;
    } 
  }

  return "";
}

function generatePattern(style, dimension, secondStyle) {
  if (!isDimensionValid(dimension)) {
    return "";
  }

  return getPattern(indexOfStyle(style), dimension).join("\n");f
}

function allTestWorkingMsg(failed) {
  if (failed.length === 0) {
    console.log("congrats bro..😎");
  }
  console.table(failed);
}

function testAll() {
  const failed = [];
  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testCombineRect(failed);
  testAlternateRectangle(failed);
  testSpaceAlternate(failed);
  testHollowPattern(failed);

  // testTriangle(failed);
  // testRightTraingle(failed);
  

  allTestWorkingMsg(failed);
}

function testGeneratePattern(style, dimensions, secondStyle, expected, failed) {
  const actual = generatePattern(style, dimensions, secondStyle);
  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }
}

const testHollowPattern = function(mark, times, expected, failed) {
  const actual = unfilledLine(mark, times);
  if (actual !== expected) {
    failed.push(actual, expected);
  }
}

const test = function() {
  const failed = [];

  testHollowPattern("*", 3, "* *", failed);
  testHollowPattern("*", 4, "*  *", failed);
  console.table(failed);
}

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [0, 0], "", '', failed);
  testGeneratePattern('filled-rectangle', [1, 0], "", '', failed);
  testGeneratePattern('filled-rectangle', [0, 1], "", '', failed);
  testGeneratePattern('filled-rectangle', [1, 1], "", '*', failed);
  testGeneratePattern('filled-rectangle', [2, 1], "", '**', failed);
  testGeneratePattern('filled-rectangle', [3, 1], "", '***', failed);
  testGeneratePattern('filled-rectangle', [4, 1], "", '****', failed);
  testGeneratePattern('filled-rectangle', [1, 2], "", '*\n*', failed);
  testGeneratePattern('filled-rectangle', [2, 2], "", '**\n**', failed);
  testGeneratePattern('filled-rectangle', [2, 3], "", '**\n**\n**', failed);
  testGeneratePattern('filled-rectangle', [3, 3], "", '***\n***\n***', failed);
  testGeneratePattern('filled-rectangle', [5, 3], "", '*****\n*****\n*****', failed);
  testGeneratePattern('filled-rectangle', [4, 4], "", '****\n****\n****\n****', failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern("hollow-rectangle", [0, 0], "", '', failed);
  testGeneratePattern("hollow-rectangle", [1, 0], "", '', failed);
  testGeneratePattern("hollow-rectangle", [0, 1], "", '', failed);
  testGeneratePattern("hollow-rectangle", [2, 2], "", '**\n**', failed);
  testGeneratePattern("hollow-rectangle", [2, 1], "", '**', failed);
  testGeneratePattern("hollow-rectangle", [3, 1], "", '***', failed);
  testGeneratePattern("hollow-rectangle", [3, 3], "", '***\n* *\n***', failed);
  testGeneratePattern("hollow-rectangle", [3, 4], "", '***\n* *\n* *\n***', failed);
  testGeneratePattern("hollow-rectangle", [4, 3], "", '****\n*  *\n****', failed);
  testGeneratePattern("hollow-rectangle", [5, 3], "", '*****\n*   *\n*****', failed);
  testGeneratePattern("hollow-rectangle", [3, 5], "", '***\n* *\n* *\n* *\n***', failed);
  testGeneratePattern("hollow-rectangle", [3, 6], "", '***\n* *\n* *\n* *\n* *\n***', failed);
  testGeneratePattern("hollow-rectangle", [6, 3], "", '******\n*    *\n******', failed);
}

function testAlternateRectangle(failed) {
  testGeneratePattern("alternating-rectangle", [0, 1], "", "", failed);
  testGeneratePattern("alternating-rectangle", [1, 0], "", "", failed);
  testGeneratePattern("alternating-rectangle", [2, 2], "", "**\n--", failed);
  testGeneratePattern("alternating-rectangle", [3, 3], "", "***\n---\n***", failed);
  testGeneratePattern("alternating-rectangle", [2, 3], "", "**\n--\n**", failed);
  testGeneratePattern("alternating-rectangle", [4, 4], "", "****\n----\n****\n----", failed);
}

function testSpaceAlternate(failed) {
  testGeneratePattern("spaced-alternating-rectangle", [2, 1], "", "**", failed);
  testGeneratePattern("spaced-alternating-rectangle", [2, 2], "", "**\n--", failed);
  testGeneratePattern("spaced-alternating-rectangle", [3, 3], "", "***\n---\n   ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [2, 3], "", "**\n--\n  ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 3], "", "****\n----\n    ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 4], "", "****\n----\n    \n****", failed);
  testGeneratePattern("spaced-alternating-rectangle", [5, 4], "", "*****\n-----\n     \n*****", failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 5], "", "****\n----\n    \n****\n----", failed);

}
function testTriangle(failed) {
  testGeneratePattern("triangle", [3], "", "*\n**\n***", failed);
  testGeneratePattern("triangle", [2], "", "*\n**", failed);
  testGeneratePattern("triangle", [1], "", "*", failed);
  testGeneratePattern("triangle", [4], "", "*\n**\n***\n****", failed);
  testGeneratePattern("triangle", [5], "", "*\n**\n***\n****\n*****", failed);
  testGeneratePattern("triangle", [6], "", "*\n**\n***\n****\n*****\n******", failed);
  testGeneratePattern("triangle", [7], "", "*\n**\n***\n****\n*****\n******\n*******", failed);
}


function testRightTraingle(failed) {
  testGeneratePattern("right-aligned-triangle", [1], "", "*", failed);
  testGeneratePattern("right-aligned-triangle", [2], "", " *\n**", failed);
  testGeneratePattern("right-aligned-triangle", [3], "", "  *\n **\n***", failed);
  testGeneratePattern("right-aligned-triangle", [4], "", "   *\n  **\n ***\n****", failed);
  testGeneratePattern("right-aligned-triangle", [5], "", "    *\n   **\n  ***\n ****\n*****", failed);

}

function testCombineRect(failed) {
  testGeneratePattern('filled-rectangle', [4, 3], "hollow-rectangle", "**** ****\n**** *  *\n**** ****", failed);
  testGeneratePattern("hollow-rectangle", [4, 3], 'filled-rectangle', "**** ****\n*  * ****\n**** ****", failed);
}

function testCombineAlternateRect(failed) {
  testGeneratePattern("alternating-rectangle", [4, 4], "spaced-alternating-rectangle", "**** ****\n---- ----\n****     \n---- ****", failed);

  testGeneratePattern("spaced-alternating-rectangle", [4, 4], "alternating-rectangle", "**** ****\n---- ----\n     ****\n**** ----", failed);
}


testAll();