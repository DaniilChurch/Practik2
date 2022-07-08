// 1 Number
// const numInteger = 42
// const numFloat = 42.42
// const pow = 10e3
// console.log(numInteger)
// console.log(numFloat)
// console.log(pow)

// const maxInteger = Number.MAX_SAFE_INTEGER
// const minInteger = Number.MIN_SAFE_INTEGER
// console.log('MAX_SAFE_INTEGER',maxInteger)
// console.log('MIN_SAFE_INTEGER',minInteger)
// console.log('pow 53',Math.pow(2, 53) - 1)
// console.log('MAX_VALUE',Number.MAX_VALUE)
// console.log('MAX_VALUE',Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY',Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY)
// console.log('1 / 0', 1 / 0)
// console.log(Number.NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(isNaN(42))
// console.log(Number.isFinite(weird))
// console.log(Number.isFinite(42.42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+(stringInt) + 2)
//
// console.log(parseInt(stringFloat) + 2)
// console.log(parseFloat(stringFloat) + 2)

// console.log(0.4 + 0.2)
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(9007199254740991999.9999n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4 )
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// 3 Math
// console.log(Math.E) //Константа
// console.log(Math.PI) // Константа
// console.log(Math.sqrt(25)) // Квадрат
// console.log(Math.pow(5, 3)) // Возведение в степень
// console.log(Math.abs(-42)) // 42
// console.log(Math.max(42, 12, 23, 422)) // Большее число
// console.log(Math.floor(4.9)) // Округление в меньшую сторону
// console.log(Math.ceil(4.9)) // Округление в большую сторону
// console.log(Math.round(4.9)) // Округление к ближайшему целому
// console.log(Math.trunc(4.9)) // Возврашает целую часть числа
// console.log(Math.random()) // Рандом от 0 - 1

// 4 Example
function getRandomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getRandomBetween(1, 100))
