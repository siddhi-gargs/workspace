// xor(0, 0) => 0
// xor(0, 1) => 1
// xor(1, 0) => 1
// xor(1, 1) => 0

function complement(input) {
  return input === 0 ? input | 1 : input & 0;
}

function xor(input1, input2) {
  return (input1 & complement(input2)) | (complement(input1) & input2);
}

function decToBinary(num) {
  let binary = num === 0 ? "0" : "";
  let decimal = num;

  while (decimal !== 0) {
    const bit = decimal & 1 === 1 ? "1" : "0";
    binary = bit + binary;
    decimal = decimal >> 1;
  } 

  return binary;
}

function maxlengthOfBits(input1, input2) {
  const lengthInput1 = decToBinary(input1).length;
  const lengthInput2 = decToBinary(input2).length;
  const length = Math.max(lengthInput1, lengthInput2);

  return length;
}

function eachBit(input1, input2) {
  let inXor = "";
  for (let index = input1.length - 1; index >= 0; index--) {
    inXor += xor(+input1[index], +input2[index]);
    console.log("input1[ndex]", input1[index]);
    console.log("input2[ndex]", input2[index]);
    console.log(inXor);
  }

  return inXor;
}


function inputs(input1, input2) {
  const binary1 = decToBinary(input1);
  const binary2 = decToBinary(input2);
  const length = maxlengthOfBits(input1, input2);
  const addPaddingInput1 = binary1.padStart(length, "0");
  const addPaddingInput2 = binary2.padStart(length, "0");

  const xor = eachBit(addPaddingInput1, addPaddingInput2);

  return xor;
} 

console.log(inputs(4, 3));
console.log(inputs(7, 8));
console.log(inputs(7, 9));
console.log(inputs(7, 10));
console.log(inputs(7, 18));