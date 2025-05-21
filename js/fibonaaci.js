const till_term = 10;
let nth_term = 0;
let first_term = 0;
let last_term = 1;
let next_term = 0;
let count ;
let copy_first = first_term;
let copy_last = last_term; 
 
count = till_term; 

nth_term = copy_first;
console.log(nth_term);
count--;

nth_term = copy_last;
console.log(nth_term);
count--;


while(count){
    next_term = copy_first + copy_last;
    copy_first = copy_last;
    copy_last = next_term;
    nth_term = next_term;
    console.log(nth_term);
    count--;

}
