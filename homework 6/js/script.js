//     exercise 1
/*let arr = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let step = 0;
for(i = 0; i < arr.length; i++) {
  step = arr[i]
  console.log(step)
  if(arr[i] % 2 === 0){
    console.log(arr[i] + 0.5)
  } else {
    console.log(arr[i] + 0.5)
  }
}*/




//     exercise 2, 3
/*let arr = [10, 20, 30 ,40, 50, 60, 70, 80, 90, 100]
let gryvni = 0
for(let i = 0; i < arr.length; i++) {
    gryvni = arr[i] * 27
    for(let d = 0; d < 100; d++) {
        if(d ** 2 <= gryvni) {
            console.log(d ** 2)
        }
    }
    console.log(gryvni)
}*/



//     exercise 4
/*let arr = [256, 3, 529, 784, 5, 1296, 2116, 2401, 2601, 7]
label:
for(let i = 0; i < arr.length; i++) {
  for(let d = 2; d < arr[i]; d++) {
    if(arr[i] % d === 0) {
      continue label;
    }
  }
  console.log(arr[i])
}*/



//     exercise 5
/*let arr = [256, 3, 529, 784, 5, 1296, 9, 27, 81, 2116, 2401, 2601, 7, 19683, 531441]
let number3 = 3;
for(let i = 0; i < arr.length; i++) {
  for(let m = 1; m < arr[i]; m++) {
      if(number3 ** m === arr[i]) {
        console.log(arr[i], '=', number3, 'в ступені', m)
      }  
    }
  }*/
