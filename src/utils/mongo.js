const username = "admin";
const password = "admin1234";
const cluster = "healing.vwjzm";
const dbname = "test";
const mongoose = require("mongoose");

const uri = "mongodb+srv://admin:admin1234@healing.vwjzm.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

let isConnected;
let db;
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
  
module.exports = async function connectToDatabase() {
  console.log("connectToDatabase...");
  
  mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

//   console.log("=> using new database connection");
//   db = await mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });
//   isConnected = db.connections[0].readyState;
//   return db;
};

