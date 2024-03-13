const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config()

const app = express();
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(`mongodb+srv://tuanpcl7103:${process.env.MONGO_DB}@cluster0.yxd7aha.mongodb.net/`)
    .then(() => {
        console.log("connect Db success!")
    })
    .catch(() => {
        console.log(err)
    })

app.listen(port, () => {
    console.log('Server is running in port: '+port)
})