const mongoose = require("mongoose");
const username = "admin";
const password = "admin1234";
const cluster = "healing.vwjzm";
const dbname = "test";
const config = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.Promise = global.Promise;
module.exports = async function connectToDatabase() {

const coneectionUrl = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
await mongoose.connect( coneectionUrl, config).then(() => 
console.log('Connected to DB...')
).catch(err =>
  console.log('Cannot connect to DB', err))
};

