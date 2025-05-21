function max(first, second) {
  return first > second ? first : second;
}

const data = ["1", "2", "3", "4", "5", "6", "7", "8"];

function getFirstNElements(n, data) {
  const arr = [];

  for (let i = 0; i < max(data.length, n); i++) {
    if (i === n) {
      return arr;

    }
    arr[i] = data[i];
  }
  return arr;
}

console.log(getFirstNElements(3, data));