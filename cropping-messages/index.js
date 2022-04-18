function solution (message, K) {
  const slice = message.slice(0, K).trim();
  const words = message.trim().split(' ');
  const newArr = slice.split(' ');

  if (!(words.includes(newArr[newArr.length - 1]))) {
    newArr.pop()
    newArr
  }
  const result = newArr.join(' ')
  return result
  // return newArr.join(' ')
}