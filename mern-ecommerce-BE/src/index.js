const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require("./routes/index.js");
const bodyParser = require("body-parser");
dotenv.config()

const app = express();
const port = process.env.PORT || 3002

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(bodyParser.json())

routes(app)

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log("connect Db success!")
    })
    .catch(() => {
        console.log(err)
    })

app.listen(port, () => {
    console.log('Server is running in port: '+port)
})