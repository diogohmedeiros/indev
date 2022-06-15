function login() {
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;

    let data = {
        email: email,
        senha: senha
    }

    fetch("http://10.87.207.11:3000/login_usuario", {
    // fetch("http://localhost:3000/login_usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.length > 0) {
            localStorage.setItem("userdata", JSON.stringify(data[0]));
            window.location.href = "../home";
        }else {
            alert("Usuário ou senha incorretos");
        }
    })
}

function loginEmpresa() {
    window.location.href = "../login_empresa"
}

// 