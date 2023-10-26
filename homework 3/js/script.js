// const getFirstInput = document.getElementById('firstNumber')
// const getSecondInput = document.getElementById('secondNumber')
// const getButtonPlus = document.getElementById('plus')
// const getButtonPMinus = document.getElementById('minus')
// const getButtonMultiple = document.getElementById('multiple')
// const getButtonDivivded = document.getElementById('divided')
// const computeResult = document.getElementById('Result')




// function computedPlus() {
//     getFirstInput.value + getSecondInput.value
//     computeResult.innerHTML = +getFirstInput.value + +getSecondInput.value
// }

// getButtonPlus.addEventListener('click', computedPlus) 


// function computedMinus() {
//     getFirstInput.value - getSecondInput.value
//     computeResult.innerHTML = +getFirstInput.value - +getSecondInput.value
// }

// getButtonPMinus.addEventListener('click', computedMinus) 


// function computedMultiple() {
//     getFirstInput.value * getSecondInput.value
//     computeResult.innerHTML = +getFirstInput.value * +getSecondInput.value
// }


// getButtonMultiple.addEventListener('click', computedMultiple)


// function computedDivided() {
//     getFirstInput.value / getSecondInput.value
//     computeResult.innerHTML = +getFirstInput.value / +getSecondInput.value
// }

// getButtonDivivded.addEventListener('click', computedDivided)

// let question = prompt('Enter what are you gonna do (add, sub, mul, div)?')

// let firstNumber = parseFloat(prompt('Enter first number'))

