// Основы
// // 1 Переменные
// const name = 'Даниил'
// //const lastName = 'Горобцов'
// // let age = 15
// const isProgrammer = true
//
// const _private = 'private'
// const $ = '$'
//
// const widthNum5 = 5
// // const 5widthNum5 = 5 //error
//
// // 2 Мутирование
// // console.log('Имя человека: ' + name + ', возраст: ' + age)
// //alert('Имя человека: ' + name + ', возраст: ' + age)
//
// // const lastName = prompt('Введите фамилию:')
// // alert(name + ' ' + lastName)
//
// // 3 Операторы
// let currentYear = 2022
// const birtYear = 2007
// //const age = currentYear - birtYear
//
// const a = 10
// const b = 5
//
// let c = 32
//c = c + a
// c += 2
// c -= 2
// c *= 2
// c /= 2
//
// console.log(a / b)
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
//
// console.log(++currentYear)
// console.log(c)

// 4 Типы данных
// const isPogrammer = true
// const name = 'Даниил'
// const age = 15
// console.log(typeof isPogrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5 Приоритеты операторов
// const  fullAge = 15
// const birthYear = 2007
// const currentYear = 2022
//
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const cookingStatus = 'fail' // ready, fail, pending
//
// if (cookingStatus === 'ready') {
//     console.log('Печеньки готовы и их можно кушать')
// } else if (cookingStatus === 'pending') {
//         console.log('Печеньки находятся в процессе приготовления')
//     } else {
//     console.log('Где печеньки?:(')
// }

// const isReady = true
//
// if (isReady === true) {
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }

// Тенарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42
// const num2 = '42'
//
// console.log(num1 === num2)

// 7 Булевая логика

// 8 Функции
//  function calculateAge (year) {
//     return 2022 - year
//  }
//
// // console.log(calculateAge(2007))
// // console.log(calculateAge(2008))
// // console.log(calculateAge(2009))
//
// function logInfoAbout (name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени ' + name + 'сейчас имеет возраст ' + age)
//     } else {
//         console.log('Введен некоректный год рождения')
//     }
//
// }
//
// logInfoAbout('Даниил ',2007)

// 9 Массивы
// const cars = ['Мазда','Мерседес','Форд'] // Так правельнее
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
//
// cars[0] = 'Porsh'
// cars[3] = 'Мазда'
// console.log(cars)
// console.log(cars.length)

// 10 Циклы
// const cars = ['Мазда','Мерседес','Форд']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Даниил',
    lastName: 'Горобцов',
    year: 2007,
    languages: ['Ru','En','Ua'],
    hasWife: false,
    greet: function () {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['LastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()








