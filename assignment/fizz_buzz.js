const starting = 12;
const ending = 35;
let current_num = 0;

for (let i = starting ; i <= ending ; i++) {
    if ((i % 3 === 0) ) {
        current_num = "fizz";
    if ((i % 5 === 0))  
        current_num = "buzz";     
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        current_num = "fizzbuzz";
    } 
    if ((i % 3 !== 0) && (i % 5 !== 0) && ((i % 3 !== 0) && (i % 5 !== 0))) {
        current_num = i;
    }
    
    console.log(current_num);
}