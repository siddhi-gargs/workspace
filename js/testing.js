const number = 73825664;
const target = 10;
const number_string = "" + number;
const length = number_string.length;
console.log(length);
let loop = length - 2;
let lastIndex = length - 1;
console.log(loop);
console.log(lastIndex);

    for (let i = 0 ; i <= loop; i++) {
        const first_number = + number_string[i];
        let one = 1;
    
        for (let j = lastIndex ; j >= one ; j--){
            const second_number = + number_string[j]
            const remain_target = target - first_number;
            if (second_number === remain_target) {
                console.log(first_number, second_number);
            }
        }
        
    } 
