// const name = 'Даниил'
// const age = 15
// console.log(name)
//
// function getAge() {
//     return age
// }

// const output = 'Привет меня зовут ' + name + ' и мой возраст ' + age + ' лет '
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? '15' : '20'} лет`
// console.log(output)
// const output = `
// <div>this is div</div>
// <p>This is p</p>
// `
// console.log(output)

// const name = 'Даниил'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.toLowerCase().startsWith('дан'))
// console.log(name.endsWith('ил'))
// console.log(name.repeat(3))
// const string = '     password          '
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}`
}

const personName = 'Даниил'
const personName2 = 'Горобцов'
const personAge = 15
const personAge2 = -10

const output = logPerson`Имя ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)