// step9
const nums = [1, 2, 3, 4]
let temp1 = nums.pop()
let temp2 = nums.shift()

nums.unshift(temp1)
nums.push(temp2)

console.log(nums)