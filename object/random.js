const data = { A: 1, B: 2, C: 3, D: 4 };
const newData = {};

Object.keys(data).forEach(function (key) {
  newData[data[key]] = key;
});

console.log(newData);

const objectKeyAndValue = new Map();
objectKeyAndValue.set("a", 1);
objectKeyAndValue.set("b", "Siddhi");

console.log(objectKeyAndValue);
