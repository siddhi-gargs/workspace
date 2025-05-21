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

const SPACE = " ";
const STAR = "*";

function startOrEnd(range, column) {
  return (range[0] === column || range[1] === column) ;
}

// function makeHollowDiamondRow(range, column, rangeFun) {
//   let rowPattern = "";
//   for (let i = 1; i <= column; i++) {
//     rowPattern += rangeFun(range, i) ? STAR : SPACE;
//   }
  
//   return rowPattern;
// }

function shuffleRange(range) {
  const temp = range[0];
  range[0] = range[1];
  range[1] = temp;
}

function updateRange(range) {
  range[0] = range[0] - 1;
  range[1] = range[1] + 1;
}


function diamonds(style, dimensions) {
  let pattern = "";
  const size = closestOdd(dimensions[0]);
  const midPoint = moreThanHalf(size);
  const range = [midPoint, midPoint];
  for (let row = 1; row <= size; row++) {
    const column =  Math.max(range[0], range[1]);
    const parameterArray = style === "diamond" ? [range, size, inRange] :
    [range, column, startOrEnd]; 

    const rowPattern = makeDiamondRow(parameterArray);
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

console.log(diamonds("diamond", [5]));
console.log(diamonds("diamond", [7]));
console.log(diamonds("hollow-diamond", [6]));
console.log(diamonds("hollow-diamond", [7]));
