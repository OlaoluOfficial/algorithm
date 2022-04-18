function solution(P,S) {
  let count = S.length;
  let arr = [];
  for (let i = 0; i < P.length; i++) {
    arr[i] = S[i] - P[i];
    // arr
  }

  let remainingSeats = arr.reduce((prev, curr) => prev + curr, 0)
  remainingSeats

  P.sort((a,b) => a - b);
  for (let i = 0; i < P.length; i++) {
    console.log(P[i])
    if (P[i] <= remainingSeats){
      count--
      // count
      remainingSeats -= P[i]
      // remainingSeats
    } else {
      return count;
    }
  }
}