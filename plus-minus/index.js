function plusMinus(arr) {
  // Write your code here
  const len = arr.length;
  let pCount = 0
  let nCount = 0
  let eCount = 0
  let result = []
  arr.forEach((a) => {
      if (a > 0)  pCount++          
      else if (a < 0) nCount++
      else eCount++    
    })
    let first = pCount / len, second = nCount / len, third = eCount / len;
    console.log(first.toFixed(6), "\n" + second.toFixed(6), "\n" + third.toFixed(6));
  }