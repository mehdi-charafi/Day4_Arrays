let nums = [3, 7, 3, 9, 3]
let target = 3
let collection = []
for (let i in nums) {
   if (nums[i] == 3) {
     collection.push(i)
   } 
}

console.log(collection)