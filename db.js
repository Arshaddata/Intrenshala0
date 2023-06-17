const mongoose = require("mongoose");

const URL =
  "mongodb+srv://Arshadnode1:DT0OUAqkxKEOmFiW@arshad.n6jxacv.mongodb.net/event-library";

const connection = mongoose.createConnection(URL, {
  useNewUrlParser: true,
  maxPoolSize: 10,
});

connection.on("error", function (err) {
  console.log(err);
});

connection.once("open", function (data) {
  console.log("db connected ✅");
});

module.exports = connection;
