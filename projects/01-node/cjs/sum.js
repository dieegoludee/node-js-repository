function sum (a, b) {
  return a + b
}

/**
 *  para obligar a poner el nombre de la función
 *  hay que hacer el module.exports como un objeto pasando la función como key
 */

// CommonJS module export
module.exports = {
  sum
}

// module.exports = sum