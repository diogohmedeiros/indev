function login() {
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;

    let data = {
        email: email,
        senha: senha
    }

    fetch("http://10.87.207.11:3000/empresa/login", {
    // fetch("http://localhost:3000/empresa/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.length !== 0) {
            localStorage.setItem("userdata", JSON.stringify(data));
            window.location.href = "../home";
        }else {
            alert("Usuário ou senha incorretos");
            console.log(data)
        }
    })
}

function loginCandidato() {
    window.location.href = "../login"
}

// http://10.87.207.11:3000/