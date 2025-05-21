const horizontal = "-";
const vertical = "|";

function addHorizontalLine(currentIndex, mark) {
  if (currentIndex === 0) {
    return mark;
  }

  return mark + addHorizontalLine(currentIndex - 1, mark);
}

function addVerticalLine(currentIndex, mark) {
  if (currentIndex === 0) {
    return mark;
  }

  return mark + "\n" + addVerticalLine(currentIndex - 1, mark);
}

let string = "";
for (let i = 1; i <= 9; i++) { 
  if (i % 3 === 1) {
    string += "   "; 
    if (i > 3) {
      string += "\n";
      for (let j = 0; j <= 10; j++) {
        string += "-";
      }
      string += "\n";
    }
  }
  else {
    string += "|   ";
  }
}
console.log(string);

function isEven(num) {
  if (num <= 1){
    return num % 2 === 0;
  }
  return isEven(num - 2);
}
