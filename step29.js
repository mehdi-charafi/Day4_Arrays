let nums = [1, 2, 2, 3, 2, 4]
let target = 2
let count = 0

for (let i of nums) {
    if (i == target) count++
}

console.log(count)