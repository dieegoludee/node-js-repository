const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies.js')

const PORT = process.env.PORT ?? 1234

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  // leer el query param de format
  // const format = req.query.format
  // if (format === 'html') {
  //   res.send('<h1>Hola REST API</h1>')
  // }
  res.json({ message: 'Hola REST API' })
})

// Todos los recursos que sean MOVIES se identifican con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      // utilizamos some() en vez de include() para el case-sensitive
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found!' })
})

app.post('/movies', (req, res) => {
  // const { title, genre, year, director, duration, rate, poster } = req.body
  const result = validateMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }

  // Esto no sería REST, porque estamos guardando el estado de la aplicación en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie)
})

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))
