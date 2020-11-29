const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const userRouter = require("./Routes/userRoute");
const connectDb = require('./Db/connection')

//Connection
connectDb()

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRouter);

app.listen(PORT, () => {
  "Server is Running";
});
