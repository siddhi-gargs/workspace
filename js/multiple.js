let number = 23;
let multiple = 5;
let result;
for(let i = 1; i <= multiple; i++){
    result = number * i; 
    if (i == 3){
        continue;
    }
    console.log(number , "x" , i , "=" , result);   
}