const input = 1234;
let number = input;
const target =  5;
let num_length = input;
let count = 0;
while (num_length > 0){
    const rem = num_length % 10;
    num_length = (num_length - rem) / 10;
    count++ ;
}

count--;
while (number > 0) {
    for (let i = count; i >= 1; i--){
        let ten_power = (10 ** i);
        
        let remain_number = number % ten_power;
            number = number - (remain_number) / ten_power;
            number = remain_number;
        while (remain_number > 0) {
            let remainder = remain_number % 10;
            remain_number = (remain_number - remainder) / 10;
            let target_remain = target - number;
            if (target_remain === remainder) {
                console.log(number, remainder);
            }
            
        }
    }
}