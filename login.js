document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

const usuario = document.getElementById("usuario").value;
const pin = document.getElementById("pin").value;

/* Aquí irá la conexión con Apps Script */

fetch("URL_APPS_SCRIPT", {

method:"POST",

body: JSON.stringify({
usuario: usuario,
pin: pin
})

})
.then(res => res.json())
.then(data => {

if(data.status === "ok"){

alert("Acceso correcto");

}else{

alert("Usuario o PIN incorrecto");

}

})

});
