const binaryReversal = require(".");

describe("Binary Reversal Spec", () => {
  test("It passes the basics", () => {
    expect(binaryReversal("1")).toBe("128");
    expect(binaryReversal("10")).toBe("80");
    expect(binaryReversal("45")).toBe("180");
    expect(binaryReversal("100")).toBe("38");
    expect(binaryReversal("111")).toBe("246");
    expect(binaryReversal("121")).toBe("158");
    expect(binaryReversal("200")).toBe("19");
  });
});
