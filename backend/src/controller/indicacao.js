const { con } = require("../database/connection")



async function buscarBD(string){

    return new Promise((resolve,reject) => {

        con.query(string, (err,result) => {
            if(err === null){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}





const postIndicacao = async (req,res) => {

    let indicador = req.body.indicador
    let nome_indicado = req.body.nome_indicado
    let cnpj_empresa = req.body.cnpj_empresa


    if(indicador !== undefined && nome_indicado !== undefined && cnpj_empresa !== undefined){



        let stringIndicado = `select id_usuario from usuarios where nome_usuario like '%${nome_indicado}%'`
        let stringEmpresa = `select id_empresa from empresas where cnpj = '${cnpj_empresa}'`

        let id_indicado = await buscarBD(stringIndicado)
        
        let id_empresa = await buscarBD(stringEmpresa)


        if(id_indicado.length > 0 && id_empresa.length > 0){

            let id_ind = id_indicado[0].id_usuario
           
            let id_emp = id_empresa[0].id_empresa

            let string = `insert into indicacoes (id_indicador, id_empresa_indicador, id_indicado) values(${indicador},
                ${id_emp}, ${id_ind})`

            con.query(string, (err,result) => {
                if(err === null){
                    res.status(200).json(result).end()
                }else{
                    res.status(400).json({err: err.message}).end()
                }
            })

        }else{
            res.status(400).json({"err": "indicado ou id_empresa não encontrado"})
        }
        
    }else{
        res.status(400).json({"err": "informe os campos indicador, nome_indicado, cnpj_empressa"}).end()
    }
}



module.exports = {

    postIndicacao
}