const num = 123321;
let num_copy = num;
let quiotent;
let remainder;
let reverse = 0;
  
while(num_copy > 0){
  
  remainder = num_copy % 10;
  quiotent = num_copy - remainder;
  
  reverse = reverse * 10 + remainder; 
  num_copy = quiotent/ 10;
} 
console.log(reverse);
console.log(remainder);
 
if (num === reverse) {
  console.log(true);     
} else {
  console.log(false);       
}