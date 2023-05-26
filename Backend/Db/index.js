const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Aagna:Aagna@cluster0.agplqzw.mongodb.net/')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log('Error :' + err)
    })