// let secondNumber = parseFloat(prompt('Enter second number'))
//  let result = ''
//  let operatorValue = ''
    // switch (question === 'add' || question === 'sub' || question === 'mul' || question === 'div') {
    //     case 'add':
    //         result = firstNumber +  secondNumber
    //         alert(result)
    //         break;
    //     case 'sub': 
    //         result = firstNumber - secondNumber
    //         alert(result)
    //         break;
    //     case 'mul': 
    //         result = firstNumber * secondNumber
    //         alert(result)
    //         break;
    //     case 'div': 
    //         result = firstNumber / secondNumber
    //         alert(result)
    //         break;
    // }

    // if(question === 'add') {
    //     result = firstNumber +  secondNumber
    //     operatorValue = '+'
    //     // alert(result)
    // } else if (question === 'sub'){
    //     result = firstNumber - secondNumber
    //     operatorValue = '-'
    //     // alert(result)
    // } else if(question === 'mul') {
    //     result = firstNumber * secondNumber
    //     operatorValue = '*'
    //     // alert(result)
    // } else if( question === 'div') {
    //     result = firstNumber / secondNumber
    //     operatorValue = '/'
    //     // alert(result)
    // } else {
    //     alert('invalid operator')
    // }

   

    // if(isNaN(firstNumber) && isNaN(secondNumber)) {
    //     alert('type a valid numer')
    // } else{
    //     alert(`${firstNumber} ${operatorValue} ${secondNumber} = ${result}`)
    // }

    // let arr = [1, true, 'artem', false, 12, 15, 'bogdan']

    // let onlyNum = arr.filter(function(el) {
    //     return typeof el ===  'number'
    // })
    // console.log(onlyNum)
    // let sum = 0;

    // for(let i = 0; i < onlyNum.length; i++) {
    //     sum += onlyNum[i]
    // }

    // let average = sum / onlyNum.length

    
    // console.log(average)


    // let firstNumber = prompt('enter number')
    // let chooseOperation = prompt('chooseOperation')
    // let secondNumber = prompt('enter number')
    // let result = 0

    // function doMath(x , znak, y ) {
    //     if(znak === '+') {
    //         result = (+x) + (+y)
    //         // alert(result)
    //     } else if(znak === '-') {
    //         result = x - y
    //         // alert(result)
    //     } else if(znak === '*') {
    //         result = x * y 
    //         // alert(result)
    //     } else if(znak === '/') {
    //         result = x / y
    //         // alert(result)
    //     } else if(znak === '%') {
    //         result = x % y
    //         // alert(result)
    //     } else {
    //         alert('Invalid operations')
    //     }

    //     if(isNaN(x) && isNaN(y)) {
    //         alert('type a valid number')
    //     } else{
    //         alert(`${x} ${znak} ${y} = ${result}`)
    //     }
    // } 

    // doMath(firstNumber, chooseOperation, secondNumber)


    // arr = [1, 0, 10, 4, 5]

    // maxElement = Math.max(...arr)
    // console.log(maxElement)

    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] !== maxElement) {
    //         arr[i] = 0
    //     }
    // }
    // console.log(arr)

    // arr.sort(function(a, b) {
    //     return b - a
    // })
    // console.log(arr)

    // let str = prompt('enter')
    // let arr = str.split(' ')
    // let str2 = prompt('enter')
    // let arr2 = str2.split(' ')
    // arr.push(arr2)
    // console.log(arr)


    // function arrays(a, b, c) {
    //     a.push(b)
    // }

    // arrays(arr, arr2)

    // function fillTwoDimensionalArray() {
    //     const numRows = parseInt(prompt("Введіть кількість рядків:"));
    //     const numCols = parseInt(prompt("Введіть кількість стовпців:"));
    
    //     const array = [];
    
    //     for (let i = 0; i < numRows; i++) {
    //         const row = [];
    //         for (let j = 0; j < numCols; j++) {
    //             const value = prompt(`Введіть значення для рядка ${i + 1}, стовпця ${j + 1}:`);
    //             row.push(value);
    //         }
    //         array.push(row);
    //     }
    
    //     return array;
    // }
    
    // const userArray = fillTwoDimensionalArray();
    // console.log("Ваш двомірний масив:", userArray);


    // function fillTwoDimensionalArray()  {
    //     const numRow = parseInt(prompt('Введіть кількість рядків '))
    //     const numCol = parseInt(prompt('Введіть кількість стовпці '))

    //     const array = []


    //     for(let i = 0; i < numRow; i++) {
    //         const row = []
    //         for(j = 0; j < numCol; j++) {
    //             const value = prompt(`Введіть значення для рядка ${i + 1},  стовпця ${j + 1}`)
    //             row.push(value);
    //         }
    //         array.push(row)
    //     }
    //     return array
    // }

    // const userArray = fillTwoDimensionalArray()
    // console.log(userArray)
    
    
    

    // function fillTwoDimensionalArray () {
    //     const numFavTeams = parseInt(prompt('Кількість улюблених команд'))
    //     const numFavPlayers = parseInt(prompt('Кількість улюблених гравців'))

    //     const mainArray = []

    //     for(let i = 0; i < numFavTeams; i++) {
    //         const secondaryArray = []
    //         for(let j = 0; j < numFavPlayers; j++) {
    //             thirdArray = []
    //             const fillArray = prompt(`Введіть значення для рядка ${i + 1}, стовпця ${j + 1}`)
    //             secondaryArray.push(fillArray)
    //             for(let d = 0; d < numFavPlayers; d++) {
    //                 const fillArray2 = prompt('')
    //                 thirdArray.push(fillArray2)
    //             }
    //         }
    //         mainArray.push(secondaryArray)
    //     }

    //     return mainArray

    // }

    // const userArray = fillTwoDimensionalArray()
    // console.log(userArray)

    // let arr = 'l'
    // let str = 'hello world'

    // function deleteLetters (a,b) {
    //     let letterDelete = (prompt('Вкажіть літеру видалення'))
    //     // let countDelete = (prompt('Кільксть видалених елементів'))

    //     for(let i = 0; i < b.length; i++) {
    //         for(let j = 0; j < a.length; j++) {
    //            if(b[i] === a[j]) {
    //             b.replace('l')
    //            }
    //             // console.log(b[i], a[j])
    //         }
    //     }
    //     return b
    // }

    // deleteLetters(arr, str);
    // console.log(deleteLetters(arr, str))

    // let arr = [1, 2, 3, 4, 5]
    // let smallest = 0
    // let bigger = 0
    // function minElement(arr) {
        
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] < smallest) [
    //             smallest = arr[i]
    //         ]
    //     }
    //     return smallest
    // } 

    // console.log(smallest)


    // function maxElement(arr) {
        
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] > bigger) [
    //             bigger = arr[i]
    //         ]
    //     }
    //     return bigger
    // } 

    // console.log(bigger)

    // let biggerElement = maxElement(arr) 
    // let lowerElement = minElement(arr)
    // console.log(biggerElement)
    // console.log(lowerElement)

    // let array = [1, -1, 2, -4, 6]


    // function invert(array) {
    //     for(let i = 0; i < array.length; i++) {
    //       if(array[i] >= 0) {
    //         array[i] = -array[i]
    //       } else {
    //         array[i] = -array[i]
    //       }
    //     }
    //      return array ;
    //   } 

    //   let invertArray = invert(array)
    //   console.log(invertArray)


// let championshipResult = ['3:1', '2:2', '0:1','3:1', '2:2', '0:1','3:1', '2:2', '0:1','3:0']
// let ourPoints = 0;



// function points(array) {
//     label:
//     for(let i = 0; i < array.length; i++) {
//         for(let j = 0; j < 2; j++) {
//             if(j[0] > j[2]) {
//                 ourPoints += 3
                
//             } else if( j[0] === j[2]) {
//                 ourPoints += 1
                
//             } else if (j[0] < j[2]) {
//                 ourPoints += 0
                 
//             }
//             console.log(ourPoints)
//         }
//     }
//   return ourPoints
// }

// totalPoints = points(championshipResult)

//  console.log(totalPoints)

// function calculatePoints(matchResults) {
//     let totalPoints = 0;
    
//     for (let i = 0; i < matchResults.length; i++) {
//         const [x, y] = matchResults[i].split(':').map(Number);
        
//         // if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
//             if (x > y) {
//                 totalPoints += 3;
//             } else if (x === y) {
//                 totalPoints += 1;
//             }
//         // }
//     }
    
//     return totalPoints;
// }

// Example match results
// const matchResults = ['3:1', '2:2', '0:1', '3:1', '2:2', '0:1', '3:1', '2:2', '0:1', '3:0'];

// const totalPoints = calculatePoints(matchResults);
// console.log(`Total points: ${totalPoints}`);




// const matchResults = ['3:1', '2:2', '0:1', '3:1', '2:2', '0:1', '3:1', '2:2', '0:1', '3:0', '1:1', '1:1']

// function calculatePoints(array) {
//     totalpoints = 0;

//     for(let i = 0; i < array.length; i++) {
//         const [x, y] = array[i].split(':').map(Number)
//         if(x > y) {
//             totalpoints += 3
//         } else if( x === y) {
//             totalpoints += 1
//         }
//     }

//     return totalpoints
// }


// const seasonPoints = calculatePoints(matchResults);
// console.log(`Total points is: ${seasonPoints}`)

// let str = 'hello world'


// function changeWords() {
//    let userWishes =  prompt(`Вкажіть як ви хочете змінити цей рядок: '${str}'`)
//    let changedStr = str.replace('hello world', userWishes)
//    return changedStr
// }

// function deletechoseLetters () {
//     let userWishes = prompt('Вкажіть літери, які хочете прибрати з рядка')
    
//     let changedStr = ''
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === userWishes) {
//              changedStr = str.replace(userWishes, '')
//         }
//     }
//     //  let changedStr = str.replace(userWishes, '')
//     return changedStr
// }

// for(let i = 0; i < str.length; i++) {
//     if(str[i] === userWishes) {
//         let changedStr = str.replace(userWishes, '')
//    }
//  }


//  result = deletechoseLetters()
//  alert(`Ваш рядок змінено на : '${result}'`)

// function func(inputString, charactersToRemove) {
//     let result = '';
    
//     for (let i = 0; i < inputString.length; i++) {
//         if (!charactersToRemove.includes(inputString[i])) {
//             result += inputString[i];
//         }
//     }
    
//     return result;
// }

// const originalString = prompt("Вкажіть вихідний рядок");
// const charsToRemove = prompt('Вкажіть літери, які хочете прибрати з рядка')
// const modifiedString = func(originalString, charsToRemove);

// alert(modifiedString); // Виведе: " heo wor"


// let str = 'aaaaartem the bbbbest';
// let charactersToRemove = ['a', 'b', 't', 'e']

// function andriy(s, c) {
//     let result = ''
//     for(let i = 0; i < s.length; i++) {
//         if(!c.includes(s[i])) {
//             result += s[i]
//         }
//     }
//     return result
// }

// let invokedFunction = andriy(str, charactersToRemove)

// console.log(invokedFunction)
// let userName = prompt('what is your name?')

// let Admin = 'Artem'
    

// function greet (name, owner) {
//     
    
//     if(name === owner) {
//     alert('Hello boss')
//     } else if (name !== owner) {
//       alert('Hello guest')
//     }
//   }

  

//   greet(userName, Admin)

// let num = 13
// var summation = function (num) {
//     let countOfIterations = 0;
//     let summ = 0;
//     for(let i = 1; i <= num; i++) {
//         summ += i 
//         countOfIterations++
        
//     }
//     if(summ === num) {
        
//     }
//   return `${countOfIterations} (1 + 2 + 3...${countOfIterations}) --> equals ${summ}`
//   }

//   summation(num)

//   let result = summation(num)
//   console.log(result)

// let num = 27966;


// function summation(num) {
//     let summ = 0
//     let countOfIterations = 0;
//     // num = 136
//     for(let i = 1; i <= num; i++) {
//         summ += i 
//         countOfIterations++
//         if(summ === num + i) {
//             summ = summ - i
//             countOfIterations = countOfIterations -1
//             break;
//         }
//     }
//     return (`${countOfIterations} (1 + 2 + 3 + ...${countOfIterations}) ->  ${summ}`)
// }

// summation(num)
// console.log(summation(num))

// let ar = 'artem';

// for(const char of ar) {
//     console.log(char)
// }


// let sub = ar[2]

// console.log(sub)

// let substr = ar.slice(2, 5)
// console.log(substr)

// console.log(ar.includes('tem' , 2))

// let num = 26
// console.log(num.toString(16))
// console.log(num.toString(8))
// console.log(num.toString(2))

// num = Math.round(26.6)

// console.log(num)

//  let arr = [1,2,3,4,5,6,7,8,9,'a',10,11,12]
// for(let i = 0; i < arr.length; i++) {
//     if(isNaN(arr[i])) {
//         console.log('i am string')
//         break;
//     }
//     console.log(arr[i])
// }

// console.log(isFinite(10 / 0))

// let userInfo = prompt('enter your height')
// alert(parseInt(userInfo))

// let a = ['0:1:', '0:1', '1:2', '0:0', '1:0', '0:1', '1:0'] 
// let points = 0
// function computePoints(x, y) {
//     for(let i = 0; i < a.length; i++) {
//         const [x, y] = a[i].split(':').map(Number)
//         if( x > y) {
//             points += 3
//         } else if(x === y) {
//             points += 1
//         }
//     }
//     return points
// }
// console.log(computePoints())

// let a = ['0:1:1', '0:1', '1:2', '0:0', '1:0', '0:1', '1:0'] 
// let points = 0
//  function computePoints() {
//      for(let i = 0; i < a.length; i++) {
//          const [x, y, z] = a[i].split(':').map(Number)
//          console.log(x, y ,z)
//         if( x > y) {
//             points += 3
//         } else if(x === y) {
//              points += 1
//          }
//      }
//      return points
//  }
//  console.log(computePoints())

// let group = [8, 9, 9, 6, 7, 10, 12]

// let myPoints = [11, 13]
// function betterThanAverage(classPoints, yourPoints) {
//   let avarage;
//   for(let i = 0; i < classPoints.length; i++) {
//     for(let j = 0; j < yourPoints.length; j++) {
//       if(classPoints[i] < yourPoints[j]) {
//         avarage = true
//       } else {
//         avarage = false
//       }
//     }
//   }
//   return avarage
// }

// console.log(betterThanAverage(group, myPoints))
// let group = [8, 9, 9, 6, 7, 10, 12]

// function grow(group){
//     let multiple = 1;
//   for(let i = 0; i < group.length; i++) {
//     multiple *= group[i]
//     console.log(group[i])
//   }
//     return multiple
//   }

// result = grow(group)
// console.log(result)

// const areaOrPerimeter = function(l , w) {
//     let res = ''
//     if(l === w){
//         res = 'its  area'
//     } else {
//         res = 'its perimeter'
//     }
//     return res
// };

// console.log(areaOrPerimeter(1007, 1008))

// function numberToString(num) {
//     return num.toString()
//   }
//   console.log(numberToString(6))


// function areYouPlayingBanjo(name) {
//     let res = ''
//     if(name.startsWith('R') || name.startsWith('r')) {
//       res = `${name}  plays banjo`
//     } else{
//       res = `${name}  does not play banjo`
//     }
//     return res
//   }

//   console.log(areYouPlayingBanjo('Ricardo'))

// let words = ['hello', 'world', 'its', 'me']

// function smash (a) {
//    let res =  a.join(' ')
//     return res
// } 

// console.log(smash(words))

// function opposite(number) {
//     return  parseFloat(-number)
// }

// console.log(opposite(-6.25))

//  let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 1; i < arr.length; i++) {
//     console.log(i)
//     console.log(arr.length)
//     arr.splice(i, 1)
// }
// console.log(arr)

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 1; i < myArray.length; i += 2) {
//   myArray.splice(i, 1);
// }
// console.log(myArray)

// function century(year) {
//     // Divide the year by 100 and round up to the nearest integer
//     const centuryNumber = Math.ceil(year / 100);
//     return centuryNumber;
//   }
  
//   // Example usage:
//   const year = 1701;
//   const result = century(year);
//   console.log(`The year ${year} belongs to the ${result}-th century.`);

// function doubleInteger(i) {
//     return i *2
// }

// console.log(doubleInteger(6))
  
//  let array = [6, 2, 1, 8, 10]

// function findMinElement (array) {
//     let minElement = array[0];
//     for(let i = 1; i < array.length; i++) {
//         if(array[i] < minElement) {
//             minElement = array[i]
//         }
//     }
//     return minElement
// }
// console.log(findMinElement(array))

//  function sumArray(array) {
//     let maxElement = array[0]
//     let minElement = array[0]

//     for(let i = 1; i < array.length; i++) {
//         if(array[i] > maxElement) {
//             maxElement = array[i]
//         }
//     } 

//     for(let i = 1; i < array.length; i++) {
//         if(array[i] < minElement) {
//             minElement = array[i]
//         }
//     }
//     let sum = 0;
//     for(let i = 0; i < array.length; i++) {
//       if(array[i] === maxElement) {
//         sum = sum - maxElement
//       }
//       if(array[i] === minElement) {
//         sum = sum - minElement
//       }
//       sum += array[i]
//     }
//     return sum
//   }
//   console.log(sumArray(array))

// function makeClouser() {
//     let counter = 0;
//     return function () {
//       return  counter += 3
//     }
// }

// const clouser = makeClouser()

// console.log(clouser())
// console.log(clouser())
// console.log(clouser())
// console.log(clouser())
// console.log(clouser())

// const counter = (function() {
//     let privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val
//     }

//     return {
//         increment() {
//             changeBy(3)
//         },

//         decrement() {
//             changeBy(-3)
//         },

//         value() {
//             return privateCounter
//         },
//     };
// })()

// console.log(counter.value())

// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.decrement()
// console.log(counter.value())



// function simpleMultiplication(number) {
//     let res
//  if(number % 2 === 0) {
//    res = number * 8
//  }  else {
//    res = number * 9
//  }
//   return res
// }

// console.log(simpleMultiplication(11))

// let res = ``
// let str = 'artem join to new team';
// let arr = str.split(' ')
// console.log(arr)
// for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split('').reverse().join('')
//     res += arr[i] + ' '
// }

// console.log(res) 


// let digital = nums.toString().split('').reverse()
// console.log(digital)

// function repeatStr(n, s) {
//     let res = '';
//     for(let i = 0; i < n; i++ ) {
//         res += s
//     }
//     return res
// }
// console.log(repeatStr(2, 'i'))

// let s = 'artem'
// let b = s.repeat(5)
// console.log(b)


// function solution(string) {
//     for(let i = 0; i < string.length; i++) {
//       console.log(string[i])
//       if(string[i].toUpperCase()) {
//         string = string + ' '
//       }
//       break
//     }
//     return string
// }

// console.log(solution('camelCase'))

// let string = 'camelCase'
// for(let i = 0; i < string; i++) {
//     console.log(string[i])
//   }


// function breakCamelCase(str) {
//     // Use a regular expression to find uppercase letters following lowercase letters
//     // and insert a space before the uppercase letter
//     return str.replace(/([a-z])([A-Z])/g, '$1 $2');
//   }
  
//   // Example usage:
//   const camelCaseString = "camelCaseString";
//   const result = breakCamelCase(camelCaseString);
//   console.log(result);

// function isPrime(num) {
//     let total;
//     let res;
//     let div;
//     for(let i = 0; i <= num; i++) {
//       if(num % i === 0) {
//         res = num / i
//         div = `${num} divided ${i} equals ${res}`
//         total = true
//       } else{
//         total = false
//       }
//       return total
//     }
//   }

//  console.log(isPrime(5))

// function isPrime (num) {
//     let res;
//   for(let i = (num - 1); i >= 2; i--) {
//       if(num % i === 0) {
//           res = `false : ${i}`
//           break;
//       } else {
//         res = true
//       }
//     }
//     return res
//   }
// console.log(isPrime(283))
  
// let artem = 'artem'

// function count(string) {
//     let charCount = {}
//     for(let char of string) {
//           charCount[char] =  (charCount[char] || 0) + 1 
//         }
//       return charCount
// }

// console.log(count(artem))

// function incrementString (string, num) {
//     let res = `${string}${num + 1}`
//     if(isNaN(num) || num === 0) {
//         res = `${string}1`
//     }
//     return res
//   }

//   console.log(incrementString('foo9'))

//   function incrementString (string) {
//     for(let i = 0; i < string.length; i++) {
//         if(typeof +string[i] === 'number') {
//             console.log(typeof string[i])
//         }
//     }
//   }

//   console.log(incrementString('foo099'))
// let matchResults = ['1:1','1:1','1:1','1:0','0:1','0:1','0:1','2:1','3:1','2:1','2:1','1:1','1:1']
// function Zalishchyky (array) {
//     let seasonPoints = 0;
//     for(let i = 0; i < array.length; i++) {
//         const [x, y] = array[i].split(':').map(Number)
//         if(x > y) {
//             seasonPoints += 3
//         } else if(x === y) {
//             seasonPoints += 1
//         }
//     }
//     return seasonPoints
// }

// console.log(Zalishchyky(matchResults))

// function romanToDecimal(solution) {
//     const romanNumerals = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//     };
  
//     let result = 0;

//     for(let i = 0; i < solution.length; i++) {
//         result+= solution[i]
//     }

//     return result
// }
// console.log(romanToDecimal('XXI'))


// const fibonacci = n => n <= 2 ? 1 : fibonacci(n -1) + fibonacci(n - 2)
// console.log(fibonacci(10))

// let arr = [1,2,3,4,5,6,7,8]
//  const filterArr = arr.reduce(function(acc, el) {
//     return el + acc
//  }, 10)

//  console.log(filterArr)

// function createClouser() {
//     let counter = 0;
//     return function () {
//         return counter++
//     }
// }

// let clouser = createClouser()
// console.log(clouser())
// console.log(clouser())

// let arr = [
//     1, 2, 1, 0, 1,
//     0, 3, 0, 1, 0
//   ]

// function moveZeros(arr) {
//     let res
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] === 0) {
//         res = arr[i]
//         arr.splice(i, 1)
//         arr.push(res)
//         console.log(arr)
//       }
//     }
//     return arr
//    }

//    console.log(moveZeros(arr))


// function squareDigits(num){
//     let transform = num.toString()
//     let numPower = ''
//     let res = 0;
//     for(let i = 0; i < transform.length; i++) {
//         numPower += transform[i] ** 2
//         res = +numPower
//     }
//     return res
// }

// console.log(squareDigits(3212))


// let arr = ['instagram', 'facebook']

// let fixArray = arr.map((el) => {
//     let res = `https://${el}.com`
//     return res
// })
// console.log(fixArray)

// let arr = ['artem', 'bogdan', 'denys']

// let iteraton = arr.map(function (item, index, array) {
//     let res = `${item} Знаходиться на позиції ${index} в масиві ${array}`
//     return res
// })

// console.log(iteraton)
// let numbers = [1,2,3,4,5,6]

// function sumTwoSmallestNumbers(numbers) {  
//     //Code here
//     let res = 0
//     numbers.sort((a, b) => a- b)
//     res = numbers[0] + numbers [1]
//     return res
//   }
//   console.log(sumTwoSmallestNumbers(numbers))

// function getMiddle(s)
// {
//   let nextIndex;
//   let middleIndex;
//   let res = '';
//   if(s.length % 2 === 0) {
//      middleIndex = s.length / 2 - 1
//      nextIndex = middleIndex + 1
//      res = s[middleIndex] + s[nextIndex] 
//   } else {
//     middleIndex = (s.length - 1) / 2
//     res = s[middleIndex]
//   }
//   return res
// }
// console.log(getMiddle('bonjorno'))

// function checkForFactor (base, factor) {
//     // code here
//     let res;
//     if(base % factor === 0) {
//       res = true
//     } else {
//       res = false
//     }
//     return res
//   }
//   console.log(checkForFactor(8, 2))

// function makeClouser () {
//     let counter = 0;
//     return function createClouser() {
//     return counter++
//     }
// }

// let clouser1 = makeClouser()
// console.log(clouser1())
// console.log(clouser1())
// console.log(clouser1())

// let clouser2 = makeClouser()
// console.log(clouser2())
// console.log(clouser2())
// console.log(clouser2())
// console.log(clouser2())
// console.log(clouser2())
// console.log(clouser2())
// console.log(clouser1())


// Lexical Environment
/*globalLexicalEnvironment = {
    makeClouser: makeClouser,
    clouser1: createClouser,
    clouser2: createClouser,

    outer: null
}

makeClouserLexicalEnvironment = {
    counter: 0
    createClouser: createClouser

    outer: globalLexicalEnvironment
}

createClouserLexicalEnvironment = {


    outer: makeClouserLexicalEnvironment

}
*/

// function createIncrement () {

//     let count = 0

//     function increment() {
//         count++
//     }

//     function decrement() {
//         count -= 2
//     }

//     function log() {
//     let message = `Count is ${count}`
//     console.log(message)
//     }

//     return [increment, log, decrement]
    
// }

// const [increment, log, decrement] = createIncrement()
// increment()
// increment()
// increment()
// decrement()
// increment()
// log()


/*LE
globalLE = {
    createIncrement: function,
    [increment, log]: function
    outer: null
}

createIncrementLE = {
    count: 0,
    increment: function,
    message: count,
    log: function
    outer: globalLE
}

incrementLE = {
    outer: createIncrementLE
}

logLE = {
    outer: createIncrementLE
}
*/


// const rps = (p1, p2) => {
//     let res;
//     if(p1 === 'scissors' && p2 === 'paper') {
//       res = 'Player 1 won!'
//     } else if (p1 === 'scissors' && p2 === 'rock') {
//       res = 'Player 2 won!'
//     } else if (p1 === p2) {
//       res = 'Draw!'
//     } else if(p1 === 'paper' && p2 === 'scissors') {
//       res = 'Player 2 won!'
//     } else if(p1 === 'paper' && p2 === 'rock') {
//       res = 'Player 1 won!'
//     } else if(p1 === 'rock' && p2 === 'scissors') {
//       res = 'Player 1 won!'
//     } else if(p1 === 'rock' && p2 === 'paper') {
//       res = 'Player 2 won!'
//     }
//     return res
//   };
//   console.log(rps('scissors', 'scissors'))
// let array = [0, 123, 18 ,663, 10]
// function oddOrEven(array) {
//     //enter code here
//    let sum = 0;
//    let res;
//    for(let i = 0; i < array.length; i++) {
//      sum += array[i]
//    }
//    console.log(sum)
//    sum  % 2 === 0 ? res = 'even' : res = 'odd'
//    return res
//  }

//  console.log(oddOrEven(array))

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     for(let i = dadYearsOld; )
//   }
//   console.log(twiceAsOld(18, 0))

//  function twiceAsOld(fatherAge, sonAge) {
//    let counter = -1
//     if(fatherAge / sonAge >= 2) {
//         for(let i = 0;; i++, fatherAge++, sonAge++) {
//            counter++
//            if(fatherAge / 2 === sonAge) {
//                break
//            }
//         }
//     } else {
//         for(let i = 0;; i++, fatherAge--, sonAge--) {
//             counter++
//             if(fatherAge / 2 === sonAge) {
//                 break
//             }
//          }
//     }
//     return counter
//    }
// console.log(twiceAsOld(37, 19))  

// function Age (father, son) {
//      let counter = -1
//      for(let i = 0;; i++, father++, son++) {
//         counter++
//         // console.log(father, son, counter)
//         if(father / 2 === son) {
//             break
//         }
//      }
//      return counter
//  }

//  console.log(Age(31, 13))

// function Age (father, son) {
//     let counter = -1
//     if(father / son >= 2) {
//         for(let i = 0;; i++, father++, son++) {
//            counter++
//            if(father / 2 === son) {
//                break
//            }
//         }
//     } else {
//         for(let i = 0;; i++, father--, son--) {
//             counter++
//             if(father / 2 === son) {
//                 break
//             }
//          }
//     }
//     return counter
// }

// console.log(Age(36, 18))



//    RECURSION
// function sum(n) {
//     return  n === 1
//     ? 1
//     : n + sum(n - 1)
// }

// let total = sum(5)
// console.log('total is:' , total)


//    CLOUSERS
// let clousers = (function () {
//     let counter = 0;
//     return function(n) {
//        return counter += n
//     }
// })()


// console.log(clousers(5))
// console.log(clousers(8))
// console.log(clousers(10))


// const counter = {
//     state: {
//         counter: 0
//     },

//     ui: {
//         output: document.querySelector('#output'),
//         incrementBtn: document.querySelector('#increment'),
//         decrementBtn: document.querySelector('#decrement'),
//     },

//     increment() {
//         this.state.counter++
//         this.setCounter()
//     },

//     decrement() {
//         this.state.counter--
//         this.setCounter()
//     },

//     setCounter() {
//         this.ui.output.innerHTML = this.state.counter 
//     },

//     init() {
//         this.ui.incrementBtn.addEventListener('click', this.increment.bind(counter))
//         this.ui.decrementBtn.addEventListener('click', this.decrement.bind(this))
//     }
// }

// counter.init()
       // Homework this chain
/*let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() { // показывает текущую ступеньку
        alert(this.step);
        return this
    }
};

ladder.up().up().down().showStep()
*/



//Homework OOP part 2

function Student() {
    this.name = ''

    this.lastName = ''

    this.birtday  = 0

    this.grades = new Array(25)

    this.countOfPresent = new Array(0)
}

Student.prototype.present = function() {
    this.countOfPresent.push(true)
    return this
}
Student.prototype.absent = function() {
    this.countOfPresent.push(false)
    return this
}

Student.prototype.summary = function() {
    let summGrades = 0
    let avarageOfGrades = 0
    for(let i = 0; i < this.grades.length; i++) {
        summGrades += this.grades[i]
        avarageOfGrades = summGrades / this.grades.length
    }
    let summOfPresent = 0
    let avarageOfPresent = 0
    for(let j = 0; j < this.countOfPresent.length; j++) {
        summOfPresent +=  this.countOfPresent[j]
        avarageOfPresent = summOfPresent / this.countOfPresent.length
    }
    if(avarageOfGrades >= 90 && avarageOfPresent >= 0.9) {
        return console.log('molodec')
    } else if( avarageOfGrades < 90 && avarageOfPresent >= 0.9) {
        return console.log('dobre, ale mojna krashche1')
    } else if( avarageOfGrades >= 90 && avarageOfPresent < 0.9) {
        return console.log('dobre, ale mojna krashche2')
    } else if( avarageOfGrades < 90 && avarageOfPresent < 0.9) {
        return console.log('rediska')
    }
}


const artemRiabyi = new Student()
const antonZadereiko = new Student()
const thirdStudent = new Student()

artemRiabyi.grades.fill(100)
artemRiabyi.name = 'Artem'
artemRiabyi.lastName = 'Riabyi'
artemRiabyi.birtday = 2001


artemRiabyi.present().present().present().present().present().present().present().present().present().present().present().present().present().present()
.present().present().present().present().present().present().present().present().present().present().present()

antonZadereiko.present().present().present().present().present().present().present().present().present().present().present().present().present().present()
.present().present().present().present().present().present().present().present().present().present().present()
antonZadereiko.grades.fill(80)
antonZadereiko.name = 'Anton'
antonZadereiko.lastName = 'Zadereiko'
antonZadereiko.birtday = 1999

artemRiabyi.summary()
antonZadereiko.summary()


console.log(artemRiabyi)
console.log(antonZadereiko)
console.log(thirdStudent)

