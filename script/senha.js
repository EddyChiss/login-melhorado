function senhas(){
    var senha = document.querySelector("#senha")
    if(senha.type === "password"){
        senha.type = "text"
    }else{
        senha.type = "password"
    }
}