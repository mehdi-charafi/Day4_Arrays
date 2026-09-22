let nums1 = [1, 2, 3]
let nums2 = [3, 4, 5]
let newNums = []
let saved = []

for (let i of nums1) {
    if (saved.includes(i) == false) {
   newNums.push(i)
   saved.push(i)
}
}
for (let j of nums2) {
   if (saved.includes(j) == false) {
   newNums.push(j)
   saved.push(j)
}
}

console.log(newNums)