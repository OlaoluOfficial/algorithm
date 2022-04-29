function compareTriplets(a, b) {
  let result = [];
  let aCount = 0;
  let bCount = 0;
  for (let i = 0; i < a.length; i++) {
          if (a[i] > b[i]) {
              aCount++
          } else if (a[i] < b[i]) {
              bCount++
          } 
      }
  result.push(aCount, bCount)
  return result   
}
