const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3012
const merge = require('./mergeFunction')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<h1>Simple web app</h1>')
})

app.get('/api/shout/:word', (req, res) => {
  const modified = req.params.word.toUpperCase() + '!!!'
  res.set('Content-type', 'application/text')
  res.status(200).send(modified)
})

app.post('/api/array/merge', (req, res) => {
  const {a, b} = req.body
  if (!Array.isArray(a) || !Array.isArray(b)) {
    res.set('Content-type', 'application/json')
    return res.status(400).json({error: 'Both keys in request body must be of type Array.'})
  }
  res.set('Content-type', 'application/json')
  res.status(200).json({result: merge(a,b)})
})

app.listen(port, () => console.log('Runnin on port: ' + port))
