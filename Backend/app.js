const express = require ("express");
const app = express(); 
const cors   = require ("cors"); 
const PORT = 8745; 
require("./Db")
 app.use(cors());

 app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
 })