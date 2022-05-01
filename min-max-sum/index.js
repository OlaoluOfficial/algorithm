function minMaxSum(arr) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let total = 0;

  for (let num of arr) {
    if (num > max) max = num
    if (num < min) min = num
    total += num
  }
  console.log((total - max) + " "+ (total - min))
}
