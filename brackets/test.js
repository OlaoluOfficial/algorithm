const isValid = require("./");

describe("Brackets Suite", () => {
  test("Single Character - valid inputs", () => {
    expect(isValid("()")).toBe("valid");
    expect(isValid("[]")).toBe("valid");
    expect(isValid("{}")).toBe("valid");
  });