// console.log('Hola Mundo')
// console.info('Hola Info')
// console.error('Hola Error')

// sum.js
// function sum (a, b) {
//   return a + b
// }

// const otroNombre = require('./sum')
// CommonJS require module
const { sum } = require('./sum')

console.log(sum(1, 2))