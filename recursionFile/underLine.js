function addUnderline(currentIndex, mark) {
  if (currentIndex === 0) {
    return mark;
  }

  return mark + addUnderline(currentIndex - 1, mark);
}

function underlineUnderString(string){
  return string + "\n" + addUnderline(string.length - 1, mark);
}