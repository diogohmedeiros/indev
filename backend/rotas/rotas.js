const express = require('express')

const route = express.Router()
const usuarios = require("../src/controller/usuario")

// rotas relacionadas a tabela usuario
route.post("/cadastrar_usuario", usuarios.postUsuario)
route.get("/buscar_todos_usuarios", usuarios.getAllUsuarios)
route.post("/login_usuario", usuarios.loginUsuario)
route.get("/buscar_usuarios_nome/:nome_usuario", usuarios.getUsuariosNome)


module.exports = route