const nums = [4, 9, 2, 9, 1];
let max = 0;
let firstMax;

for (let i of nums) {

    if (i > max) max = i
}


for (let i in nums) {

    if (nums[i] == max) {

        firstMax = i
        break
    }
}

console.log(firstMax)
