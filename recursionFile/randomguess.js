const randomNumber = Math.ceil(Math.random() * 10);

function processingTime(a) {
  let time = a * 1000000000;
  while (time) {
    time--;
  }
}
console.log(randomNumber);
console.log("Wait for some time...");
processingTime(2.4);
const a = prompt("you can write whatever you want");
// console.log(a);