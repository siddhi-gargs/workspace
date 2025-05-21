// Print all pairs of digits in `numberToCheck` which adds up to `target`.
const numberToCheck = 1000;
const target = 5;
// For example `numberToCheck` = 1234 and `target` = 5
// Pairs whose sum is 5 are (1, 4) and (2, 3) 
// Your program should print
// 1 4
// 2 3
// or
// 4 1
// 3 2
// As you can see above, order doesn't matter. You can print in any order.
// One line should contain only one pair.
// There should be exactly one space between numbers of a pair.
// You should use console.log(1, 4) to print 1 and 4 on a single line with exactly one space between them.
// If there is no pair that adds up to the target, your program should not print anything.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let number = numberToCheck;

while (number > 0){               
    let last_digit = number % 10;
    let remaining_num = (number - last_digit) / 10;
    number = remaining_num;
    
    while (remaining_num > 0) {      //123
        let rem = (remaining_num % 10);
        remaining_num = (remaining_num - rem)/10;
        let remain_target = target - last_digit ;
        
        if (remain_target === rem) {
            console.log(rem, last_digit);
        }
        
}
}