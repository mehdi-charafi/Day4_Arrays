let nums = [1, 2, 3, 4, 5]
let temp = 0;

temp = nums[0];

for (let i = 0; i < nums.length; i++) {
    nums[i] = nums [i+1]
}

nums[nums.length - 1] = temp

console.log(nums)

