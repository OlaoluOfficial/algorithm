
const removeDuplicates = (nums) => {
  // console.log(nums)
      let y = 0;
      let counter = 1;
      for (let i = 0; i < nums.length; i++){
          if (nums[y] !== nums[i]){
              y++;
              nums[y] = nums[i]
              counter++;
          }
      }
      let remainder = nums.length - counter;
      
      while (remainder > 0){
        nums.pop()
        remainder--;
      }
  };