require('dotenv').config()

const route = require('./rotas/rotas')

const Express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = Express()

app.use(bodyParser.json({limit:"150mb"}))
app.use(Express.json({limit:"150mb"}))


app.use(cors())
app.use(route)

app.listen(process.env.APP_PORT, () => {
    console.log("Servidor rodando na porta 3000")
})