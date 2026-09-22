const nums = [3, 11, 4, 8]

let max = 0;
let min = nums[0];
let difference = 0;

for (let i of nums) {

if (i > max) {
    max = i
}
if (i < min) {
    min = i
}
}

difference = max - min 

console.log(difference)