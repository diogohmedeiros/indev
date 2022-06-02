const { con } = require("../database/connection")


const postEmpresa = (req,res) => {

    let tipo_de_usuario = 2
    let foto_de_perfil_empresa = req.body.foto_de_perfil_empresa
    let nome_empresa = req.body.nome_empresa
    let telefone = req.body.telefone
    let cnpj = req.body.cnpj
    let email = req.body.email
    let senha = req.body.senha

    if(nome_empresa !== undefined && telefone !== undefined && cnpj !== undefined && email !== undefined && senha !== undefined){

        foto_de_perfil_empresa = (foto_de_perfil_empresa !== undefined) ? foto_de_perfil_empresa : "NULL"
        let string = `insert into empresas (tipo_de_usuario, foto_de_perfil_empresa, nome_empresa, telefone, cnpj, email, senha) values (${tipo_de_usuario}, '${foto_de_perfil_empresa}', '${nome_empresa}', '${telefone}', '${cnpj}', '${email}', '${senha}')`
        
        con.query(string, (err,result) => {
            if(err === null){
                res.status(200).json(result).end()
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })
    }else{
        res.status(400).json({"err": "informe os campos 'nome_empresa', 'telefone', 'cnpj', 'email', 'senha'"}).end()
    }
}


const loginEmpresa = (req,res) => {

    let email = req.body.email
    let senha = req.body.senha 

    if(email !== undefined && senha !== undefined){

        let string = `select id_empresa, foto_de_perfil_empresa, nome_empresa, telefone, cnpj, email from empresas where email = '${email}' and senha = '${senha}'`

        con.query(string, (err,result) => {
            if(err === null){

                if(result.length <= 0){
                    res.status(400).json({"err": "usuario não encontrado"}).end()
                }else{
                    res.status(200).json(result[0]).end()
                }
                
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe os campos email e senha"})
    }

}

const getAllEmpresas = (req,res) => {

    let string = `select * from empresas`

    con.query(string, (err,result) => {
        if(err === null){
            res.status(200).json(result).end()
        }else{
            res.status(400).json({err: err.message}).end()
        }
    })
}

const getCNPJEmpresa = (req,res) => {

    let cnpj = req.params.cnpj

    if(cnpj !== undefined){

        string = `select * from empresas where cnpj = '${cnpj}'`
        con.query(string, (err,result) => {
            if(err === null){


                if(result.length <= 0){

                    res.status(400).json({"err": "cnpj não encontrado"}).end()

                }else{
                    res.status(200).json(result).end()
                }
 
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe o cnpj"}).end()
    }
}

const getNomeEmpresa = (req,res) => {

    let nome_empresa = req.params.nome_empresa

    let string = `select * from empresas where nome_empresa like '%${nome_empresa}%'`

    if(nome_empresa !== undefined){
        con.query(string, (err, result) => {
            if(err === null){
                if(result.length <= 0){
                    res.status(400).json({"err": "nome não encontrado"}).end()
                }else{
                    res.status(200).json(result).end()
                }
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })
    }else{
        res.status(400).json({"err": "informe o nome_da_empresa"}).end()
    }
}



const updateEmpresa = (req,res) => {

    let foto_de_perfil_empresa = req.body.foto_de_perfil_empresa
    let nome_empresa = req.body.nome_empresa
    let telefone = req.body.telefone
    let cnpj = req.body.cnpj
    let novo_email = req.body.novo_email
    let nova_senha = req.body.nova_senha
    let atual_email = req.body.atual_email
    let atual_senha = req.body.atual_senha

    let string = `update empresas set foto_de_perfil_empresa = '${foto_de_perfil_empresa}', nome_empresa = '${nome_empresa}', telefone = '${telefone}', cnpj = '${cnpj}', email = '${novo_email}', senha = '${nova_senha}' where email = '${atual_email}' and senha = '${atual_senha}'`

    if(atual_email !== undefined && atual_senha !== undefined){

        con.query(string, (err,result) => {
            if(err === null){
                res.status(200).json(result).end()
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe os campos email e senha"}).end()
    }
}



module.exports = {

    postEmpresa,
    getAllEmpresas,
    getCNPJEmpresa,
    getNomeEmpresa,
    updateEmpresa,
    loginEmpresa
}