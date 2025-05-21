function repeat(noOfTimes, mark) {
  let string = ""; 
  for (let iterate = 0; iterate < noOfTimes; iterate++) {
    string += mark;
  }

  return string;
}

function showPoition(char, zero, three, constant) {
  if (zero === constant) {
    return;
  }

  console.log(repeat(zero, "_") + char);

  return showPoition(char, zero + 1, three - 1, constant);
}

console.log(showPoition("A", 0, 3, 3));
