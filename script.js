document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault()

let usuario = document.getElementById("usuario").value
let pin = document.getElementById("pin").value

// simulación de validación
if(usuario && pin){

// guardar sesión
localStorage.setItem("usuarioActivo", usuario)

// redirigir al dashboard
window.location.href = "dashboard.html"

}

})
