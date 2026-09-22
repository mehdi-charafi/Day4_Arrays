let nums = [34, 86, 12, 95, 13]
let sum = 0
let average = 0

for (let i of nums) {
    sum += i
}

average = sum / nums.length

console.log(Math.round(average * 100) / 100) 