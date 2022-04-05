function removeDuplicates(obj) {
  let buffer = [];
  const result = {};
  const keys = Object.keys(obj).sort((a, b) => b - a);
  console.log(keys);
  keys.map((key) => {
    const currentValues = [...obj[key]];
    for (let i = 0; i < currentValues.length; i++) {
      if (buffer.includes(currentValues[i])) {
        obj[key].splice(obj[key].indexOf(currentValues[i]), 1);
      } else {
        buffer.push(currentValues[i]);
      }
    }
    result[key] = obj[key];
    // result.432=a,b,d
  });
  return result;
}

console.log(
  removeDuplicates({
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
  })
);

//   {
//     "11": ["P", "R", "S"],
//     "53": ["C"],
//     "236": ["L", "X", "G", "H"],
//     "432": ["A", "B", "D"]
//   }

console.log(
  removeDuplicates({
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"],
  })
);
//   {
//     "1": ["F", "G"],
//     "2": ["C"],
//     "3": ["A", "B", "D"]
//   }

module.exports = removeDuplicates;