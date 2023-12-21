const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('../01-node/10.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

// con el puerto en 0 busca un puerto libre
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
  })
})
