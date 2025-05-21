function createScreen(width, height) {
  const screenOfArr = [];
  for (let row = 0; row < height; row++) {
    const currentRow = [];
    for (let column = 0; column < width; column++) {
      currentRow.push(" ");
    } 
    screenOfArr.push(currentRow); 
  }

 return screenOfArr;
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }

  return frame;
}

function putPixel(screen, char, x, y) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function drawHorizontalLine(screen, char, x1, x2, y) {
  for (let i = x1; i <= x2; i++) {
    putPixel(screen, char, i, y);
  }
}

function drawVerticalLine(screen, char, x, y1, y2) {
  for (let i = y1; i <= y2; i++) {
    putPixel(screen, char, x, i);
  }
}

function drawRectangle(screen, vChar, hChar, x1, y1, x2, y2) {
  drawHorizontalLine(screen, hChar, x1, x2, y2);
  drawVerticalLine(screen, vChar, x1, y1, y2);
  drawVerticalLine(screen, vChar, x2, y1, y2);
}


function updateCoordindate(coordinate) {
  const X = coordinate[0];
  const Y = coordinate[1];
  const speedX = coordinate[2];
  const speedY = coordinate[3];

  X[0] = X[0] + speedX;
  Y[0] = Y[0] + speedY;
  X[1] = X[1] + speedX;
  // Y[1] = Y[1] + speedY;
}

function rectangleCoordinates(screen, coordinates) {
  const X = coordinates[0];
  const Y = coordinates[1];
  drawRectangle(screen, "|", "_", X[0], Y[0], X[1], Y[1]);
  updateCoordindate(coordinates);
}

function clearScreen(screen) {
  for (let index = 0; index < screen.length; index++) {
    for (let i = 0; i < screen[index].length; i++) {
      screen[index][i] = " ";
    }
  }
}

function animate(screen, coordinates, times) {
  let frames = "";
  for (let step = 0; step < times; step++) {
    clearScreen(screen);
    rectangleCoordinates(screen, coordinates);
    frames += screenToString(screen);
  }

  return frames;
}

function displayScreen(WIDTH, HEIGHT, frame) {
  console.log(HEIGHT, WIDTH);
  console.log(frame);
}

function graph() {
  const WIDTH = 80;
  const HEIGHT = 40;
  const screen = createScreen(WIDTH, HEIGHT);
  // [x1, y1, x2, y2];
  const cordinates = [[1,4],[2, 30], 1, 0.5];
 

  const frames = animate(screen, cordinates, 30);
  displayScreen(WIDTH, HEIGHT, frames);
}

graph();