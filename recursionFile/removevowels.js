function isCharIsVowel(string, vowels, currentStringIndex, vowelCurrIndex) {
  if (string[currentStringIndex] === vowels[vowelCurrIndex]) {
    return true;
  }
  // console.log(vowels);

  // console.log(string[currentStringIndex] + vowels[vowelCurrIndex]);
  if (vowelCurrIndex === vowels.length) {
    return false;
  }

  return isCharIsVowel(string, vowels, currentStringIndex, vowelCurrIndex + 1);
}

function isCharHasToAdd(string, vowelString, currentStringEndIndex) {
  const isCharisVowel = isCharIsVowel(string, vowelString, currentStringEndIndex, 0);
  const charNeedToAdd = isCharisVowel ? "" : string[currentStringEndIndex];
  // console.log("string[currentChar] :" + string[currentStringEndIndex]);
  // console.log("charNeedToAdd :" + charNeedToAdd);
  if (currentStringEndIndex === 0) {
    return charNeedToAdd;
  }

  return isCharHasToAdd(string, vowelString, currentStringEndIndex - 1) + charNeedToAdd;
}

function removeVowels(string) {
  return isCharHasToAdd(string, "aeiouAEIOU", string.length - 1);
}

console.log(removeVowels("proper"));