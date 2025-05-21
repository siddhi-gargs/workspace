const input = "78rtun465";
let sum = 0;
let result = 0;
for (let index = 0; index < input.length; index++){
  result = sum;
  sum = +input[index] + sum;
  console.log(+ input[index]);
  if (isEqualToNaN(sum)) {
    sum = result;
  } 

}

function isEqualToNaN(input) {
  return input + "" === "NaN";
}

console.log(sum);