import _ from "npm:lodash";

const numbers = [1, 2, 4, 5, 6, 7, 8, 9];
const object = [
  { name: "siddhi", age: 4 },
  { name: "rohini", age: 10 },
  { name: "suman", age: 4 },
  { name: "surrendra", age: 8 },
];

console.log(_.chunk(numbers, 5));
console.log(_.max(numbers));
console.log(_.filter(object, "name"));
console.log(_.find(object, (e) => e.age > 4));
console.log(_.map(object, "name"));
