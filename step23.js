let nums = [3, 5, 4, 3, 2]
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
        sum += nums[i]
    }
}

console.log(sum)