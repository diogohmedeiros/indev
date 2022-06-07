const { con } = require("../database/connection")


const postEnderecoEmpresa = (req,res) => {

    let id_empresa = req.body.id_empresa
    let cep = req.body.cep
    let nome_pais = req.body.nome_pais
    let nome_estado = req.body.nome_estado
    let nome_cidade = req.body.nome_cidade
    let nome_bairro = req.body.nome_bairro
    let nome_rua = req.body.nome_rua
    let numero = req.body.numero
    let complemento = req.body.complemento

    cep = (cep !== undefined) ? cep : "Sem registro"
    complemento = (complemento !== undefined) ? complemento : "Sem registro"


    if(id_empresa !== undefined && nome_pais !== undefined && nome_estado !== undefined && nome_cidade !== undefined && nome_bairro !== undefined
        && nome_rua !== undefined && numero !== undefined){


            let string = `insert into enderecos_empresa (id_empresa, cep, nome_pais, nome_estado, nome_cidade, nome_bairro, nome_rua, numero, complemento) values
            (${id_empresa}, '${cep}', '${nome_pais}', '${nome_estado}', '${nome_cidade}', '${nome_bairro}', '${nome_rua}', '${numero}', '${complemento}')`


            con.query(string, (err,result) => {

                if(err === null){
                    res.status(200).json(result).end()
                }else{
                    res.status(400).json({err: err.message}).end()
                }

            })



        }

    else{
        res.status(400).json({"err": "informe os campos id_empresa, nome_pais, nome_estado, nome_cidade, nome_rua, numero"}).end()
    }    
}

const getAllEnderecos = (req,res) => {

    let string = `select * from vw_enderecos_empresas`

    con.query(string, (err,result) => {
        if(err === null){
            res.status(200).json(result).end()
        }else{
            res.status(400).json({err: err.message}).end()
        }
    })
}


const getEnderecosID = (req,res) => {

    let id_empresa = req.params.id_empresa

    if(id_empresa !== undefined){

        let string = `select * from vw_enderecos_empresas where id_empresa = ${id_empresa}`

        con.query(string, (err,result) => {
            if(err === null){
                res.status(200).json(result[0]).end()
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe o id_empresa"}).end()
    }

}


const getEnderecosNome = (req,res) => {

    let nomeEmpresa = req.body.nomeEmpresa

    if(nomeEmpresa !== undefined){

        let string = `select * from vw_enderecos_empresas where nome_empresa like '%${nomeEmpresa}%'`

        con.query(string, (err,result) => {
            if(err === null){
                res.status(200).json(result[0]).end()
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe o nome da empresa"}).end()
    }
}


const atualizarEndereco = (req,res) => {

    let id_empresa = req.body.id_empresa
    let cep = req.body.cep
    let nome_pais = req.body.nome_pais  
    let nome_estado = req.body.nome_estado
    let nome_cidade = req.body.nome_cidade
    let nome_bairro = req.body.nome_bairro
    let nome_rua = req.body.nome_rua
    let numero = req.body.numero
    let complemento = req.body.complemento


    function retornaStringSQL(){

        if(cep !== undefined && complemento !== undefined){

            return `update enderecos_empresa set cep = '${cep}', nome_pais = '${nome_pais}', nome_estado = '${nome_estado}', 
            nome_cidade = '${nome_cidade}', nome_bairro = '${nome_bairro}', nome_rua = '${nome_rua}', numero = '${numero}', complemento = '${complemento}'
            where id_empresa = ${id_empresa}`
        
        }
        else if(cep !== undefined && complemento === undefined){

            return `update enderecos_empresa set cep = '${cep}', nome_pais = '${nome_pais}', nome_estado = '${nome_estado}', 
            nome_cidade = '${nome_cidade}', nome_bairro = '${nome_bairro}', nome_rua = '${nome_rua}', numero = '${numero}'
            where id_empresa = ${id_empresa}`
        
        }

        else if(cep === undefined && complemento !== undefined){

            return `update enderecos_empresa set nome_pais = '${nome_pais}', nome_estado = '${nome_estado}', 
            nome_cidade = '${nome_cidade}', nome_bairro = '${nome_bairro}', nome_rua = '${nome_rua}', numero = '${numero}', complemento = '${complemento}'
            where id_empresa = ${id_empresa}`
        
        }

        else if(cep === undefined && complemento === undefined){
            return `update enderecos_empresa set nome_pais = '${nome_pais}', nome_estado = '${nome_estado}', 
            nome_cidade = '${nome_cidade}', nome_bairro = '${nome_bairro}', nome_rua = '${nome_rua}', numero = '${numero}'
            where id_empresa = ${id_empresa}`
        
        }

    }



    let string = retornaStringSQL()

    con.query(string, (err,result) => {
        if(err === null){
            res.status(200).json(result).end()
        }else{
            res.status(400).json({err: err.message}).end()
        }
    })

}



module.exports = {
    postEnderecoEmpresa,
    getAllEnderecos,
    getEnderecosID,
    getEnderecosNome,
    atualizarEndereco
}

