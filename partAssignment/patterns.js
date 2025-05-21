const STAR = "*";
const HYPHEN = "-";
const SPACE = " ";

function rectangle(dimensions) {
  let rowPattern = "";
  for (let column = 1; column <= dimensions[0]; column++) {
    rowPattern += STAR; 
  }

  return rowPattern;
}

function hollow(row, dimensions) {
  let rowPattern = "";
  for (let column = 1; column <= dimensions[0]; column++) {
    if (row === 1 || row === dimensions[1]) {
      rowPattern += STAR;
    } else {
      const startOrEnd = column === 1 || column === dimensions[0];
      rowPattern += startOrEnd ? STAR : SPACE;
    }
  }
  return rowPattern;
}

function triangle(row, dimension, mark) {
  let rowPattern = "";
  for (let column = 1; column < row + 1; column++) {
    rowPattern += STAR;
  }
  
  return rowPattern.padStart(dimension[0], mark);
}

function alternateSpace(row, dimension, mark, number) {
  const sign = mark[row % number];
  let rowPattern = "";
  for (let column = 1; column <= dimension[0]; column++) {
    rowPattern += sign;
  }

  return rowPattern;
}

function closestOdd(number) {
  return number % 2 === 1 ? number : number - 1;
}

function moreThanHalf(number) {
  return Math.ceil(number / 2);
}

function inRange(range, i) {
  return (i <= range[1] && i >= range[0]) || (i <= range[0] && i >= range[1]);
}

function makeDiamondRow(parameterArray) {
  const range = parameterArray[0];
  const rangeFun = parameterArray[2];
  let rowPattern = "";
  for (let i = 1; i <= parameterArray[1]; i++) {
    rowPattern += rangeFun(range, i) ? STAR : SPACE;
  }

  return rowPattern;
}

function startOrEnd(range, column) {
  return (range[0] === column || range[1] === column) ;
}

function shuffleRange(range) {
  const temp = range[0];
  range[0] = range[1];
  range[1] = temp;
}

function updateRange(range) {
  range[0] = range[0] - 1;
  range[1] = range[1] + 1;
}

function diamonds(style, dimensions, isPair) {
  let pattern = "";
  const size = closestOdd(dimensions[0]);
  const midPoint = moreThanHalf(size);
  const range = [midPoint, midPoint];
  for (let row = 1; row <= size; row++) {
    const column =  Math.max(range[0], range[1]);
    const parameterAccStyle = style === "diamond" ? [range, size, inRange] :
    [range, column, startOrEnd]; 
    let rowPattern = ""
    if (isPair) {
      rowPattern = makeDiamondRow([range, size, inRange]) + " " + makeDiamondRow([range, column, startOrEnd]);
    } else {
      rowPattern = makeDiamondRow(parameterAccStyle);
    }

    updateRange(range);
    if (range[0] === 1 && range[1] === size) {
      shuffleRange(range);
    } 

    if (row === size) {
      return pattern + rowPattern;
    }
    pattern += rowPattern + "\n";
  }

  return pattern;
}

function rectangleStyle(style, second, dimensions, row) {

  const filled = rectangle(dimensions);
  const hollow = hollow(row, dimensions);
  if (style === "filled-rectangle" && second === "hollow-rectangle") {
    return filled + " " + hollow;
  } else if (second === "filled-rectangle" && style === "hollow-rectangle") {
    return 
  }
}

function isAlternateRectanglePair (style, secondStyle) {
  const alternatePair1 = style === "alternating-rectangle" && secondStyle === 'spaced-alternating-rectangle';
  const alternatePair2 = secondStyle === "alternating-rectangle" && style === 'spaced-alternating-rectangle';
  return alternatePair1 || alternatePair2;
}

function isTrianglePair(style, secondStyle) {
  const trianglePair1 = style === "triangle" && secondStyle === "right-aligned-triangle";
  const trianglePair2 = secondStyle === "triangle" && style === "right-aligned-triangle";

  return trianglePair1 || trianglePair2;
}

function isDiamondPair(style, secondStyle) {
  const diamondPair1 = style === "diamond" && secondStyle === "hollow-diamond";
  const diamondPair2 = secondStyle === "diamond" && style === "hollow-diamond";

  return diamondPair1 || diamondPair2;
}

