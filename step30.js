let nums = [20, 13, 5, 43, 9]

function contains(arr, value) {
   for (let i of arr) {
    if (i == value) return true
   }
}

console.log(contains(nums, 5))