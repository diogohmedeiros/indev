const { con } = require("../database/connection")


async function postBeneficios(string){

    return new Promise((resolve,reject) => {

        con.query(string, (err,result) => {
            if(err === null){
                resolve(result)
            }
            else{
                reject(err)
            }
        })
    })
}

function deletarErrorVaga(string){

    con.query(string, (err,result) => {

        if(err === null){
            return result
        }else{
            return err
        }
    })

}



const postVaga = (req,res) => {
    let id_vaga
    let id_empresa = req.body.id_empresa
    let cidade = req.body.cidade
    let cargo = req.body.cargo 
    let salario = req.body.salario
    let descricao = req.body.descricao
    let expediente = req.body.expediente
    let data_encerramento_vaga = req.body.data_encerramento_vaga
    let email_de_contato = req.body.email_de_contato
    let beneficios = req.body.beneficios
    let requisitos = req.body.requisitos

    let index = 0
    let comerro = false
    let query

    salario = (salario !== undefined) ? salario : "Não informado"
    descricao = (descricao !== undefined) ? descricao : "Não informado"
    expediente = (expediente !== undefined) ? expediente : "Não informado"
    data_encerramento_vaga = (data_encerramento_vaga !== undefined) ? data_encerramento_vaga : "Não informado"
    email_de_contato = (email_de_contato !== undefined) ? email_de_contato : "Não informado"
    beneficios = (beneficios !== undefined) ? beneficios : "Não informado"
    requisitos = (requisitos !== undefined) ? requisitos : "Não informado"

    // como deverá ser este método: 
    // primeiro deve-se criar a vaga para poder capturar o id_vaga gerado
    // logo após deve-se preencher a tabela relac_benef_vaga com o id capturado e os ids dos beneficios


    if(id_empresa !== undefined && cargo !== undefined){

        if(cidade !== undefined){

            let string = `insert into vagas (id_empresa, cidade, cargo, salario, descricao, expediente, requisitos, data_de_publicacao, data_encerra_vaga, email_de_contato, status_vaga) 
            values(${id_empresa}, '${cidade}', '${cargo}', '${salario}', '${descricao}', '${expediente}', '${requisitos}', curdate(), '${data_encerramento_vaga}', '${email_de_contato}', false)`

            con.query(string, async (err,result) => {
    
                if(err === null){
    
                    id_vaga = result.insertId

                    if(beneficios.length > 0){

                        try{

                            con.beginTransaction()

                            do{

                                query = `insert into relac_benef_vaga (id_vaga, id_beneficio) values (${id_vaga}, ${beneficios[index]})`


                                let resposta = await postBeneficios(query)
                                .then(() => {

                                    if (index + 1 === beneficios.length) {
                                        con.commit()
                                        comerro = true;

                                    }
                                }).catch((err) => {
                                    let desfazer = deletarErrorVaga()
                                    console.log(desfazer)
                                    con.rollback()
                                    res.status(400).json({ err }).end()
                                    comerro = true
                                })
                                index++
                            }while(!comerro)
    
                        }
                        catch(erro){

                            res.status(400).json({erro: erro.message}).end()
                        }
                       
                    }else{

                        res.status(200).json(result).end()
                    }

                    res.status(200).json(result).end()


                }else{
                    res.status(400).json({err: err.message}).end()
                }
    
            })
    
        }else{
           
            let queryCidadeEmpresa = `select nome_cidade from enderecos_empresa where id_empresa = ${id_empresa}`

            let n_cidade

            con.query(queryCidadeEmpresa, (err,result) => {

                if(err === null){

                    if(result.length > 0){

                        n_cidade = result[0].nome_cidade

                        let string = `insert into vagas (id_empresa, cidade, cargo, salario, descricao, expediente, requisitos, data_de_publicacao, data_encerra_vaga, email_de_contato, status_vaga) 
                        values(${id_empresa}, '${n_cidade}', '${cargo}', '${salario}', '${descricao}', '${expediente}', '${requisitos}', curdate(), '${data_encerramento_vaga}', '${email_de_contato}', false)`

                    con.query(string, async (err,result) => {
            
                        if(err === null){
            
                            id_vaga = result.insertId

                            if(beneficios.length > 0){

                                try{

                                    con.beginTransaction()

                                    do{

                                        query = `insert into relac_benef_vaga (id_vaga, id_beneficio) values (${id_vaga}, ${beneficios[index]})`


                                        let resposta = await postBeneficios(query)
                                        .then(() => {

                                            if (index + 1 === beneficios.length) {
                                                con.commit()
                                                comerro = true;

                                            }
                                        }).catch((err) => {
                                            let desfazer = deletarErrorVaga()
                                            console.log(desfazer)
                                            con.rollback()
                                            res.status(400).json({ err }).end()
                                            comerro = true
                                        })
                                        index++
                                    }while(!comerro)
            
                                }
                                catch(erro){

                                    res.status(400).json({erro: erro.message}).end()
                                }
                            
                            }else{

                                res.status(200).json(result).end()
                            }

                            res.status(200).json(result).end()


                        }else{
                            res.status(400).json({err: err.message}).end()
                        }
            
                    })

                    }else{
                        res.status(400).json({"err": "informe o nome da ciadade"}).end()
                    }

                }else{
                    res.status(400).json({err: err.message}).end()
                }
            })
  
        }

    }else{
        res.status(400).json({"err": "informe os campos id_empresa e cargo"}).end()
    }

}

