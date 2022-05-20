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
    let formacao = req.body.formacao
    let estado_civil = req.body.estado_civil
    let email = req.body.email
    let senha = req.body.senha
    let status = false

    cnpj_empresa_atual = (cnpj_empresa_atual === undefined) ? "NULL" : cnpj_empresa_atual
    status_empresa_atual = (status_empresa_atual === undefined) ? false : status_empresa_atual
    foto_usuario = (foto_usuario === undefined) ? "NULL" : foto_usuario
    rg = (rg === undefined) ? "NULL" : rg
    formacao = (formacao === undefined) ? "NULL" : formacao
    estado_civil = (estado_civil === undefined) ? "NULL" : estado_civil

    if(nome !== undefined || telefone !== undefined || email !== undefined || senha !== undefined){

        function retornaString(cpf){

            if(cpf !== undefined){

                return `insert into usuarios (tipo_de_usuario, cnpj_empresa_atual, status_empresa_atual, foto_usuario, nome_usuario, telefone, cpf, rg, formacao, estado_civil, email, senha, status)
                values(${tipo_de_usuario}, '${cnpj_empresa_atual}', ${status_empresa_atual}, '${foto_usuario}', '${nome}', '${telefone}', '${cpf}', '${rg}', '${formacao}', '${estado_civil}', '${email}','${senha}', ${status})`
            }

            else{

                return `insert into usuarios (tipo_de_usuario, cnpj_empresa_atual, status_empresa_atual, foto_usuario, nome_usuario, telefone, rg, formacao, estado_civil, email, senha, status)
                values(${tipo_de_usuario}, '${cnpj_empresa_atual}', ${status_empresa_atual}, '${foto_usuario}', '${nome}', '${telefone}', '${rg}', '${formacao}', '${estado_civil}', '${email}','${senha}', ${status})`

            }
        }

        let string = retornaString(cpf)


        con.query(string, (err, result) => {

            if(err === null){
                res.status(200).json({result}).end()
            }
            else{
                res.status(400).json({err: err.message}).end()
            }
        })
    }
    else{
        res.status(400).json({"err": "informe os campos: nome, telefone, email e senha"}).end()
    }
}

const getAllUsuarios = (req,res) => {

    let string = `select * from usuarios`

    con.query(string, (err,result) => {

        if(err === null){

            res.status(200).json(result).end()

        }else{

            res.status(400).json({err: err.message}).end()
        }
    })


}