function generatePattern(style, dimensions, secondStyle) {
  let rowPattern = "";
  let pattern = "";
  const decideRow = style === "triangle" || style === "right-aligned-triangle";

  const rectanglePair = isRectanglePair(style, secondStyle);
  const trianglePair = isTrianglePair(style, secondStyle);
  const alternateRect = isAlternateRectanglePair(style, secondStyle);
  const diamondPair = isDiamondPair(style, secondStyle);

  if (style === "diamond" || style === "hollow-diamond") {
    return diamonds(style, dimensions, diamondPair);
  }

  const rowLimit = decideRow ? dimensions[0] : dimensions[1];
  for (let row = 1; row <= rowLimit; row++) {
    // if (rectanglePair) {
    //   pattern = rectangle(dimensions) + " " + hollow(row, dimensions);
    // } else if (trianglePair) {
    //   const withPaded = triangle(row, dimensions, "").padEnd(dimensions[0], " ");
    //   pattern = withPaded + " " + triangle(row, dimensions, SPACE); 
    // } else if (alternateRect) {
    //   pattern = alternateSpace(row, dimensions, [HYPHEN, STAR], 2) + " " +  alternateSpace(row, dimensions, [SPACE, STAR, HYPHEN], 3);
    // } else if (style === 'filled-rectangle') {
    //   pattern = rectangle(dimensions);
    // } else if (style === "hollow-rectangle") {
    //   pattern = hollow(row, dimensions);
    // } else if (style === "alternating-rectangle") {
    //   pattern = alternateSpace(row, dimensions, [HYPHEN, STAR], 2);
    // } else if (style === "triangle") {
    //   pattern = triangle(row, dimensions, "");
    // } else if (style === "right-aligned-triangle") {
    //   pattern = triangle(row, dimensions, SPACE);
    // } else if (style === "spaced-alternating-rectangle") {
    //   pattern = alternateSpace(row, dimensions, [SPACE, STAR, HYPHEN], 3);
    // };
    if (style === 'filled-rectangle' || style === "hollow-rectangle") {
      pattern = rectangleStyle(style, secondStyle, dimensions, row);
    }


    if (row === rowLimit) {
      return rowPattern + pattern;
    }
    
    rowPattern += pattern + "\n";
  }

  return rowPattern;
}

function testGeneratePattern(style, dimensions, secondStyle, expected, failed) {
  const actual = generatePattern(style, dimensions, secondStyle);
  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }

}

function testAll() {
  const failed = [];
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

  testGeneratePattern("alternating-rectangle", [0, 1], "", "", failed);
  testGeneratePattern("alternating-rectangle", [1, 0], "", "", failed);
  testGeneratePattern("alternating-rectangle", [2, 2], "", "**\n--", failed);
  testGeneratePattern("alternating-rectangle", [3, 3], "", "***\n---\n***", failed);
  testGeneratePattern("alternating-rectangle", [2, 3], "", "**\n--\n**", failed);
  testGeneratePattern("alternating-rectangle", [4, 4], "", "****\n----\n****\n----", failed);

  testGeneratePattern("triangle", [3], "", "*\n**\n***", failed);
  testGeneratePattern("triangle", [2], "", "*\n**", failed);
  testGeneratePattern("triangle", [1], "", "*", failed);
  testGeneratePattern("triangle", [4], "", "*\n**\n***\n****", failed);
  testGeneratePattern("triangle", [5], "", "*\n**\n***\n****\n*****", failed);
  testGeneratePattern("triangle", [6], "", "*\n**\n***\n****\n*****\n******", failed);
  testGeneratePattern("triangle", [7], "", "*\n**\n***\n****\n*****\n******\n*******", failed);

  
  
  
  testGeneratePattern("spaced-alternating-rectangle", [2, 1], "", "**", failed);
  testGeneratePattern("spaced-alternating-rectangle", [2, 2], "", "**\n--", failed);
  testGeneratePattern("spaced-alternating-rectangle", [3, 3], "", "***\n---\n   ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [2, 3], "", "**\n--\n  ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 3], "", "****\n----\n    ", failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 4], "", "****\n----\n    \n****", failed);
  testGeneratePattern("spaced-alternating-rectangle", [5, 4], "", "*****\n-----\n     \n*****", failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 5], "", "****\n----\n    \n****\n----", failed);
  testDiamond(failed);
  testHollowDiamond(failed);
  testGeneratePattern("alternating-rectangle", [4, 3], "spaced-alternating-rectangle", "**** ****\n---- ----\n****     ", failed);
  console.table(failed);
}

testAll();


function testDiamond(failed) {
  testGeneratePattern("diamond", [1], "" ,"*", failed);
  testGeneratePattern("diamond", [2], "" ,"*", failed);
  testGeneratePattern("diamond", [3], ""," * \n***\n * ", failed);
  testGeneratePattern("diamond", [4], ""," * \n***\n * ", failed);
  testGeneratePattern("diamond", [5], "","  *  \n *** \n*****\n *** \n  *  ", failed);
  testGeneratePattern("diamond", [6], "" ,"  *  \n *** \n*****\n *** \n  *  ", failed);
  
}

function testHollowDiamond(failed) {
  testGeneratePattern("hollow-diamond", [1], "", "*", failed);
  testGeneratePattern("hollow-diamond", [2], "", "*", failed);
  testGeneratePattern("hollow-diamond", [3], "", " *\n* *\n *", failed);
  testGeneratePattern("hollow-diamond", [4], "", " *\n* *\n *", failed);
  testGeneratePattern("hollow-diamond", [5], "", "  *\n * *\n*   *\n * *\n  *", failed);
  testGeneratePattern("hollow-diamond", [6], "", "  *\n * *\n*   *\n * *\n  *", failed);
  
}

function rightTraingle(failed) {
  testGeneratePattern("right-aligned-triangle", [1], "", "*", failed);
  testGeneratePattern("right-aligned-triangle", [2], "", " *\n**", failed);
  testGeneratePattern("right-aligned-triangle", [3], "", "  *\n **\n***", failed);
  testGeneratePattern("right-aligned-triangle", [4], "", "   *\n  **\n ***\n****", failed);
  testGeneratePattern("right-aligned-triangle", [5], "", "    *\n   **\n  ***\n ****\n*****", failed);

}
