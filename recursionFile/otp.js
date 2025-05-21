const a = prompt("Enter first digit :");
const b = prompt("Enter second digit :");
const c = prompt("Enter third digit :");
const d = prompt("Enter four digit :");
const digit = a + b + c + d;
const takeOtp = prompt("enter otp :");

function compare(digit, takeOtp) {
  return message(digit === takeOtp);
}

function message(output) {
  if (output) {
    return "succesfully login";
  }
  return "otp Incorrect";
}

console.log(compare(digit, takeOtp));
