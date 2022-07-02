const a = 4
const b = -20
const c = 25

let D = (b * b) - (4 * a * c)
if (D < 0) {
    console.log('Корней нет')
} else if (D === 0) {
    let x = (-b / 2 / a)
    console.log('x =', x)
} else if (D > 0) {
    let x1 = ((-b + Math.sqrt(D)) / 2 / a)
    let x2 = ((-b - Math.sqrt(D)) / 2 / a)
    console.log('x1 =', x1)
    console.log('x2 =', x2)
}