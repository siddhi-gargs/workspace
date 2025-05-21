let instruction = 321113;
let length = 0;
let reverse = 0;

while (instruction > 0) {
  const rem = instruction % 10;
  instruction = (instruction - rem) / 10;
  reverse = rem + (reverse * 10 );
  length++;
  console.log(length);
  console.log(reverse);
  console.log(instruction);
}
console.log(reverse);
