// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { sum, rest, mult } from './sum.mjs'

console.log('return sum: ' + sum(1, 2))
console.log('return rest: ' + rest(1, 2))
console.log('return mult: ' + mult(1, 2))