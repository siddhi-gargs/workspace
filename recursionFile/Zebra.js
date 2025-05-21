const LION = "L";
const ZEBRA = "Z";
const SPACE = " ";

function indexZebraOrLion(startIndex, jungle, LION) {

  for (let index = startIndex; index < jungle.length; index++) {
    if (jungle[index] === LION) {
      return index;
    }
  }
  return 0;
}



function zebraPosition(jungle) {
  let zebraIndex = 0;
  let index = 0;
  let distance1 = 0;

  if (!isLionAndZebraPresent(jungle)) {
    return -1;
  }

  while (index < jungle.length) {
    zebraIndex = indexZebraOrLion(jungle, index, ZEBRA);
    let lionIndex = indexZebraOrLion(zebraIndex + 1, jungle, LION);
    distance1 = lionIndex - zebraIndex;
    index = lionIndex + 1;
  }
  return zebraIndex;
}

function isCharPresent(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

function isLionAndZebraPresent(jungle) {
  const isLionPresent = isCharPresent(jungle, LION);
  const isZebraPresent = isCharPresent(jungle, ZEBRA);

  return isLionPresent && isZebraPresent ;
}

console.log(zebraPosition("ZZZZLLL"));
console.log(zebraPosition(""));
console.log(zebraPosition("LL"));
console.log(zebraPosition("ZZ"));
console.log(zebraPosition("Z"));
console.log(zebraPosition("L"));