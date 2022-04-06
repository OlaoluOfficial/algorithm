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