const getAllVagas = (req,res) => {

    let string = `select * from vw_vaga_02 where status_vaga = 0`

    con.query(string, (err,result) => {
        if(err === null){
          
           if(result.length == 0) res.status(200).json({"err": "vaga não encontrada"}).end();
           else {
               
            let ar = new Array()
            let obj = {}
            let id_vaga = 0 
            let beneficios = new Array()

            result.forEach((item,index) => {
                

                if(id_vaga === 0){
                    
                    if(index === 0){
                    obj = item
                    id_vaga = item.id_vaga
                    beneficios.push(item.beneficio)
                    
                    obj.beneficio = beneficios
                    
                    ar.push(obj)
                    }
                }
                
                else{
                    
                    if(id_vaga === item.id_vaga){
                        id_vaga = item.id_vaga
                        beneficios.push(item.beneficio)
                        obj.beneficio = beneficios

                    
                    }else{
                       
                        beneficios = new Array()
                       

                        obj = item
                        
                        id_vaga = item.id_vaga
                        
                        beneficios.push(item.beneficio)
                        
                        obj.beneficio = beneficios
                    
                        ar.push(obj)
                    }
                    
                }	
                  
            })

            res.status(200).json(ar).end()
              // ///////////////////////////////
           }

        }else{
            res.status(400).json({err: err.message}).end()
        }
    })
}

const getVagaId = (req,res) => {

    let id_vaga = req.params.id_vaga

    if(id_vaga !== undefined){
       
        let string = `select * from vw_vaga_02 where id_vaga = ${id_vaga} and status_vaga = 0`

        con.query(string, (err,result) => {
            if(err === null){
                //res.status(200).json(result).end()
                if(result.length == 0) res.status(200).json({"err": "vaga não encontrada"}).end();
                else {
                    let vagaret = {};
                    let beneficios = new Array();
                    result.forEach((vaga, index) => {
                        if(index == 0) vagaret = vaga;
                        beneficios.push(vaga.beneficio);
                    })
                    vagaret.beneficio = beneficios;
                    res.status(200).json(vagaret).end();
                }
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })
    }else{
        res.status(400).json({"err": "informe o id_vaga"}).end()
    }
}

const getVagaIDEmpresa = (req,res) => {

    let id_empresa = req.params.id_empresa
    
    if(id_empresa !== undefined){

        let string = `select * from vw_vaga_02 where id_empresa = ${id_empresa} and status_vaga = 0`

        con.query(string, (err,result) => {

            if(err === null){
                if(result.length > 0){
                 
                    let ar = new Array()
                    let obj = {}
                    let id_vaga = 0 
                    let beneficios = new Array()

                    result.forEach((item,index) => {
                        
                        if(id_vaga === 0){
                            
                            if(index === 0){
                            obj = item
                            id_vaga = item.id_vaga
                            beneficios.push(item.beneficio)
                            
                            obj.beneficio = beneficios
                            
                            }
                        }
                        
                        else{
                            
                            if(id_vaga === item.id_vaga){
                                id_vaga = item.id_vaga
                                beneficios.push(item.beneficio)
                                obj.beneficio = beneficios
                            }else{
                            
                                beneficios = new Array()
                                ar.push(obj)

                                obj = item
                                
                                id_vaga = item.id_vaga
                                
                                beneficios.push(item.beneficio)

                                console.log(beneficios)
                                
                                obj.beneficio = beneficios
                            
                                
                            }
                            
                        }	
                        
                    })

                    res.status(200).json(ar).end()
                }else{
                    res.status(400).json({"err": "sem resultados"}).end()
                }
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe o id_empresa"}).end()
    }

}

const getVagaNomeEmpresa = (req,res) => {

    let nome_empresa = req.params.nome_empresa
    
    if(nome_empresa !== undefined){

        let string = `select * from vw_vaga_02 where nome_empresa like '%${nome_empresa}%' and status_vaga = 0`

        con.query(string, (err,result) => {

            if(err === null){
                if(result.length > 0){
                    // res.status(200).json(result).end()
                    
                    let ar = new Array()
                    let obj = {}
                    let id_vaga = 0 
                    let beneficios = new Array()

                    result.forEach((item,index) => {
                        
                        if(id_vaga === 0){
                            
                            if(index === 0){
                            obj = item
                            id_vaga = item.id_vaga
                            beneficios.push(item.beneficio)
                            
                            obj.beneficio = beneficios
                            

                            }
                        }
                        
                        else{
                            
                            if(id_vaga === item.id_vaga){
                                id_vaga = item.id_vaga
                                beneficios.push(item.beneficio)
                                obj.beneficio = beneficios
                            }else{
                            
                                beneficios = new Array()
                                ar.push(obj)

                                obj = item
                                
                                id_vaga = item.id_vaga
                                
                                beneficios.push(item.beneficio)

                                console.log(beneficios)
                                
                                obj.beneficio = beneficios
                            
                                
                            }
                            
                        }	
                        
                    })

                    res.status(200).json(ar).end()
             

                }else{
                    res.status(400).json({"err": "sem resultados"}).end()
                }
               
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe o nome_empresa"}).end()
    }

}

const encerrarVaga = (req,res) => {

    let status_vaga = req.body.status_vaga
    let id_vaga = req.body.id_vaga

    if(id_vaga !== undefined && status_vaga !== undefined){

        let string = `update vagas set status_vaga = ${status_vaga} where id_vaga = ${id_vaga}`

        con.query(string, (err,result) => {
            if(err === null){
                res.status(200).json(result).end()
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })

    }else{
        res.status(400).json({"err": "informe o id_vaga e o status_vaga"}).end()
    }

}



module.exports = {

    postVaga,
    getAllVagas,
    getVagaId,
    getVagaIDEmpresa,
    getVagaNomeEmpresa,
    encerrarVaga
}