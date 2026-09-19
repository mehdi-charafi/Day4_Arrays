const nums = [2, 0, 3, 6];
let max = 0;

for (let i of nums) {

    if (i > max) max = i
}


for (let i in nums) {

    if (max == nums[i]) nums[i] = 0
}


let sum = 0;

for (let i of nums) {

    sum += i
}

console.log(sum)
