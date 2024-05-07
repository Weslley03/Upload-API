const express = require('express')
require('dotenv').config()
require('./db.js')

const port = process.env.PORT 
const app = express()

app.use(express.json())

const pictureRouter = require('./routes/picture.js')
app.use('/pictures', pictureRouter)

app.listen(port, () => {
    console.log('rodando')
})