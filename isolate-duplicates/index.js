function isolateDuplicates(text) {
  if (typeof text != 'string') {
    return 'Please enter a valid string';
  }
  let letters = {};
  let letterGreaterThanTwo = 0;
  let resultString = '';

  for (let i = 0; i < text.length; i++) {
    letters[text[i]] = (letters[text[i]] || 0) + 1;

    console.log(letters);
  }
  Object.keys(letters).map((letter) => {
    const letterCount = letters[letter];
    if (letterCount > 2) {
      letterGreaterThanTwo++;
      resultString += letter + '' + letter + '[';
      for (let j = 0; j < letterCount - 2; j++) {
        resultString += letter;
      }
      resultString += ']';
    } else {
      for (let j = 0; j < letterCount; j++) {
        resultString += letter;
      }
      resultString += ']';
      resultString;
    }
  });

  return true;
}

module.exports = isolateDuplicates;
