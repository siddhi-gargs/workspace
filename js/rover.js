const roverX = 0;
const roverY = 0;
const heading = 0;
const instructions = 332331;
// The above input should leave the Mars Rover at 2 2 0
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let instruction = instructions;
let reverse = 0;
let x = roverX;
let y = roverY;
let h = heading;

while (instruction > 0) {
  const rem = instruction % 10;
  instruction = (instruction - rem) / 10;
  reverse = rem + (reverse * 10);

}

while (reverse > 0) {

  const currentInst = reverse % 10;
  reverse = (reverse - currentInst) / 10;

  if (currentInst === 3) {
    switch (h) {
      case 0:
        y = y + 1;
        break;
    case 1:
        x = x + 1;
        break;
    case 2:
        y = y - 1;
        break;
    case 3:
        x = x - 1;
          break;
      }
  } else {
      h = currentInst === 1 ? (h + 3) % 4 : (h + 1) % 4;
  }

}

console.log(x, y, h);

/*
ins      output   input
332331   2 2 0    0 0 0
123123   0 2 0    0 0 0
123123   5 3 2    5 1 2
32321133 -1 4 3    2 3 3
*/
//   0 = 3 1 = 0 2 = 1 3 = 2
// if (currentInst === 1) {
//     h = h - 1;
//     if (h < 0){
//     h = 3
//     }
// }
// if (current_inst === 1) {
//     if (h === 0) {
//         h = 3;
//     } else {
//         h--;
//     }
// }
// if (current_inst === 2) {
//     if (h === 3) {
//         h = 0;
//     } else {
//         h++;
//     }
// } 