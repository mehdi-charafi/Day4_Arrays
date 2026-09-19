const nums = [1, 2, 4, 5]

let first = nums.shift()
let second = nums.shift()


nums.unshift(3)
nums.unshift(second)
nums.unshift(first)

console.log(nums)