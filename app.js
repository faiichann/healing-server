const express = require("express");
const app = express();
const result = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.PORT|| 5000;
const cors = require("cors");
app.use(cors());

const connectToDatabase = require("./src/utils/mongo")
connectToDatabase()

var cardModel = require("./src/models/card.js");

app.get('/results', (req, res) => {
  cardModel.find()
  .then((result) => {
    res.status(200).json({result})
  })
  .catch(function(err) {
    res.status(500).json({ err: err })
    return
  })
})

app.get('/results/:id', async (req, res) => {
  try {
		const cardReult = await cardModel.findOne({ card_id: req.params.id })
    res.status(200).json({cardReult})
	} catch {
		res.status(404)
		res.send({ error: "card not found" })
	}
    
})

app.post('/results', async (req, res) => {
  const payload = req.body
  const saveCard = new cardModel(payload)
  await saveCard.save()
  .then((result) => {
    res.status(200).json({result})
  })
  .catch(function(err) {
    res.status(500).json({ err: err })
    return
  })
})

app.patch('/results/:id', async (req, res) => {
  cardModel.findOneAndUpdate({ card_id: req.params.id }, req.body, {new: true}).then((result) => {
    if (!result) {
        return res.status(404).send({ error: "card not found" });
    }
    res.send(result);
}).catch((error) => {
    res.status(500).send(error);
})
  })

  
app.delete('/results/:id', async (req, res) => {
  try {
		await cardModel.deleteOne({ card_id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "card not found" })
	}
 })

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});