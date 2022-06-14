// const date = new Date();

const formatter = Intl.DateTimeFormat("pt-br", {
  // weekday: 'long',
  year: 'numeric',
  month:'long',
  day:'numeric',
});

async function vagas(){
    const response = await fetch("http://localhost:3000/buscar_vaga_id/" + id_vaga);
    // const response = await fetch("http://10.87.207.11:3000/buscar_vaga_id/" + id_vaga);
    const data = await response.json();
    console.log(data);
    data.forEach(e => {
        // let temp = e.beneficio;
        let model = document.querySelector(".box-vaga").cloneNode(true)
        model.querySelector(".titulo-vaga").innerHTML= e.cargo
        model.querySelector(".empresa").innerHTML= e.nome_empresa
        model.querySelector(".cidade").innerHTML= e.cidade
        model.querySelector(".salario").innerHTML= "R$" + e.salario
        model.querySelector(".data_encerra_vaga").innerHTML = "Até: " + formatter.format(new Date(e.data_encerra_vaga))
        // console.log(formatter.format(new Date(e.data_encerra_vaga)))
        model.querySelector(".data_de_publicacao").innerHTML = formatter.format(new Date(e.data_de_publicacao))
        model.querySelector(".descricao").innerHTML= e.descricao
        model.querySelector(".expediente").innerHTML= e.expediente
        model.querySelector(".requisitos").innerHTML= e.requisitos
        // model.querySelector(".beneficios").innerHTML= temp.forEach(b => {
        //     let todosBeneficios = document.querySelector('.todos-beneficios').cloneNode(true)
        //     // document.createElement("span").innerHTML = b
        //     console.log(todosBeneficios)
        // })
        model.querySelector(".email_de_contato").innerHTML= e.email_de_contato
        model.querySelector(".qtd-vagas").innerHTML= e.quantidade_de_vagas + " Vagas"
        // model.classList.remove("model")
        model.document.querySelector('.model:last-child').remove();
        document.querySelector(".todas-vagas").appendChild(model)
    } )
}

vagas();