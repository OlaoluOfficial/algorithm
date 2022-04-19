function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      result += s[i].toLowerCase();
    }
    if (i < s.length - 1) {
      result += "-";
    }
  }
  return result;
}