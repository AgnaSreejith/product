const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Aagna:Aagna@cluster0.agplqzw.mongodb.net/product')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log('Error :' + err)
    })