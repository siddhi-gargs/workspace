function noOfDigit(number) {
  if (number < 10) {
    return 1;
  }

  return 1 + noOfDigit(number / 10);
}

console.log(noOfDigit(87574));