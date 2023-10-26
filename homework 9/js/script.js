//  let arr = ['maksym', 'andriy', true, false,10, 1, 44, 2, 3, null, '', 9]

// let numbersOnly = arr.filter(function(item) {
//     return typeof item === 'number'
// })
// // console.log(numbersOnly)
// let average = 0
// let amountOfNumbers = 0

// let sortedArr = numbersOnly.filter(function(average = 0, amountOfNumbers = 0) {
//     for(let i = 0; i < numbersOnly.length; i++) {
//         amountOfNumbers += numbersOnly[i]
//     }
//      average = amountOfNumbers / numbersOnly.length

//      return average
// })

// console.log(sortedArr)
// let arr = [1,2,3,4,5,6,7,8,9,10]

// const sum = arr.reduce(function(acc, arr, i){
//     console.log(arr * 2, ':', i)
//     return   arr * 2
// })

// console.log(sum)


// let a = 5
// let b = 6

// let scopeInfo = function(a ,b) {
//     a = 25
//     b = 16
//     return a + b
// } 

// console.log(scopeInfo(a, b))
// console.log(a)
// console.log(b)

let arr = [1,2,3]

arr.reduce((acc, curr) => console.log(acc + curr))


let nums = [1, 2, 3, 4, 5]

let double = n => n * 2

 let doubled = nums.map(double)

 console.log(doubled)
    
