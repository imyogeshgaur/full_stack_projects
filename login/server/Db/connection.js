const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test1234", {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected Sucessfully !!!");
  } catch (error) {
    console.log(`Some Error named ${error} occured !!!!`);
  }
};

module.exports = connectDb;
