//    exercise 1
// let arr =[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// let arrFilter = arr.filter(function(number) {
//     return number > 0
// })
// alert(`Кількість додатніх елементів складає : ${arrFilter.length}`)
// let amount = arrFilter[0];
// arrFilter.sort(function(number) {
//     amount += number
// })

// console.log(arrFilter)
// alert(`Сумма додатніх елементів складає : ${amount}`)

// //    exercise 2
// function findMinElementAndIndex(arr) {
//     let minValue = Infinity;  // Початкове значення для порівняння
//     let minIndex = -1;  // Початкове значення індексу

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minValue) {
//             minValue = arr[i];
//             minIndex = i;
//         }
//     }

//     return [minValue, minIndex];
// }
// let [minElement, index] = findMinElementAndIndex(arr)
// console.log("Мінімальний елемент: " + minElement);
// console.log("Порядковий номер мінімального елемента: " + index);

//    exercise 3
//  function findMaxElementAndIndex(arrFilter) {
//     let maxValue = 0
//     let maxIndex = 0

//     for(let i = 0; i < arr.length; i++) {
//         if(arrFilter[i] > maxValue) {
//             maxValue = arr[i]
//             maxIndex = i
//         }
//     }

//     return [maxValue, maxIndex]
//  }

//  let [maxElement, maxIndexx] = findMaxElementAndIndex(arrFilter)
// console.log("Максимальний елемент: " + maxElement);
// console.log("Порядковий номер максимального елемента: " + maxIndexx);
// console.log(arrFilter)

// let artemNum = [73, 125, 61, -3, 7, 783, 411, 361, 10, -83, -11, -43, 521, 1000, -431]

// function findMaxElementAndIndex(artemNum) {
//     let maxValue = 0
//     let maxIndex = 0
//     for(let i = 0; i < artemNum.length; i++) {
//         if(artemNum[i] > maxValue) {
//             maxValue = artemNum[i]
//             maxIndex = i
//         }
//     }

//     return [maxValue, maxIndex]
// }

// let [maxValue, maxIndex] = findMaxElementAndIndex(artemNum)
// console.log(maxValue, maxIndex)

// function findMinElementAndIndex(artemNum) {
//     let minvalue = 0
//     let minIndex = 0

//     for(let i = 0; i < artemNum.length; i++) {
//         if(artemNum[i] < minvalue) {
//             minvalue = artemNum[i]
//             minIndex = i
//         }
//     }
//     return [minvalue, minIndex]
// }

// let [minvalue, minIndex] = findMinElementAndIndex(artemNum)
// console.log(minvalue, minIndex)

// let artemNum = [73, 125, 61, -3, 7, 783, 411, 361, 10, -83, -11, -43, 521, 1000, -431]
// let countElementsLessThan0 = 0

// for(let i = 0; i < artemNum.length; i++) {
//     if(artemNum[i] < 0) {
//         countElementsLessThan0++
//     }
// }

// console.log('кількість елементів менших за нуль :',countElementsLessThan0)
// let computeMultipleElementsMoreThan0 = 1
// let findElementsMoreThan0 = 0
// let findEvenElementsMoreThan0 = 0
// let findOddElementsMoreThan0 = 0
// let amountEvenElementsMoreThan0 = 0
// let amountOddElementsMoreThan0 = 0

// for(let i = 0; i < artemNum.length; i++) {
//     if(artemNum[i] > 0 && artemNum[i] % 2 === 0) {
//         findEvenElementsMoreThan0++
//     }
//     if(artemNum[i] > 0 && artemNum[i] % 2 === 1) {
//         findOddElementsMoreThan0++
//     }
//     if(artemNum[i] > 0 && artemNum[i] % 2 === 0) {
//         amountEvenElementsMoreThan0 += artemNum[i]
//     }
//     if(artemNum[i] > 0 && artemNum[i] % 2 === 1) {
//         amountOddElementsMoreThan0 += artemNum[i]
//     }
// }

// for(let i = 0; i < artemNum.length; i++) {
//     if(artemNum[i] > 0) {
//         findElementsMoreThan0++
//     }
//     if(artemNum[i] > 0) {
//         computeMultipleElementsMoreThan0 *= artemNum[i]
//     }
// }
// console.log('Всі додатні елементи :', findElementsMoreThan0)
// console.log('добуток всі додатніх елементів :',computeMultipleElementsMoreThan0)

// console.log('Кількість парних елементів більших за нуль :',findEvenElementsMoreThan0)
// console.log('Кількість не парних елементів більших за нуль :',findOddElementsMoreThan0)
// console.log('Сумма  парних елементів більших за нуль :',amountEvenElementsMoreThan0)
// console.log('Сумма не парних елементів більших за нуль :',amountOddElementsMoreThan0)



// let arr =[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// let maxElement = Math.max(...arr)
// console.log(maxElement)

// function resetArr(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] !== maxElement) {
//             array[i] = 0
//         } 
//     }
// }

// resetArr(arr)
// console.log(arr)