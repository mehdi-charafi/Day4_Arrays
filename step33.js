let nums = [4, 9, 2, 9, 7];
let max1 = 0;
let max2 = 0;

for (let i of nums) {
    if (i > max1) max1 = i
}

for (let i of nums) {
    if (i > max2 && i != max1) max2 = i
}

console.log(max2)