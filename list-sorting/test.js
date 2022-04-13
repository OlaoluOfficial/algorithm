const listSorting = require(".");

describe("Roman to Numerals solution", () => {
  test("1 indexed", () => {
    expect(listSorting(5, [1, 2, 3, 4, 5])).toBe(4);
    expect(listSorting(5, [1, 2, 3, 4, 4, 4])).toBe(-1);
    expect(listSorting(5, [5, 1, 2, 3, 4, 5])).toBe(5);
    expect(listSorting(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(11);
    expect(listSorting(-1, [-1, 0, 10, 10, 10, 1, 1, 1, 1, 1, 1])).toBe(0);
    expect(listSorting(2, [2])).toBe(0);
    expect(listSorting(1, [])).toBe(-1);
    expect(listSorting(3, [-1, 0, 1, 2, 3])).toBe(4);
    expect(
      listSorting(4, [
        4,
        0,
        4,
        2,
        4,
        5,
        4,
        8,
        4,
        3,
        4,
        1,
        4,
        2,
        4,
        2,
        4,
        5,
        6,
        4,
        3,
        4,
        5,
        4,
        5,
        3,
        1,
        3,
        6,
        8,
        3,
        3,
        2,
        1,
        1,
        1,
        1,
        10,
        9,
        8,
      ])
    ).toBe(23);
  });

  test("2x2", () => {
    expect(listSorting(1, [[], []])).toBe(-1);
    expect(listSorting(0, [[0], [1]])).toEqual([0, 0]);
    expect(
      listSorting(2, [
        [2, 2, 2, 2, 2, 2, 2],
        [1, 2],
      ])
    ).toEqual([1, 1]);
    expect(
      listSorting(9, [
        [
          2,
          1,
          2,
          0,
          4,
          5,
          4,
          5,
          6,
          7,
          8,
          8,
          1,
          2,
          1,
          0,
          2,
          3,
          4,
          1,
          3,
          3,
          1,
          3,
          4,
          7,
          8,
          2,
        ],
        [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 0, 1, 2],
      ])
    ).toEqual([1, 10]);
  });

  test("Multidimensional", () => {
    expect(listSorting(1000, [[], [], [], []])).toBe(-1);
    expect(listSorting(1000, [[1000], [0], [1000], [0]])).toEqual([2, 0]);
    expect(
      listSorting(200, [
        [100, 200, 300],
        [300, 200, 100],
        [300, 100, 200],
        [200, 100, 300],
        [100, 200, 300],
      ])
    ).toEqual([4, 1]);
  });

  test("Uneven", () => {
    expect(
      listSorting(1, [
        [1],
        [2, 1],
        [3, 1, 2],
        [1, 2, 3, 4],
        [5, 3, 4, 2, 1],
        [0, 0, 0, 0, 0],
      ])
    ).toEqual([4, 4]);
    expect(
      listSorting(20, [
        [2],
        [2000, 200, 20000],
        [200, 20],
        [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200, 200],
      ])
    ).toEqual([2, 1]);
    expect(
      listSorting(1, [
        [2],
        [2000, 200, 20000],
        [200, 20],
        [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200, 200],
      ])
    ).toBe(-1);
    expect(
      listSorting(10, [
        [1, 2],
        [1],
        [10],
        [1, 2],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6],
        [0],
      ])
    ).toEqual([2, 0]);
  });
});
