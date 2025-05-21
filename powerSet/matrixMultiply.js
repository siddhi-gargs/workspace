function currentValue(row, column ,matrixA, matrixB) {
  let sumOfProducts = 0;
  for (let index = 0; index < matrixA[0].length; index++) {
    sumOfProducts += matrixA[row][index] * matrixB[index][column];
  }

  return sumOfProducts;
}

function rowOfoutputArr(row, matrixA, matrixB) {
  const rowArray = [];   
  for (let column = 0; column < matrixB[0].length; column++) {
    const value = currentValue(row, column, matrixA, matrixB);
    rowArray.push(value);
  }
  return rowArray;
}

function outputArr(matrixA, matrixB) {
  const completeArr =[];
  for (let row = 0; row < matrixA.length; row++) { 
    const rowArray = rowOfoutputArr(row, matrixA, matrixB);    
    completeArr.push(rowArray);
  }

  return completeArr;
}

function isEmpty(matrixA, matrixB) {
  return matrixA.length === 0 || matrixB.length === 0;
}

function multiplyMatrices(matrixA, matrixB) {
  if (isEmpty(matrixA, matrixB)) {
    return [];
  }

  if (matrixB.length !== matrixA[0].length) {
    return NaN;
  }

  return outputArr(matrixA, matrixB);
}

function addQuote(string) {
  return " \"" + string + "\" ";
}

function msgForExtractingDigit(matrix1, matrix2, expected, actual) {
  const matrixInput1 = "matrix1" + addQuote(matrix1);
  const matrixInput2 = "matrix2" + addQuote(matrix2);
  const expectedMsg = "expected" + addQuote(expected);
  const actualOutputMsg = "actual Output" + addQuote(actual);

  return matrixInput1 + matrixInput2 + expectedMsg + actualOutputMsg;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[ index ] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function isMultiDimensionalArrayEqual(arr, same) {
  if (arr.length !== same.length) {
    return false;
  }

  for (let Index = 0; Index < arr.length; Index++) {
    for (let subIndex = 0; subIndex < arr[Index].length; subIndex++) {
      if (!areEqual(arr[Index][subIndex], same[Index][subIndex])) {
        return false;
      }
    }
  }

  return true;
} 

function testMatrix(matrix1, matrix2 ,expected) {

  const actualOutput = multiplyMatrices(matrix1 , matrix2);
  const isSame = isMultiDimensionalArrayEqual(expected, actualOutput);
  const getMark = isSame ? "✅" : "❌";

  console.log(getMark, msgForExtractingDigit(matrix1,matrix2,  expected, actualOutput));
}

testMatrix([], [], []);
testMatrix([[]], [[]], NaN);
testMatrix([[]], [], []);
testMatrix([[1, 2, 3]], [[1], [2]], NaN);
testMatrix([[1, 2]], [[1, 2]], NaN);
testMatrix([[1]], [[1]], [[1]]);
testMatrix([[1, 2, 3]], [[1, 2], [2, 4], [4, 7]], [[17, 31]]);
testMatrix([[1, 2]], [[2], [1]], [4]);

function testCase1() {
  const matrix1 = [[1, 2], [3, 4]];
  const matrix2 = [[5, 6], [7, 8]];
  const outputMatrix = [[19, 22],[43, 50]];
  testMatrix(matrix1, matrix2, outputMatrix);  
}

function testCase2() {
  const matrix1 = [[ 1, 2, 3 ],[ 4, 5, 6 ]];
  const matrix2 = [[ 7,  8 ], [ 9, 10 ], [11, 12 ]];
  const outputMatrix = [[58,64], [139, 154]];
  testMatrix(matrix1, matrix2, outputMatrix);  
}

function testCase3() {
  const matrix1 = [[1, 2],[3, 5],[6, 8]];
  const matrix2 = [[9, 10, 2], [2, 3, 4]];
  const outputMatrix = [[13, 16, 10], [37, 45, 26], [70, 84, 44]];
  testMatrix(matrix1, matrix2, outputMatrix);  
}

function testCase4() {
  const matrix1 = [[1, 2, 3]];
  const matrix2 = [[4], [5],[6]];
  const outputMatrix = [[32]];
  testMatrix(matrix1, matrix2, outputMatrix);  
}

function remainTestCase() {
  testCase1();
  testCase2();
  testCase3();
  testCase4();
}

remainTestCase();