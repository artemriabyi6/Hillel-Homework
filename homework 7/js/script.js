//     Завдання 1 
let arr = []
let userInfo = prompt('Введіть імена гостей')
arr = userInfo.split(' ')
alert(arr)


//     Завдання 2 
arr.sort(function (a, b) {
    return a - b
})
alert(arr)


//     Завдання 3 
arr.splice(2, 3)
alert(arr)

