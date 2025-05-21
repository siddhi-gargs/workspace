const numberToCheck = 1234;
let number = numberToCheck;
let target = 6;
while (number > 0){               
  let last_digit = number % 10;
  let remaining_num = (number - last_digit) / 10;
  number = remaining_num;
    
  while (remaining_num > 0) {      //123
    let rem = (remaining_num % 10);
    remaining_num = (remaining_num - rem)/10;
    let sum = last_digit + rem;
      
    if (sum === target) {
      console.log(rem, last_digit);
    }
  }
}