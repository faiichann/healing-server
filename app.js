const express = require("express");
const app = express();
const mongoose = require("mongoose");
const result = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.PORT|| 5000;
const cors = require("cors");
app.use(cors());
// const connectToDatabase = require("./src/utils/mongo");
const username = "admin";
const password = "admin1234";
const cluster = "healing.vwjzm";
const dbname = "test";
// const connectMongo = async (req, res, next) => {
//   try {
//     await connectToDatabase();
//     next();
//   } catch (err) {
//     console.log(err);
//   }
// };
// app.use(connectToDatabase);

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// const { Schema } = mongoose;

// const cardSchema = new Schema({
//   id:  Number,
//   username: String,
//   rating:   Number,
//   type: String,
//   goal: String,
//   nft_card: {
//     emoji: String,
//     bg_color: String,
//     caption: String
//   },
//   qoutes: {
//     aurthur: String,
//     qoute: String,
//     img: String
//   }
// });

// const newModel = new mongoose.model("tb_card", cardSchema);
  //  const tbCrad = newModel.find()
  //  console.log(tbCrad)

//  const resultCard = async () => {
//   //  const tbCrad = await newModel.find()
//   //  console.log(tbCrad)
//    const tbCrad = new newModel(
//     {
//       id:  2,
//       username: "userOne",
//       rating: 4,
//       type: "work",
//       goal: "อยากลาออก",
//       nft_card: {
//         emoji: "🤣",
//         bg_color: "red",
//         caption: "susunaaa"
//       },
//       qoutes: {
//         aurthur: "Someone",
//         qoute: "play hard hard",
//         img: "url"
//       }
//     }
//    )
//    tbCrad.save()
//  }
//  resultCard()

// app.get('/results', (req, res) => {
//   res.json(result)
// })

// app.get('/results/:id', (req, res) => {
//     res.json(result.find(result => result.id === req.params.id))
// })

// app.post('/results', (req, res) => {
//     result.push(req.body)
//     res.status(201).json(req.body)
// })

// app.put('/results/:id', (req, res) => {
//     const updateIndex = result.findIndex(result => result.id === req.params.id)
//     res.json(Object.assign(result[updateIndex], req.body))
//   })

  
// app.delete('/results/:id', (req, res) => {
//     const deletedIndex = books.findIndex(result => result.id === req.params.id)
//     books.splice(deletedIndex, 1)
//     res.status(204).send()
//  })

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});