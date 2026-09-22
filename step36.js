let nums = [1, 1, 2, 2, 2, 3, 1, 1, 1, 1]
let saved = 0;
let repuCount = 1;
let savedRepus = []

for (let i of nums) {
    if (i == nums[0]) {
        saved = i
        continue
    }
    if (i == saved) {
        repuCount++
    } else {
        savedRepus.push(repuCount)
    }
    saved = i
}

console.log(savedRepus)

