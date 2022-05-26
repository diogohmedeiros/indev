const express = require('express')

const route = express.Router()
const usuarios = require("../src/controller/usuario")

// rotas relacionadas a tabela usuario
route.post("/cadastrar_usuario", usuarios.postUsuario)
route.get("/buscar_todos_usuarios", usuarios.getAllUsuarios)
route.post("/login_usuario", usuarios.loginUsuario)
route.get("/buscar_usuarios_nome/:nome_usuario", usuarios.getUsuariosNome)
route.get("/buscar_usuarios_cpf/:cpf", usuarios.getUsuariosCPF)
route.put("/atualizar_usuario", usuarios.updateUsuario)

route.post("/cadastrar_endereco_usuario", usuarios.postEnderecoUsuario)
route.get("/buscar_todos_enderecos_usuarios", usuarios.getAllEnderecosUsuarios)
route.put("/alterar_endereco_usuario", usuarios.updateEnderecoUsuario)


module.exports = route