let nums = [20, 13, 5, 43, 9]

function contains(arr, value) {
   for (let i of arr) {
    if (i == value) {
    return true
}
}
return false
}

console.log(contains(nums, 9)) 