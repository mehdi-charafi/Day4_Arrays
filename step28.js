let nums = [4, 15, 8, 23, 1]
let newNums = [];
function Limits(arr) {
   for (let i of arr) {
    if (i > 10) newNums.push(i)
   }
}
Limits(nums)
console.log(newNums)