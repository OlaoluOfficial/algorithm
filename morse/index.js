function morse(text) {
  // split into separate codes
  const textArray = text.split(" ");
  const wordArray = text.split("   ");

  // loop through separate codes and find corresponding characters from object
  let word = "";

  for (let i = 0; i < textArray.length; i++) {
    word += MORSE_CODE[textArray[i]];
  }
  return word;
}
console.log(morse("...---..."));

module.exports = morse;
