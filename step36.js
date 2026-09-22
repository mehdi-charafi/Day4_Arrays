let nums = [1, 1, 2, 2, 2, 3, 1, 1, 1, 1]
let saved = 0;
let doubles = 1;
let maxDoubles = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
        doubles++
    } else {
        if (doubles > maxDoubles) {
            maxDoubles = doubles
        }
        doubles = 1
    }
}

console.log(maxDoubles)

