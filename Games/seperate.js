const string = "kerala_delhi_westBengal_uttarakhand_up_maharashtra_ap_";

function findIndexByMark(string, index, underscore) {
  let word = "";
  let decrementNumber = index;
  for (let i = 0; i < string.length; i++) {
    if (decrementNumber === 0 && string[i] === underscore) {
      return word;
    }
    if (string[i] === underscore) {
      word = "";
      decrementNumber--;
    } else {
      word += string[i];
    }
  }
}

console.log(findIndexByMark(string, 2, "_"));
console.log(findIndexByMark(string, 2, "_"));