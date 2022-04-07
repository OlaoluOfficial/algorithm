const isolateDuplicates = require(".");

describe("Find Duplicates", () => {
  test("Only strings allowed", () => {
    expect(() => isolateDuplicates()).toThrow();
    expect(() => isolateDuplicates([])).toThrowError(
      "Please enter a valid string"
    );
  });

  test("serial strings", () => {
    expect(isolateDuplicates("aaaabbcdefffffffg")).toEqual([
      "aa[aa]bbcdeff[fffff]g",
      2,
    ]);

    expect(isolateDuplicates("abcdefg")).toEqual(["abcdefg", 0]);
    expect(isolateDuplicates("aabbccddeeffgg")).toEqual(["aabbccddeeffgg", 0]);
    expect(isolateDuplicates("aabccdeefgg")).toEqual(["aabccdeefgg", 0]);
    expect(isolateDuplicates("iiijjjjooooppppp")).toEqual([
      "ii[i]jj[jj]oo[oo]pp[ppp]",
      4,
    ]);
    expect(isolateDuplicates("ssssssssssssssssssss")).toEqual([
      "ss[ssssssssssssssssss]",
      1,
    ]);
  });