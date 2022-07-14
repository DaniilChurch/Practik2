const cars = ['Мазда','Форд','БМВ','Мерседес']

const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Рено')
// cars.unshift('Волга')
// console.log(cars)
//
// const FirstItem = cars.shift()
// const LastItem = cars.pop()
// cars.shift()
// console.log(cars)
// console.log(FirstItem)
// console.log(LastItem)

// console.log(cars)
// console.log(cars.reverse())
// console.log(cars.)

// const index = (cars.indexOf('БМВ'))
// cars[index] = 'Porsche'
// console.log(cars)
// let findPerson
// for (const person of people) {
//     if (person.budget === 3700) {
//         findPerson = person
//     }
// }

// const index = (people.findIndex(function(person) {
// return person.budget === 3700
// }))
// const person = (people.find(function (person) {
// return person.budget === 3700
// }))
// const person = people.find(person => person.budget === 3700)
// console.log(findPerson)

// console.log(cars.includes('Мазда'));

// const upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars)
// console.log(cars)

const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num =>num > 20)
console.log(pow2Fib)
console.log(filteredNumbers)
//.map - преобразует данные
//.filter - Фильтрует данные
// Задача 1
// const text = 'Привет, мы изучаем JS'
// console.log(text)
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Даниил', budget:4300},
    {name: 'Elena', budget:3700},
    {name: 'Viktoria', budget:1500}
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)