let bbis = 40
let bek = 120
const sbis = 100
const a = 5
const b = 11
console.log('Стоимость бизнес класса', sbis +'$ 40шт')
console.log('Стоимость эконом класса', sbis / 2 +'$ 120шт')
console.log('Нераспроданных билетов бизнес класса', a + 'шт')
console.log('Нераспроданных билетов эконом класса', b + 'шт')
bbis = bbis - a
bek = bek - b
console.log('Билетов бизнесс класса',bbis + 'шт')
console.log('Билетов эконом класса',bek + 'шт')
console.log('Доход авиакомпании',bbis * sbis + bek * (sbis / 2) + '$')