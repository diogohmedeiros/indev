const express = require('express')

const route = express.Router()
const usuarios = require("../src/controller/usuario")
const empresas = require("../src/controller/empresa")
const vagas = require("../src/controller/vagas")

// rotas relacionadas a tabela usuario
route.post("/cadastrar_usuario", usuarios.postUsuario)
route.get("/buscar_todos_usuarios", usuarios.getAllUsuarios)
route.post("/login_usuario", usuarios.loginUsuario)
route.get("/buscar_usuarios_nome/:nome_usuario", usuarios.getUsuariosNome)
route.get("/buscar_usuarios_cpf/:cpf", usuarios.getUsuariosCPF)
route.get("/buscar_usuario_id/:id_usuario", usuarios.getUsuarioId)
route.put("/atualizar_usuario", usuarios.updateUsuario)

route.post("/cadastrar_endereco_usuario", usuarios.postEnderecoUsuario)
route.get("/buscar_todos_enderecos_usuarios", usuarios.getAllEnderecosUsuarios)
route.get("/buscar_nome_endereco_usuario/:nome", usuarios.getEnderecosUsuarios)
route.put("/alterar_endereco_usuario", usuarios.updateEnderecoUsuario)

// rotas relacionadas à tabela empresa
route.post("/cadastrar_empresa", empresas.postEmpresa)
route.post("/empresa/login", empresas.loginEmpresa)
route.get("/buscar_all_empresas", empresas.getAllEmpresas)
route.get("/buscar_empresa_cnpj/:cnpj" , empresas.getCNPJEmpresa)
route.get("/buscar_empresa_nome/:nome_empresa", empresas.getNomeEmpresa)
route.put("/update_empresa", empresas.updateEmpresa)

route.post("/cadastrar_vaga", vagas.postVaga)
route.get("/buscar_todas_vagas", vagas.getAllVagas)
route.get("/buscar_vaga_id/:id_vaga", vagas.getVagaId)
route.get("/buscar_vaga_id_empresa/:id_empresa", vagas.getVagaIDEmpresa)
route.get("/buscar_vaga_nome_empresa/:nome_empresa", vagas.getVagaNomeEmpresa)
route.post("/encerrar_vaga", vagas.encerrarVaga)
route.put("/atualizar_vaga", vagas.atualizarVagas)

module.exports = route