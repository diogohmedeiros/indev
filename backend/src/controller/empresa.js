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



module.exports = {

    postEmpresa
}