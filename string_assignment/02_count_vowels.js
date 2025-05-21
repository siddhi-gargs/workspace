// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'check vowels';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const vowels = "aeiouAEIOU";
let countVowel = 0;

for (let i = 0; i < string.length; i++) {
    let found = true;
    let eachVowel = 0;

    while (found) {
        if (string[i] === vowels[eachVowel]) {
            countVowel++;
            found = false;
        }
        eachVowel++;
        found = eachVowel < vowels.length;
    }
    
}

console.log(countVowel);

// for (let i = 0; i < stringSize; i++) {
//     let strChar = string[i];
//     for (let eachVowel = 0; eachVowel <= 9; eachVowel++) {
//         let currentVowel = vowels[eachVowel];
//         if (strChar === currentVowel) {
//             countVowel++;
//             break;
//         }

//     }
// }
// console.log(countVowel);

// for (let i = 0; i < stringSize; i++) {
//         // let strChar = string[i];
//     for (let eachVowel = 0; eachVowel < vowelLen; eachVowel++) {
//         // let currentVowel = vowels[eachVowel];
//         if (string[i] === vowels[eachVowel]) {
//             countVowel++;
//             break;
//         }
//     }
// }
// console.log(countVowel);

