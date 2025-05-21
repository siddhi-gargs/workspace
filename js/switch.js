const value = 45;
const keepTrue = true;
switch (keepTrue) {
    case 30:
        console.log("false");
        break;
    case value < 0:
        console.log(1);
        break;
    default:
        console.log("nothing");
} 
let a = 23;
let b = 100;
let max = a > b ? a : b
let min = max === a ? b : a
console.log(max);
console.log(min);