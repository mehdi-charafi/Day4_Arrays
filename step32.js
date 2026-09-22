let nums = [1, 2, 2, 3, 1, 4]
let newNums = []
let saved = []

for (let i = 0; i < nums.length; i++) {
    if (saved.includes(nums[i])) {
        continue
    } else {
        newNums.push(nums[i])
        saved.push(nums[i])
    }   
}

console.log(newNums)