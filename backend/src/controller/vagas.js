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
    let quantidade_de_vagas = req.body.quantidade_de_vagas
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


    console.log(beneficios)

    // como deverá ser este método: 
    // primeiro deve-se criar a vaga para poder capturar o id_vaga gerado
    // logo após deve-se preencher a tabela relac_benef_vaga com o id capturado e os ids dos beneficios


    if(id_empresa !== undefined && cargo !== undefined){

        if(cidade !== undefined){

            let string = (quantidade_de_vagas !== undefined) ?  `insert into vagas (id_empresa, cidade, cargo, salario, descricao, expediente, requisitos, data_de_publicacao, quantidade_de_vagas, data_encerra_vaga, email_de_contato, status_vaga) 
            values(${id_empresa}, '${cidade}', '${cargo}', '${salario}', '${descricao}', '${expediente}', '${requisitos}', curdate(), ${quantidade_de_vagas}, '${data_encerramento_vaga}', '${email_de_contato}', false)` : 
            `insert into vagas (id_empresa, cidade, cargo, salario, descricao, expediente, requisitos, data_de_publicacao, data_encerra_vaga, email_de_contato, status_vaga) 
            values(${id_empresa}, '${cidade}', '${cargo}', '${salario}', '${descricao}', '${expediente}', '${requisitos}', curdate(), '${data_encerramento_vaga}', '${email_de_contato}', false)`


            con.query(string, async (err,result) => {
    
                if(err === null){
    
                    id_vaga = result.insertId

                   

                    if(beneficios !== "Não informado"){

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

            console.log(beneficios)

            con.query(queryCidadeEmpresa, (err,result) => {

                if(err === null){

                    console.log(beneficios)

                    if(result.length > 0){

                        n_cidade = result[0].nome_cidade

                        let string = (quantidade_de_vagas !== undefined) ?  `insert into vagas (id_empresa, cidade, cargo, salario, descricao, expediente, requisitos, data_de_publicacao, quantidade_de_vagas, data_encerra_vaga, email_de_contato, status_vaga) 
                        values(${id_empresa}, '${cidade}', '${cargo}', '${salario}', '${descricao}', '${expediente}', '${requisitos}', curdate(), ${quantidade_de_vagas}, '${data_encerramento_vaga}', '${email_de_contato}', false)` : 
                        `insert into vagas (id_empresa, cidade, cargo, salario, descricao, expediente, requisitos, data_de_publicacao, data_encerra_vaga, email_de_contato, status_vaga) 
                        values(${id_empresa}, '${cidade}', '${cargo}', '${salario}', '${descricao}', '${expediente}', '${requisitos}', curdate(), '${data_encerramento_vaga}', '${email_de_contato}', false)`
            

                    con.query(string, async (err,result) => {
            
                        if(err === null){
            
                            id_vaga = result.insertId

                            if(beneficios !== "Não informado"){

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

    let ar = new Array()
    let vetorIds = []

    let string = `select * from vw_vaga_02 where status_vaga = 0`

    con.query(string, (err,result) => {
        if(err === null){
          
           if(result.length == 0) res.status(200).json({"err": "vaga não encontrada"}).end();
           else {
               
            
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

           
              // ///////////////////////////////

              ar.forEach((item,index) => {
                vetorIds.push(ar[index].id_vaga)
              })

              res.status(200).json(ar).end()
           }

           let stringVagas = `select * from vagas`

        //    con.query(stringVagas, (erro, resultado) => {

        //         if(erro === null){

        //             resultado.forEach((item,index) => {

        //                 vetorIds.forEach((it,idx) => {

        //                     if(resultado[index].id_vaga === vetorIds[idx]){
        //                         resultado.splice(item, 1)
        //                     }

        //                 })
        //             })

        //             resultado.forEach((item,index) => {
        //                 ar.push(item)
        //             })

        //             let vetor = ar

        //             vetor.sort(function (a, b) {
        //                 if (a.id_vaga > b.id_vaga) {
        //                   return 1;
        //                 }
        //                 if (a.id_vaga < b.id_vaga) {
        //                   return -1;
        //                 }
        //                 // a must be equal to b
        //                 return 0;
        //               });

                   


        //             res.status(200).json(vetor).end()

        //         }else{
        //             res.status(400).json(erro).end()
        //         }

        //    })

        }else{
            res.status(400).json({err: err.message}).end()
        }
    })
}

const getVagaId = (req,res) => {

    let id_vaga = req.params.id_vaga
    let resposta 

    if(id_vaga !== undefined){

        let query = `select * from relac_benef_vaga where id_vaga = ${id_vaga}`

        con.query(query, (erro,resultado) => {

            if(erro === null){

                resposta = resultado

                if(resultado.length > 0){

                    let string = `select * from vw_vaga_02 where id_vaga = ${id_vaga} and status_vaga = 0`
            
                    con.query(string, (err,result) => {
                        if(err === null){
                            //res.status(200).json(result).end()
                            if(result.length == 0) res.status(400).json({"err": "vaga não encontrada"}).end();
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
            
                        let string = `select * from vagas where id_vaga = ${id_vaga}`
            
                        con.query(string, (err02,result02) => {
                            if(err02 === null){
                                res.status(200).json(result02).end()
                            }else{
                                res.status(400).json(err02).end()
                            }
                        })
                    }

            }else{
                res.status(400).json(erro).end()
            }
        })

        
       
        
    }else{
        res.status(400).json({"err": "informe o id_vaga"}).end()
    }
}



async function getIDVaga(string){

    return new Promise((resolve,reject) => {

        con.query(string,(err,result) => {
            if(err === null){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}

const getVagaIDEmpresa = async (req,res) => {

    let id_empresa = req.params.id_empresa
    let vetIDS = []
    let index = 0
    let comerro = false
    let index02 = 0
    let comerro02 = false
    let index03 = 0
    let comerro03 = false
    let index04 = 0
    let comerro04 = false


    
    if(id_empresa !== undefined){


        let queryID = `select id_vaga from vagas where id_empresa = ${id_empresa}`

        vetIDS = await getIDVaga(queryID)

        let vetorCompleto = new Array()
        let vetorBeneficios = new Array()
        let vetorSbeneficios = new Array()

        vetIDS.forEach((item,index) => {

            vetorCompleto.push(item.id_vaga)

        })

       
        let queryBeneficios

        while(!comerro){

            if(index+1 === vetorCompleto.length){

                comerro = true
            }else{

                queryBeneficios = `select id_vaga from relac_benef_vaga where id_vaga = ${vetorCompleto[index]}`
           
                let retorno = await getIDVaga(queryBeneficios)
                if(retorno.length > 0){

                    retorno.forEach((item,index) => {
                        vetorBeneficios.push(item.id_vaga)
                    })
                    
                }  

            }
          
            
            index++
        }

      
        for(let i = 0; i < vetorBeneficios.length; i++){

            for(let j = 1; j < vetorBeneficios.length; j++){
            
                if(vetorBeneficios[i] === vetorBeneficios[j]){
                    vetorBeneficios.splice(vetorBeneficios[i],1)
                }
            }

        }
          
      


        let queryVagas

        queryVagas = `select id_vaga from vagas`
           
        let retorno = await getIDVaga(queryVagas)

        retorno.forEach((item,index) => {
             vetorSbeneficios.push(item.id_vaga)

        })
  
        let vet = vetorSbeneficios

        for(let i = 0; i < vet.length; i++){

            for(let j = 0; j < vetorBeneficios.length; j++){
            
                if(vetorSbeneficios[i] === vetorBeneficios[j]){
                    vetorSbeneficios.splice(i,1)
                }
            }

        }


        let vetorBeneficiosObj = new Array()
        let string
        while(!comerro03){

            console.log(vetorBeneficios[index03])

            string = `select * from vw_vaga_02 where id_vaga = ${vetorBeneficios[index03]} and status_vaga = 0`
            console.log(string)
            let resp = await getIDVaga(string)

            if(resp.length > 0){

                resp.forEach((item,index) => {

                    vetorBeneficiosObj.push(item)
                })
            }

            if(index03+1 === vetorBeneficios.length){

                comerro03 = true 
            }
    
            index03++
        }






        let vetorSBeneficiosObj = new Array()
        let stringS
        while(!comerro04){

           

           

            stringS = `select * from vagas where id_vaga = ${vetorSbeneficios[index04]} and status_vaga = 0`

            let resp = await getIDVaga(stringS)
            
            if(resp.length > 0){

                resp.forEach((item,index) => {

                    vetorSBeneficiosObj.push(item)
                    
                })
            }

            if(index04+1 === vetorSbeneficios.length){

                comerro04 = true 
            }
    
            index04++
        }


        //res.status(200).json(vetorBeneficiosObj).end()

        if(vetorBeneficiosObj.length > 0){
                 
            console.log(vetorBeneficiosObj)

            let ar = new Array()
            let obj = {}
            let id_vaga = 0 
            let beneficios = new Array()

            vetorBeneficiosObj.forEach((item,index) => {
                        
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
                    
                        id_vaga = item.id_vaga
                        beneficios = new Array()
                        
                       
                        obj = item
                        ar.push(obj)
                        
                        // id_vaga = item.id_vaga
                        
                        beneficios.push(item.beneficio)

                        
                        obj.beneficio = beneficios
                    
                        
                    }
                    
                }	
                        
            })


            vetorSBeneficiosObj.forEach((item,index) => {
                ar.push(item)
            })



            ar.sort(function (a, b) {
                if (a.id_vaga > b.id_vaga) {
                  return 1;
                }
                if (a.id_vaga < b.id_vaga) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });





            res.status(200).json(ar).end()
        }else{
                res.status(400).json({"err": "sem resultados"}).end()
        }









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


async function deletarBeneficios(query){
    return new Promise((resolve,reject) => {

        con.query(query, (err,result) => {
            if(err === null){
                resolve(result)
            }else{
                reject(err)
            } 
        })

    })
}

async function inserirBeneficios(query){
    return new Promise((resolve,reject) => {
        con.query(query, (err,result) => {
            if(err === null){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
}


const atualizarVagas = async (req,res) => {

    let id_vaga = req.body.id_vaga
    let cidade = req.body.cidade
    let cargo = req.body.cargo
    let salario = req.body.salario
    let descricao = req.body.descricao
    let expediente = req.body.expediente 
    let data_encerramento_vaga = req.body.data_encerramento_vaga
    let email_de_contato = req.body.email_de_contato
    let status_vaga = req.body.status_vaga
    let requisitos = req.body.requisitos
    let beneficios = req.body.beneficios 

    let index = 0
    let comerro = false

    if(id_vaga !== undefined){

        if(beneficios !== undefined){

            try{

                con.beginTransaction()
    
                let query = `delete from relac_benef_vaga where id_vaga = ${id_vaga}`
               
    
                let deletar = await deletarBeneficios(query)
                .then((resposta) => {
                    console.log(resposta)
                    //con.commit()
                    //res.status(200).json(resposta).end()
                }).catch((err) => {
                    console.log(err)
                    //con.rollback()
                    //res.status(400).json({err: err.message}).end()
                })
    
                console.log(beneficios)
               
                    do{
    
                        let string = `insert into relac_benef_vaga(id_vaga, id_beneficio) values(${id_vaga},${beneficios[index]})`
        
                        let inserir = await inserirBeneficios(string)
                        .then((resposta) => {
        
        
                            if(index + 1 === beneficios.length){
                                console.log("resposta insert beneficios: " + resposta)
        
                                con.commit()
                                // res.status(200).json(resposta).end()
                                comerro = true
                            }
                           
                        })
                        .catch((err) => {
                            con.rollback()
                            console.log("resposta erro insert beneficios: " + err)
                            res.status(400).json({err: err.message}).end()
                            comerro = true 
                           
                        })
        
        
        
                        index++
                    }while(!comerro)
    
                
                
                
    
                
    
            }catch(err){
                res.status(400).json({err: err.message}).end()
            }

        }

        
        

        let stringVagas = `update vagas set cidade = '${cidade}', cargo = '${cargo}', salario = ${salario}, descricao = '${descricao}', expediente = '${expediente}', 
        data_encerra_vaga= '${data_encerramento_vaga}', email_de_contato = '${email_de_contato}', status_vaga = ${status_vaga}, requisitos = '${requisitos}' where id_vaga = ${id_vaga}`


        con.query(stringVagas, (err,result) => {
            if(err === null){
                res.status(200).json(result).end()
            }else{
                res.status(400).json({err: err.message}).end()
            }
        })


    }else{
        res.status(400).json({"err": "informe os campos id_vaga"})
    }


}



module.exports = {

    postVaga,
    getAllVagas,
    getVagaId,
    getVagaIDEmpresa,
    getVagaNomeEmpresa,
    encerrarVaga,
    atualizarVagas
}