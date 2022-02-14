const express = require("express");
const app = express();
const result = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.PORT|| 5000;
const cors = require("cors");
app.use(cors());

app.get('/results', (req, res) => {
  res.json(result)
})

app.get('/results/:id', (req, res) => {
    res.json(result.find(result => result.id === req.params.id))
})

app.post('/results', (req, res) => {
    result.push(req.body)
    res.status(201).json(req.body)
})

app.put('/results/:id', (req, res) => {
    const updateIndex = result.findIndex(result => result.id === req.params.id)
    res.json(Object.assign(result[updateIndex], req.body))
  })

  
app.delete('/results/:id', (req, res) => {
    const deletedIndex = books.findIndex(result => result.id === req.params.id)
    books.splice(deletedIndex, 1)
    res.status(204).send()
 })
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});