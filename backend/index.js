const express = require('express')
const cors = require('cors')
const port = 3000
const app = express()
const conn = require('./conn/conn')
const gamesRouter = require('./routes/games.routes')

app.use('/games', gamesRouter)
app.use(express.json())
app.use(cors())
conn()
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))