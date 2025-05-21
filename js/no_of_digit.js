const num = 156;
let count = 0;
{
   let num_copy = num;   
   while(num_copy > 0){
      let remainder = num_copy % 10;
      num_copy = num_copy - remainder;
      num_copy = num_copy / 10;
      count++;   
          
   } 

}
console.log(count);
 