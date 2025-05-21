function multipleOfTwo(number1, number2) {
  if (number2 === 0) {
    return 0;
  }
  return number1 + multipleOfTwo(number1, number2 - 1);
}

// console.log(multipleOfTwo(6, 19));  

function exponential(base, power, sameBase) {
  if (power === 1) { 
    return base / sameBase;
  }
  return exponential(multipleOfTwo(base, base), power - 1, sameBase);
}