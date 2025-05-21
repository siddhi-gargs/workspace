const number = 17;
let decimal = number;
let count = 0;
let binary = 0
let remainder = 0;
while (decimal != 1) {
    remainder = decimal % 2;
    decimal = (decimal - remainder)/2;
    console.log(remainder);
    binary = binary+ (remainder * (10 ** count));  console.log(binary);
    count++; 
} 

binary = binary + (1 * (10 ** count));
console.log(binary);