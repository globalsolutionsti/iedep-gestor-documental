// verificar sesión

let usuario = localStorage.getItem("usuarioActivo")

if(!usuario){

window.location.href = "index.html"

}

// mostrar usuario en pantalla

document.addEventListener("DOMContentLoaded", () => {

document.getElementById("usuarioNombre").innerText = usuario

})

// cerrar sesión

function cerrarSesion(){

localStorage.removeItem("usuarioActivo")

window.location.href = "index.html"

}
