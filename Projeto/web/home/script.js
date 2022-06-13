// const date = new Date();

const formatter = Intl.DateTimeFormat("pt-br", {
  // weekday: 'long',
  year: 'numeric',
  month:'long',
  day:'numeric',
});

async function vagas(){
    // const response = await fetch("http://localhost:3000/buscar_todas_vagas/");
    const response = await fetch("http://10.87.207.11:3000/buscar_todas_vagas");
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
        model.classList.remove("model")
        document.querySelector(".todas-vagas").appendChild(model)
    } )
}

vagas();

// import { 
//     parseISO, 
//     format, 
//     formatRelative, 
//     formatDistance,
//   } from 'date-fns';
  
//   import pt from 'date-fns/locales/pt';
  
//   const firstDate = parseISO('2018-04-01 16:00:00');
//   const secondDate = parseISO('2018-04-02 16:00:00');
  
//   const formattedDate = format(
//     firstDate, 
//     "'Dia' dd 'de' MMMM', às ' HH:mm'h'"
//   );
   
  // Dia 01 de Abril às 16:00h
  
//   const distance = formatDistance(
//     firstDate,
//     secondDate
//   );
  
//   // 24 horas
  
//   const relative = formatRelative(
//     firstDate,
//     secondDate
//   );
  
//   // Ontem às 16h

// var obj = document.getElementById("obj");
// window.addEventListener('scroll', function(){
//   let value = window.scrollY;
//     obj.style.left = value * 1.25 +'px';
// });