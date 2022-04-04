const romanToDecimal = require("./");

describe("Roman to Numerals solution", () => {
  test("It passes the basics", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("V")).toBe(5);
    expect(romanToDecimal("X")).toBe(10);
    expect(romanToDecimal("L")).toBe(50);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("D")).toBe(500);
    expect(romanToDecimal("M")).toBe(1000);
  });