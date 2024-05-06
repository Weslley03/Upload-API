const express = require('express')
require('dotenv').config()

const port = process.env.PORT 
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Tela Inicial')
})

app.listen(port, () => {
    console.log('rodando')
})