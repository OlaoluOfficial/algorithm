// function that takes in an array of integers and a target integer and returns an array of the indices of the two numbers that add up to the target
var twoSum = function(nums, target) {
  let obj = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (obj.has(diff)) {
      result.push(obj.get(diff), i);
    } else {
      obj.set(num, i);
    }
  }
  return result
};
