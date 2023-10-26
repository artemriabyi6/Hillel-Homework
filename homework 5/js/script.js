 
// let nums = '1234634054363'

// for(let i = 0; i < nums.length; i++) {
//    console.log(nums[i])
// }


// let arr = [{
//    name: 'Bob',
//    age: 22,
//    sex: 'male'
// },
// {
//    name: 'Alina',
//    age: 22,
//    sex: 'female'
// },
// {
//    name: 'Artem',
//    age: 22,
//    sex: 'male'
// },
// {
//    name: 'Bib',
//    age: 22,
//    sex: 'male'
// },
// {
//    name: 'Denys',
//    age: 22,
//    sex: 'male'
// },
// {
//    name: 'Anna',
//    age: 22,
//    sex: 'female'
// }];

// let count = 0;
// for(let i = 0; i < arr.length; i++){
//    if(arr[i].sex === 'female'){
//       continue
//    }
//    count++
// }

// console.log('num of males:', count)






// let arr = [{
//    sport: 'basketball'
// },
// {
//    sport: 'football'

// },
// {
//    sport: 'basketball'
   
// },
// {
//    sport: 'football'

// },
// {
//    sport: 'football'

// },
// {
//    sport: 'football'
// }]

// let count1 = 0;

// for(let i = 0; i < arr.length; i++) {
//    if(arr[i].sport === 'football'){
//       continue;
//    }
//    count1++
// }


// let count2 = 0;

// for(let i = 0; i < arr.length; i++) {
//    if(arr[i].sport === 'basketball'){
//       continue;
//    }
//    count2++
// }
// console.log('num of football players:', count2)
// console.log('num of basketball players:', count1)
// let nums = '10 11 12 13 14 15 16 17 18 19 20'
// let message = ''

// for(let i = 0; i < nums.length; i++){
//    message = `${nums[0],[1]} ${nums[2],[3]} ${nums[2]} ${nums[3]} ${nums[4]} ${nums[5]} ${nums[6]}`
// }
// console.log(message)

//     1 Завдання
/*let nums = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20]
let string = '';
for(let i = 0; i < nums.length - 1; i++) {
   string += nums[i] + ', '
}
string += nums[10];
alert(string)*/



//     2 Завдання 
// let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let someComputed
// for(let i = 0; i < arr.length; i++) {
//     someComputed = arr[i]** 2
//    console.log(someComputed)
// }


//     3 Завдання
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count;
let i = 0;
do{
 count = arr[i] * 7
 console.log(count)
 i++
} while(i < arr.length)*/


//     4 Завдання
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let someComputed = 0;
for(let i = 0; i < arr.length; i++){
   someComputed += arr[i] 
}
console.log(someComputed)*/



//      5 Завдання
/*let arr = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35 ]

let someComputed = 1;
for(let i = 0; i < arr.length; i++) {
   someComputed *= arr[i]
}
console.log(someComputed)*/



//      6 Завдання
/*let arr = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41 ,42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
let someComputed = 0;
for(let i = 0; i < arr.length; i++) {
   if(arr[i] % 2 === 0) {
      someComputed += arr[i]
      console.log('Сумма парних чисел в цій ітерації :', someComputed)
   } else{
      console.log('Це число не парне : ',arr[i])
   }

}
console.log('Загальна сума всіх парних чисел дорівнює :', someComputed)*/



//     7 Завдання
/*let result;
let someComputed;
for(let i = 0; i < 500; i++){
 someComputed = 500 *(500 + 1) / 2
 result = someComputed / 500
}
console.log(result)*/



//      8 Завдання
/*for(let i = 100; i < 200; i++){
   if(i % 3 === 0){
      console.log(i)
   }
}*/



//      9, 10, 11 Завдання
// let number = 100
// let amount = 0;
// for(let i = 0; i <= number; i++ ){
//    if(number % i === 0){
//       console.log(i)
//       if(i % 2 === 0){
//          console.log(i)
//          amount += i
//       }
//       console.log(amount)
//    }
   
// }



//     12 Завдання
/*let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;

let nums1 = 1;
let nums2 = 2;
let nums3 = 3;
let nums4 = 4;
let nums5 = 5;
let nums6 = 6;
let nums7 = 7;
let nums8 = 8;
let nums9 = 9;
let nums10 = 10;
for(let i = 1; i <=10; i++){
   count1 = nums1 * i
   console.log(count1)
   count2 = nums2 * i
   console.log(count2)
   count3 = nums3 * i
   console.log(count3)
   count4 = nums4 * i
   console.log(count4)
   count5 = nums5 * i
   console.log(count5)
   count6 = nums6 * i
   console.log(count6)
   count7 = nums7 * i
   console.log(count7)
   count8 = nums8 * i
   console.log(count8)
   count9 = nums9 * i
   console.log(count9)
   count10 = nums10 * i
   console.log(count10)        
}*/


let tableNums = ''
for(a = 1; a < 10; a++) {
   for(b = 1; b < 10; b++) {
      tableNums += a * b + ' '
   }
   alert(`Таблиця множення на ${a}`)
   alert(tableNums)
   tableNums = ''
}

   