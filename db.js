const mongoose = require('mongoose')
require('dotenv').config

async function conexao() {
    mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b3uma5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    console.log('banco conectado')
}

conexao().catch(err => {console.log(`ERROR`, err)})

module.exports = conexao