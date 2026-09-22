// step7
const arr = [1, 2]
arr = [4, 5]
console.log(arr)
// it wont work becouse the array location is constant and never change.

arr.push(3)
console.log(arr)
// it will work becouse you can still change the values inside the location of array.