const mongoose = require("mongoose");

const conn = () => {
 mongoose.connect('mongodb://localhost:27017/lista-de-filmes', {
     useNewUrlParser: true
 }).then(() => {
    return console.log('mongodb online')
 }).catch((err) => {
    return console.log(`ocorreu um erro no serviço ${err}`)
 })
}

module.exports = conn;