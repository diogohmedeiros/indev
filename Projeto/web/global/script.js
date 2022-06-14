const login = document.querySelector(".login-header");
const sair = document.querySelector(".sair");

login.addEventListener("click", () => {
    window.location.href = "../login"
})

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

