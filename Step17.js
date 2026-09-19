const nums = [3, 9, 1 , 7]
let min = nums[0]
for (let i of nums) {
    
    if (i < min) min = i
}

console.log(min)