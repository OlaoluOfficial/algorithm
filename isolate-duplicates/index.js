function isolateDuplicates(text) {
  if (typeof text != "string") {
    return "Please enter a valid string";
  }
  let letters = {};
  let letterGreaterThanTwo = 0;
  let resultString = "";

  for (let i = 0; i < text.length; i++) {
    letters[text[i]] = (letters[text[i]] || 0) + 1;

    console.log(letters);
  }