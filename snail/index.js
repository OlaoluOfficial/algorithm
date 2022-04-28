function snail(array) {
  let result = [];
  let row = 0;
  let col = 0;
  let maxRow = array.length - 1;
  let maxCol = array[0].length - 1;

  while (row <= maxRow && col <= maxCol) {
      // top
      for (let i = col; i <= maxCol; i++) {
          result.push(array[row][i]);
      }
      row++
      // right
      for (let i = row; i <= maxRow; i++) {
          result.push(array[i][maxCol]);
      }
      maxCol--;

      // bottom
      for (let i = maxCol; i >= col; i--) {
          result.push(array[maxRow][i]);
      }
      maxRow--;

      // left
      for (let i = maxRow; i >= row; i--) {
          result.push(array[i][col]);
      }
      col++;
  }

  return result;
}