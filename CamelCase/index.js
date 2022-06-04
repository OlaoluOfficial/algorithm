function camelcase(s) {
  // Write your code here
  let result = [];
  result.push(1)
  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
        result.push(1)
      }
  }
  return result.length;
}
console.log(camelcase('saveChangesInTheEditor'))