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

  test("non serial strings", () => {
    expect(isolateDuplicates("boopdedoop")).toEqual(["boopdedoop", 0]);
    expect(isolateDuplicates("helloookat")).toEqual(["helloo[o]kat", 1]);
    expect(isolateDuplicates("hellllloooooodeeeecadevvsss")).toEqual([
      "hell[lll]oo[oooo]dee[ee]cadevvss[s]",
      4,
    ]);
  });

  test("case preserving", () => {
    expect(isolateDuplicates("HelllllooooooDeeeecadevvsss")).toEqual([
      "Hell[lll]oo[oooo]Dee[ee]cadevvss[s]",
      4,
    ]);
    expect(isolateDuplicates("HEEEELLLLLOOOOOOOTHHHHHEEEEERRRREEE")).toEqual([
      "HEE[EE]LL[LLL]OO[OOOOO]THH[HHH]EE[EEE]RR[RR]EE[E]",
      7,
    ]);
    expect(
      isolateDuplicates(
        "TttTTTTttttTTTTTTIIIIIiiiiiiiSSSSSSSSSTTTTAAAAAAAAAaaaaaaaaaSSSSSSSSSSKKKKKkkkkkk"
      )
    ).toEqual([
      "Tt[tTTTTttttTTTTTT]II[IIIiiiiiii]SS[SSSSSSS]TT[TT]AA[AAAAAAAaaaaaaaaa]SS[SSSSSSSS]KK[KKKkkkkkk]",
      7,
    ]);
  });
});
