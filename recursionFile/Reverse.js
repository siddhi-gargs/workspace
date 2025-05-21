function findReverseByOneMoreArg(remainNum, makeReverse){

  if (remainNum < 10) {
    return makeReverse * 10 + remainNum; 
  }

  const remainder = remainNum % 10;
  remainNum = (remainNum - remainder) / 10;
  const makeNumber = makeReverse * 10 + remainder;

  return findReverseByOneMoreArg(remainNum, makeNumber);
}

function replaceWithTarget(number) {

  return findReverseByOneMoreArg(number, 0);
}

function sliceTestcase(number, expected) {
  const actualOutput = replaceWithTarget(number);
  const status = actualOutput === expected ? "✅" : "❌";
  console.log(status + " num " + number + " expected " + expected + " actual " + actualOutput);
}

// console.log(findReverseByOneMoreArg(6788, 0));
sliceTestcase(2346, 6432);
sliceTestcase(0, 0);
sliceTestcase(756, 657);
sliceTestcase(9854, 4589);
sliceTestcase(1003, 3001);
sliceTestcase(237, 732);