function maximum(first, second) {
  return first > second ? first : second;
}

function average(x, y) {
  if (x === y) {
    return x;
  }
  const maxOfXandY = maximum(x, y);
  const minOfXandY = maxOfXandY === x ? y : x;

  return average(minOfXandY + 0.5, maxOfXandY - 0.5);
}

function additionTestCase(avgCandidate1, avgCandidate2, expected) {
  const actualOutput = average(avgCandidate1, avgCandidate2);
  const status = actualOutput === expected ? "✅" : "❌";
  console.log(status + " expected " + expected + " second " + avgCandidate2);
}

// function minimum(first, second) {
//   return first < second ? first : second;
// }


additionTestCase(20, 5, 12.5);
additionTestCase(25, 5, 15);
additionTestCase(0, 2, 1);
additionTestCase(20, 5, 12.5);
additionTestCase(20, 5, 12.5);
additionTestCase(20, 5, 12.5);
additionTestCase(20, 5, 12.5);
additionTestCase(20, 5, 12.5);