function staircase(n) {
  // Write your code here
  let steps = ''
  for (let i = 1; i <= n; i++) {
    steps += ' '.repeat(n - i) + '#'.repeat(i);
    if (i !== n) steps += '\n';
  } 
  console.log(steps);
}
