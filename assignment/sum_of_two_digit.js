let number = 1234;
const target =  5;
let value = 0;
let count = 0;
let remain_number = 0;

while (number > 0) {
   
    
    let rem = number % 10;
    number = (number - rem) / 10;
    console.log(value);
    console.log(count);
    console.log(remain_number);
    console.log(rem);
    console.log(number);
    value = (rem * (10 ** count)) + value;
    remain_number = value;
    count ++;
    
    if (number === 0) {
        number = value;  
        let target_remain = target - rem;
        count = 0;
        value = 0;
           
        while (remain_number > 0) {
            let remainder = remain_number % 10;
            remain_number = (remain_number - remainder) / 10;
            
            if (target_remain === remainder) {
                console.log(rem, remainder);
            }
            
        }
       
    }

    
    
}