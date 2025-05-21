// // function for return boolean value take take 
// console.log(concatstring("to", "gether", "together" ));  // three parameter 
// function concatstring(a, b, c) {
//     const isEqual = (c === a + b);
//     return isEqual;
// }
// console.log(concatstring("m", "n", "mn"));
// console.log(concatstring(23, 56, 79));

function leapyear(a) {
    if (a > 0 && a < 10000) {
    const Div4 = a % 4 === 0;
    const Div100 = a % 100 === 0;
    const Div400 = a % 400 === 0;
    
    const isLeap = (Div400 || (!Div100 && Div4));

    return a + " is " + isLeap;
    
    } else { 
        return a + " is " + "invalid";
    }
}

console.log(leapyear(9996), leapyear(1600), leapyear(0));

// const row0 = sumcoordinate(3, 0);
// const row1 = sumcoordinate(1, 0);
// const row2 = sumcoordinate(2, 3);
// const row3 = sumcoordinate(0, 3);

// function sumcoordinate(a, b) {
//     return a + b;
// }

// function minimum(a, b , c, d){
//     let min = a < b ? a : b
//     min = min < c ? min : c
//     min = min < d ? min : d
//     return min;
// }

// console.log(minimum(row0, row1, row2, row3));
