const morseToText = require(".");

describe("Morse assumptions", () => {
  test("it returns an empty string untouched", () => {
    expect(morseToText("")).toBe("");
  });

  test("it bails given invalid data", () => {
    expect(() => morseToText()).toThrow();
    expect(() => morseToText([])).toThrowError("Please provide a morse string");
  });
});

describe("Morse spec", () => {
  test("it decodes single letters and words", () => {
    expect(morseToText(".-")).toBe("A");
    expect(morseToText(".")).toBe("E");
    expect(morseToText("..")).toBe("I");
    expect(morseToText("...---...")).toBe("SOS");
  });

  test("it decodes letters with spaces", () => {
    expect(morseToText(". .")).toBe("EE");
    expect(morseToText(".   .")).toBe("E E");
    expect(morseToText("... --- ...")).toBe("SOS");
    expect(morseToText("...   ---   ...")).toBe("S O S");
    expect(morseToText("-.. . -.-. .-   -.. . ...-")).toBe("DECA DEV");
  });

  test("It decodes special characters", () => {
    expect(
      morseToText(
        "...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. ."
      )
    ).toBe("$5.07 PER BOTTLE");

    expect(morseToText("..- .-... ..")).toBe("U&I");
  });

  test("it decodes letters with multiple spaces", () => {
    expect(morseToText(" . ")).toBe("E");
    expect(morseToText("   .   . ")).toBe("E E");
    expect(
      morseToText(
        "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     "
      )
    ).toBe("SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  });
});
