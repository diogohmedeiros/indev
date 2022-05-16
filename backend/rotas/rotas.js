const express = require('express')

const route = express.Router()
const usuarios = require("../src/controller/usuario")


route.post("/cadastrar_usuario", usuarios.postUsuario)





module.exports = route