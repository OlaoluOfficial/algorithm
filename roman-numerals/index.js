/**
 * Implement the solution in this solution
 * 
 * @param {string} roman The all caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let result = 0;
  roman = roman.toUpperCase();
  let standard = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = 0; i < roman.length; i++) {
    let current = roman[i];
    let currentValue = standard[current];
    let next = roman[i + 1];
    let nextValue = standard[next];

    if (currentValue < nextValue) {
      result -= currentValue;
      console.log(result);
    } else result += currentValue;
  }
  return result;
}

module.exports = romanToDecimal;