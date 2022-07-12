// 1 Функции

// Function Expression  // Только перед объявлением
// const greet2 = function greet2(name) {
//     console.log('Hello 2 -', name)
// }

// greet('Лена')
// greet2('Лена')

// Function Declaration  // Можно её написать после объявления
// function greet(name) {
//     console.log('Hello -', name)
// }

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 11
// const interval = setInterval(function () {
//     console.log(--counter)
//     if (counter === 0) {
//         console.log('Бабах')
//         clearInterval(interval) // clear Timeout
//     }
// }, 1000)

// 3 Стрелочные функции

function greet(name) {
    console.log('Hello -', name)
}

const arrow = (name) => {
    console.log('Hello -', name)
}

const arrow2 = name => console.log('Привет -', name)

// arrow2('Даниил')

const pow2 = num => num ** 2
// console.log(pow2(5))
// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b
// console.log(sum(41, 4))
// console.log(sum())

function sumAll (...all) {
let result = 0
    for (let num of all) {
        result +=num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const lowWIthLastName = createMember('Даниил ')
console.log(lowWIthLastName('Горобцов'))
