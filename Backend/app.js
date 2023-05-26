const express = require('express'); //! to build backend quickly 
const app = express(); //!instance of express
const cors = require('cors'); //!for cross orgin policy
const PORT = 8745
app.use(cors()); //! "app.use(cors())" means use this cors package when server starts up


app.use(express.json()); //! to parse json data
app.use(express.urlencoded({extended:true})); //! to parse url encoded data
app.use(express.static('public')); //! to serve static files



// DB 
require('./Db') //!mongoose DB connection folder is called here hen server starts up
const PRODUCT = require('./model/product')



app.post('/product',async (req,res)=>{
    try {
        console.log(req.body);
        let item = req.body;


        const saveItem = PRODUCT(item);
        await saveItem.save();
        res.send("Success!");


    } catch (error) {
        res.send(error.message)
    }
})



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})