const loginUsuario = (req,res) => {

    let email = req.body.email
    let senha = req.body.senha
    let string = `select id_usuario, cnpj_empresa_atual, status_empresa_atual, foto_usuario, nome_usuario, telefone, cpf, rg, formacao, estado_civil, email from usuarios where email = '${email}' and senha = '${senha}'`

    if(email !== undefined && senha !== undefined){

        con.query(string, (err,result) => {

            if(err === null){
                res.status(200).json(result).end()
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe os campos de email e senha"}).end()
    }

}

// métodos para buscar usuarios 

const getUsuariosNome = (req,res) => {

    let nome = req.params.nome_usuario

    if(nome !== undefined){
        let string = `select cnpj_empresa_atual, status_empresa_atual, foto_usuario, nome_usuario, telefone, formacao, estado_civil, email from usuarios where nome_usuario like '%${nome}%'`

        con.query(string, (err,result) => {
            if(err === null){

                res.status(200).json(result).end()

            }else{
                res.status(400).json({err: err.message}).end()
            }
        })
    }else{
        res.status(400).json({"err": "informe o nome do usuario"}).end()
    }


}

const updateUsuario = (req,res) => {

    let id_usuario = req.body.id_usuario
    let cnpj_empresa_atual = req.body.cnpj_empresa_atual
    let status_empresa_atual = req.body.status_empresa_atual
    let foto_usuario = req.body.foto_usuario
    let nome = req.body.nome_usuario
    let telefone = req.body.telefone
    let cpf = req.body.cpf
    let rg = req.body.rg
    let formacao = req.body.formacao
    let estado_civil = req.body.estado_civil

    cnpj_empresa_atual = (cnpj_empresa_atual === undefined) ? "NULL" : cnpj_empresa_atual
    status_empresa_atual = (status_empresa_atual === undefined) ? "NULL" : status_empresa_atual
    foto_usuario = (foto_usuario === undefined) ? "NULL" : foto_usuario
    nome = (nome === undefined) ? "NULL" : nome
    telefone = (telefone === undefined) ? "NULL" : telefone
    cpf = (cpf === undefined) ? "NULL" : cpf
    rg = (rg === undefined) ? "NULL" : rg
    formacao = (formacao === undefined) ? "NULL" : formacao
    estado_civil = (estado_civil === undefined) ? "NULL" : estado_civil


    let string = `update usuarios set cnpj_empresa_atual = '${cnpj_empresa_atual}', status_empresa_atual = ${status_empresa_atual}, foto_usuario = '${foto_usuario}',
    nome_usuario = '${nome}', telefone = '${telefone}', cpf = '${cpf}', rg = '${rg}', formacao = '${formacao}', estado_civil = '${estado_civil}'
    where id_usuario = ${id_usuario}`

    con.query(string, (err,result) => {

        if(err === null){

            res.status(200).json(result).end()

        }else{

            res.status(400).json({err: err.message}).end()
        }
    })

}


// crud enderecos usuarios

// http://viacep.com.br/ws/13910278/json



/*{
    "cep": "13910-278",
    "logradouro": "Rua Mário Venturini",
    "complemento": "",
    "bairro": "Parque Florianópolis",
    "localidade": "Jaguariúna",
    "uf": "SP",
    "ibge": "3524709",
    "gia": "3955",
    "ddd": "19",
    "siafi": "6595"
  }*/


const postEnderecoUsuario = (req, res) => {

    let id_usuario = req.body.id_usuario
    let cep = req.body.cep
    let nome_pais = req.body.nome_pais
    let nome_estado = req.body.nome_estado
    let nome_cidade = req.body.nome_cidade
    let nome_bairro = req.body.nome_bairro
    let nome_rua = req.body.nome_rua
    let numero = req.body.numero
    let complemento = req.body.complemento

    cep = (cep === undefined) ? "NULL" : cep 
    complemento = (complemento === undefined) ? "NULL"  : complemento

    if(nome_pais !== undefined && nome_estado !== undefined && nome_cidade !== undefined && nome_bairro !== undefined && nome_rua !== undefined && 
        numero !== undefined){

            let string = `insert into enderecos_usuario (id_usuario, cep, nome_pais, nome_estado, nome_cidade, nome_bairro, nome_rua, numero, complemento) 
            values(${id_usuario}, '${cep}', '${nome_pais}', '${nome_estado}', '${nome_cidade}', '${nome_bairro}', '${nome_rua}',
            '${numero}', '${complemento}')`

            con.query(string, (err,result) => {

                if(err === null){

                    res.status(200).json(result).end()

                }else{
                    res.status(400).json({err: err.message}).end()
                }
            })
    }else{
        res.status(400).json({"err": "preencha os campos: 'nome_pais', 'nome_estado', 'nome_cidade', 'nome_bairro', 'nome_rua', 'numero'"}).end()
    }
}

const getAllEnderecosUsuarios = (req,res) => {

    let string = `select * from enderecos_usuario`

    con.query(string, (err,result) => {

        if(err === null){
            res.status(200).json(result).end()
        }else{
            res.status(400).json({err: err.message}).end()
        }
    })

}

const getEnderecosUsuarios = (req,res) => {

    let nome = req.params.nome

    if(nome !== undefined){

        let string = `select * from vw_endereco_usuario where nome_usuario like '%${nome}%'`

        con.query(string, (err,result) => {

            if(err === null){

                res.status(200).json(result).end()

            }else{

                res.status(400).json({err: err.message}).end()

            }
        })

    }else{
        res.status(400).json({"err": "informe o nome do usuario"}).end()
    }
}



module.exports = {

    postUsuario,
    getAllUsuarios,
    loginUsuario,
    getUsuariosNome,
    updateUsuario,
    postEnderecoUsuario,
    getAllEnderecosUsuarios
}