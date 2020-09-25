const mongoose = require('mongoose');
const db = "mongodb://localhost/mern_gradient";

const connectDB = async () =>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
        });
        console.log("Databse Conected Successfully");
    } catch (err) {
        console.log("Error :" + err.message);
        process.exit(1)
    }
}


module.exports = connectDB;