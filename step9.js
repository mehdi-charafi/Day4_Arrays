// step9
const nums4 = [1, 2, 3, 4]
let temp1 = nums4.pop()
let temp2 = nums4.shift()

nums4.unshift(temp1)
nums4.push(temp2)

console.log(nums4)