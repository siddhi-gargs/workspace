function triangle(row) {
  let triangle = "";
  let m = 0;
  for (let i = 0; i < row; i++) {
    let pattern = "";
    m++;
    for (let j = i; j < i + m; j++) {
      pattern += "* ";
    }
    triangle += pattern + "\n";
  }

  return triangle;
}