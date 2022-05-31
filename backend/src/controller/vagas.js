const { con } = require("../database/connection")



const postVaga = (req,res) => {

    let id_empresa 
    let cidade = req.body.cidade
    let cargo = req.body.cargo 
    let salario = req.body.salario
    let descricao = req.body.descricao
    let expediente = req.body.expediente
    let data_encerramento_vaga = req.body.data_encerramento_vaga
    let email_de_contato = req.body.email_de_contato
    let beneficios = req.body.beneficios


    // como deverá ser este método: 
    // primeiro deve-se criar a vaga para poder capturar o id_vaga gerado
    // logo após deve-se preencher a tabela relac_benef_vaga com o id capturado e os ids dos beneficios




}