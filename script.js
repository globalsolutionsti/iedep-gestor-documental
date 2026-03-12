document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault()

let usuario = document.getElementById("usuario").value
let pin = document.getElementById("pin").value

// login simulado
if(usuario && pin){

window.location.href = "dashboard.html"

}

})
