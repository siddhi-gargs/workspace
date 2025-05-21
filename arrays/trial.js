const listOfName = [45, 87, "siddhi", true, undefined, Infinity, NaN];
listOfName[6] = "" + listOfName[6];
let train;
function changeIndex(listOfName) {
  const newList = [2, 73, "siddhi", train = "a"];
  console.log(newList);
  const newList1 = newList;
  console.log(newList1);
  console.log(typeof(newList1));
}

function add(a, b) {
  console.log(a, b);
  return a + b;
}

const q = 10;
const w = 20;

const names = ["siddhi", add(87, 98), "b", "c", "d"];
names[6] = "gdshkdsk";
console.log(typeof(names[1]));

names[5] = "e";

console.log(names);




// console.log(typeof(listOfName[0]));
// console.log(typeof(list[1]));
// console.log(typeof(listOfName[2]));
// console.log(typeof(listOfName[3]));
// console.log(typeof(listOfName[4]));
// console.log(typeof(listOfName[5]));
// console.log(typeof(listOfName[6]));


