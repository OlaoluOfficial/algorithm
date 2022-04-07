const isolateDuplicates = require(".");

describe("Find Duplicates", () => {
  test("Only strings allowed", () => {
    expect(() => isolateDuplicates()).toThrow();
    expect(() => isolateDuplicates([])).toThrowError(
      "Please enter a valid string"
    );
  });