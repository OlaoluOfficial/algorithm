/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let newArr = [];

  for (let i = 0; i < array[0].length; i++) {
    let transRow = [];
    for (let j = 0; j < array.length; j++) {
      let column = array[j][i];
      // console.log(column);
      transRow.push(column);
      //console.log(transRow);
    }
    newArr[i] = [...transRow];
    //console.log(newArr);
  }
  return newArr;
}
console.log(
  transpose([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  transpose([
    [5, 13, 9],
    [12, 4, 6],
    [17, 8, 3],
    [9, 14, 7],
    [3, 1, 21],
  ])
);

// module.exports = transpose;
