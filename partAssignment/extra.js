function starHyphenSpacePattern(style, dimension, starHyphenSpace, secondStyle) {
  const arrayStarHyphen = alternatePattern(dimension, starHyphenSpace, 2);
  const array2Pattern = alternatePattern(dimension, starHyphenSpace, 3);
  
  if (style == ALTERANATE_RECT && secondStyle === ALTERANATE_SPACE_RECT) {
    return concatCorrespondRow(arrayStarHyphen, array2Pattern);
  }
  
  if (style === ALTERANATE_SPACE_RECT && secondStyle === ALTERANATE_RECT) {
    return concatCorrespondRow(array2Pattern, arrayStarHyphen);
  }
  
  const decideArray = style === ALTERANATE_RECT;
  
  return decideArray ? arrayStarHyphen.join("\n") : array2Pattern.join("\n");
}


function setOfRectanglePattern(style, dimension, mark, secondStyle) {
  const filledEleArray = filledRectangle(dimension, mark);
  const unpackedEleArray = hollowRectangle(dimension, mark);
  
  if (style === FILLED_RECTANGLE && secondStyle === HOLLOW_RECTANGLE) {
    return concatCorrespondRow(filledEleArray, unpackedEleArray);
  }
  
  if (style === HOLLOW_RECTANGLE && secondStyle === FILLED_RECTANGLE) {
    return concatCorrespondRow(unpackedEleArray, filledEleArray);
  }
  
  const isFilled = style === FILLED_RECTANGLE;
  return isFilled ? filledEleArray.join("\n") : unpackedEleArray.join("\n");
}