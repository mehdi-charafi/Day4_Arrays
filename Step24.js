const arr = [2, 5, 8, 5];



    let sum = 0;
    let averge = 0;
    let min = arr[0]
    let max = 0

    for (let i of arr) {

        sum += i
        if (i > max) {
            max = i
        }
        if (i < min) {
            min = i
        }
    }
    
    averge = sum / arr.length
    console.log("sum:", sum)
    console.log("average:", averge)
    console.log("min:", min)
    console.log("max:", max)
