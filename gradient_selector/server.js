const express = require('express');
const PORT = 5000;
const app = express();
const connectDB = require('./Config/database')

connectDB();
app.use(express.json())
app.use("/gradient",require('./Routes/api/gradient'));
app.listen(PORT,()=>console.log(`Server is running at : localhost:${PORT}`));