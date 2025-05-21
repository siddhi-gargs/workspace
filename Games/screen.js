const WIDTH = 5;
const HEIGHT = 6;

function putChar(screen, yCord, xCord, char) {
  screen[yCord][xCord] = char;
  return screen;
}

function createScreen(WIDTH, HEIGHT) {
  let screen = [];
  for(let i = 0; i < HEIGHT; i++ ) {
    const row = [];
    for (let j = 0; j < WIDTH; j++) {
      row.push(" ");
    }
    screen.push(row);
  } 

  return screen;
}

function display() {
  const space = createScreen(WIDTH, HEIGHT);
  console.log(space);
  putChar(space, 4, 2, "@");
  putChar(space, 5, 1, "@");
  console.log(space);
  const clear = createScreen(WIDTH, HEIGHT);
  console.log(clear);

}

console.log(WIDTH, HEIGHT);
display();