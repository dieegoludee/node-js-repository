const express = require('express')
const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => res.json({ message: 'Hello World!' }))
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))
