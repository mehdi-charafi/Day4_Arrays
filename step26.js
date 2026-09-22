let nums = [1, 2, 3, 4, 5, 6]
let count = 0;

for (let i of nums) {
    if (i % 2 == 0) count++
}

console.log(count)