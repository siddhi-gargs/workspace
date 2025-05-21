const LENGTH = 30;
const BREADTH = 30;

function findRandomInBetween(from, to) {
  return from + Math.floor(Math.random() * (to - from));
}

function makeSpace() {
  let print = "";
  const star = findRandomInBetween(0, LENGTH * BREADTH);
  const star1 = findRandomInBetween(0, LENGTH * BREADTH);
  const star2 = findRandomInBetween(0, LENGTH * BREADTH);
  for (let i = 0; i < LENGTH * BREADTH; i++) {
    if (i === star || i === star1 || i === star2) {
      print += "*";
    } else {
      print += " ";
    }

  }

  return print;
}

function makeBox() {
  let store = "";
  for (let i = 0; i <= 20; i++) {
    store += makeSpace() + "\n";
  }
  return store;
}

function wait(n) {
  for (let i = 0; i < n * 1000000000; i++) {}
}

function animation() {
  for (let i = 0; i < 20; i++) {
    console.clear();
    // console.log(makeSpace());
    console.log(makeBox());
    wait(2);
  }
}

animation();