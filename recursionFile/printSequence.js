function printEvenNumber(from, to) {
  if (from === to){
    return to;
  }
  if (from === to + 1) {
    return "end num is not Even";
  }


  const even = from % 2 === 0 ? from : from + 1;
  return even + "\n" + printEvenNumber(from + 2, to);
}

console.log(printEvenNumber(20, 32));