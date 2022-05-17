const { con } = require("../database/connection")

const postUsuario = (req,res) => {

    let nome = req.body.nome
    let tipo_de_usuario = 1
    let cnpj_empresa_atual = req.body.cnpj_empresa_atual
    let status_empresa_atual = req.body.status_empresa_atual
    let foto_usuario = req.body.foto_usuario
    let telefone = req.body.telefone
    let cpf = req.body.cpf
    let rg = req.body.rg
    let cep = req.body.cep 
    let formacao = req.body.formacao
    let estado_civil = req.body.estado_civil
    let email = req.body.email
    let senha = req.body.senha
    let status = false

    cnpj_empresa_atual = (cnpj_empresa_atual === undefined) ? "NULL" : cnpj_empresa_atual
    status_empresa_atual = (status_empresa_atual === undefined) ? false : status_empresa_atual
    foto_usuario = (foto_usuario === undefined) ? "NULL" : foto_usuario
    rg = (rg === undefined) ? "NULL" : rg
    cep = (cep === undefined) ? "NULL" : cep
    formacao = (formacao === undefined) ? "NULL" : formacao
    estado_civil = (estado_civil === undefined) ? "NULL" : estado_civil

    if(nome !== undefined || telefone !== undefined || email !== undefined || senha !== undefined){

        function retornaString(cpf){

            if(cpf !== undefined){

                return `insert into usuarios (tipo_de_usuario, cnpj_empresa_atual, status_empresa_atual, foto_usuario, nome_usuario, telefone, cpf, rg, cep, formacao, estado_civil, email, senha, status)
                values(${tipo_de_usuario}, '${cnpj_empresa_atual}', ${status_empresa_atual}, '${foto_usuario}', '${nome}', '${telefone}', '${cpf}', '${rg}', '${cep}', '${formacao}', '${estado_civil}', '${email}','${senha}', ${status})`
            }

            else{

                return `insert into usuarios (tipo_de_usuario, cnpj_empresa_atual, status_empresa_atual, foto_usuario, nome_usuario, telefone, rg, cep, formacao, estado_civil, email, senha, status)
                values(${tipo_de_usuario}, '${cnpj_empresa_atual}', ${status_empresa_atual}, '${foto_usuario}', '${nome}', '${telefone}', '${rg}', '${cep}', '${formacao}', '${estado_civil}', '${email}','${senha}', ${status})`

            }
        }

        let string = retornaString(cpf)


        con.query(string, (err, result) => {

            if(err === null){
                res.status(200).json({result})
            }
            else{
                res.status(400).json({err: err.message})
            }
        })
    }
    else{
        res.status(400).json({"err": "informe os campos: nome, telefone, email e senha"})
    }
}












module.exports = {

    postUsuario
}