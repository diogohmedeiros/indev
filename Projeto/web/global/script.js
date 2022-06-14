// var login = document.querySelector(".login-header");
// var sair = document.querySelector(".sair");

// login.addEventListener("click", () => {
//     window.location.href = "../login"
// })

// var usuario = document.querySelector(".fi-ss-user");
// var sair = document.querySelector(".sair");

// var id = localStorage.getItem('id_user')

// fetch("http://10.87.207.9:8080/api/user/" + id)
// .then(res => {
//     return res.json();
// }).then(data =>{
//     document.querySelector('.foto-usuario').src = data.avatar;
//     document.querySelector('.nome-usuario').innerHTML = data.username;

// }).catch(err =>[
//     console.log(err)
// ])

// sair.addEventListener("click", () => {
//     window.location.href = "../login"
//     storage.clear();
// })

function logout() {
    localStorage.clear();
    window.location.href = "../login/";
}

if (localStorage.getItem('userdata') === null) {
    let ul = document.querySelector("ul")
    let irLogin = document.createElement("li");
    irLogin.classList = "login-header";
    irLogin.id = "ir_login";
    irLogin.innerHTML = "login";
    irLogin.addEventListener("click", () => {
        window.location.href = "../login"
    })
    ul.appendChild(irLogin);
    document.querySelector(".nav-clone").appendChild(ul);
} else {
    if (JSON.parse(localStorage.getItem("userdata")).nome_usuario !== undefined) {
        let nome = JSON.parse(localStorage.getItem("userdata")).nome_usuario;
        let ul = document.querySelector("ul")
        let nomeUser = document.createElement("li");
        nomeUser.classList = "login-header";
        nomeUser.innerHTML = nome;
        ul.appendChild(nomeUser)        
        
        let sair = document.createElement("img");
        sair.id = "sair";
        sair.src = "../../assets/sign-out.svg";

        sair.addEventListener("click", () => {
            window.location.href = "../login"
            localStorage.clear();
        })

        document.querySelector(".nav-clone").appendChild(sair);
        document.querySelector(".nav-clone").appendChild(ul);
    } else {
        let nome = JSON.parse(localStorage.getItem("userdata")).nome_empresa;
        let ul = document.querySelector("ul")
        let nomeUser = document.createElement("li");
        nomeUser.classList = "login-header";
        nomeUser.innerHTML = nome;        
        ul.appendChild(nomeUser)

        let sair = document.createElement("img");
        sair.id = "sair";
        sair.src = "../../assets/sign-out.svg";

        sair.addEventListener("click", () => {
            window.location.href = "../login"
            storage.clear();
        })

        document.querySelector(".nav-clone").appendChild(sair);
        document.querySelector(".nav-clone").appendChild(ul);
    }
}
