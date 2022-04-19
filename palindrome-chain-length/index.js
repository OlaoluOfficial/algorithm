function palindromeChainLength(n) {
  let count = 0;
  while (n !== parseInt(n.toString().split('').reverse().join(''))) {
    n += parseInt(n.toString().split('').reverse().join(''));
    count++;
  }
  return count;
}