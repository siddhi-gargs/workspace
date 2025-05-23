function createScreen(width, height) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(' ');
    }
    screen.push(row);
  }
  return screen;
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

function drawRectangle(screen, char, x1, y1, x2, y2) {
  drawHorizontalLine(screen, char, x1, x2, y1);
  drawHorizontalLine(screen, char, x1, x2, y2);
  drawVerticalLine(screen, char, x1, y1, y2);
  drawVerticalLine(screen, char, x2, y1, y2);
}

function putString(screen, str, x, y) {
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x + i, y);
  }
}

function putStringLeft(screen, str, x, y) {
  for (let i = str.length - 1; i >= 0; i--) {
    putPixel(screen, str[i], x--, y);
  }
}

function putVerticalString(screen, str, x, y) {
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x, y + i);
  }
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }

  return frame;
}

function displayScreen(screen) {
  for (const line of screen) {
    console.log(line.join(''));
  }
}

function clearScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = ' ';
    }
  }
}

function putWalker(screen, walker) {
  const position = walker[0];
  const name = walker[1];
  const bottom = walker[2];
  const x = position[0];
  const y = position[1];
  const size = walker[3];
  putString(screen, name, x, y);
  drawRectangle(screen, '.', x, y + 1, x + size, y + 1 + size);
  putStringLeft(screen, bottom, x + size, y + 2 + size);
}

function moveWalker(walker) {
  const position = walker[0];
  const speed = walker.at(-1);

  position[0] = position[0] + speed[0];
  position[1] = position[1] + speed[1];
}

function putWalkers(screen, walkers) {
  for (const walker of walkers) {
    putWalker(screen, walker);
  }
}

function moveWalkers(walkers) {
  for (const walker of walkers) {
    moveWalker(walker);
  }
}

function animate(screen, walkers, steps) {
  let frames = '';
  for (let i = 0; i < steps; i++) {
    clearScreen(screen);
    putWalkers(screen, walkers);
    moveWalkers(walkers);
    frames += screenToString(screen);
  }

  return frames;
}

function displayAnimFormat(width, height, frames) {
  console.log(width, height);
  console.log(frames);
}

function main() {
  const WIDTH = 40;
  const HEIGHT = 20;
  const screen = createScreen(WIDTH, HEIGHT);

  // walker: [[x, y], char, size, [xSpeed, ySpeed]]
  // play with positions and speeds
  const walker1 = [[0, 0], 'Siddhi', "Garg",  8, [0.20, 0.5]];
  const walker2 = [[20, 0], 'jayant', "vivek", 16, [0.20, 0.5]];
  const walkers = [walker1, walker2];

  const frames = animate(screen, walkers, 10);
  displayAnimFormat(WIDTH, HEIGHT, frames);
}

main();