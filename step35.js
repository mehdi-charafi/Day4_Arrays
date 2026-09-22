let nums = [1, 2, 3, 4, 5, 6]
let evens = []
let odds = []

for (let i of nums) {
    if (i % 2 == 0) {
        evens.push(i)
    } else {
        odds.push(i)
    }
}

console.log("evens:", evens)
console.log("odds:", odds)