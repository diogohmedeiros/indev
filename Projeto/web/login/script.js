var email = document.getElementById("email");
var senha = document.getElementById("senha");

var entrar = document.getElementById("entrar").addEventListener("click", () => {
    fazerLogin();
})

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault(); 
});

async function fazerLogin(){
    let body = {
        email: email.value,
        senha: senha.value
    } 

    let settings =  {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    // let endpoint = "http://10.87.207.11:3000/login_usuario";    
    let endpoint = "http://10.87.207.11:3000/login_usuario";

    let response = await fetch(endpoint, settings);
    let data = await response.json();

    if(response.status == 200){
        localStorage.setItem("id_usuario", data.id_usuario);
        window.location.href = "../home";
    }
}