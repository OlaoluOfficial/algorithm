function superReducedString(s) {
  // Write your code here
  let result = []
  for (let i = 0; i < s.length; i++) {
      if (result[result.length - 1] === s[i]) {
          result.pop()
      } else {
          result.push(s[i])
      }
  }
  return result.length === 0 ? 'Empty String' : result.join('')
}
