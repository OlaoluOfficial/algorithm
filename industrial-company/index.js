const solution = (A) => {
  let filters = 0;
  const totalPollution = A.reduce((prev, curr) => prev + curr, 0)
  let newPollution = totalPollution
  while((totalPollution / 2) < newPollution) {
    A.sort((a,b) => a - b)
    A[A.length - 1] = A[A.length - 1] / 2;
    newPollution = A.reduce((prev,curr) => prev + curr, 0)
    filters++
  }
  return filters
}