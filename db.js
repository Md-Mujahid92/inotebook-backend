const mongoose = require("mongoose");
const mogoURI = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = () => {
  mongoose.connect(mogoURI, () => {
    console.log("Connect to Mongo Successfully");
  });
};

module.exports = connectToMongo;
