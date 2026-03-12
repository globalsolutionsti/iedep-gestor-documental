let usuario = localStorage.getItem("usuarioActivo")

if(!usuario){

window.location.href = "index.html"

}

document.addEventListener("DOMContentLoaded", () => {

document.getElementById("usuarioNombre").innerText = usuario

})

function cerrarSesion(){

localStorage.removeItem("usuarioActivo")

window.location.href = "index.html"

}
