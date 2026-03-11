
var API="https://script.google.com/macros/s/AKfycbwiJIparqLGVaSgafgciuNMCE0hwgLv4pdytqbWCoMHp_DzcQGubjD1hWqOz2y8Bkk/exec";

function login(){

var usuario = document.getElementById("user").value;
var password = document.getElementById("pass").value;

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
accion:"login",
usuario:usuario,
password:password
})
})
.then(response=>response.json())
.then(data=>{

if(data.status){

document.querySelector(".login").style.display="none";

dashboard();

}else{

alert("Usuario o contraseña incorrectos");

}

})
.catch(error=>{
console.error(error);
alert("Error conectando con el servidor");
});

}

function dashboard(){

document.getElementById("contenido").innerHTML=

`<div class="card">
<h2>Dashboard</h2>
<p>Bienvenido al Sistema de Gestión Documental IEDEP</p>
</div>`;

}

function tareas(){

document.getElementById("contenido").innerHTML=

`<div class="card">
<h2>Tareas</h2>
</div>`;

}

function documentos(){

document.getElementById("contenido").innerHTML=

`<div class="card">
<h2>Gestor Documental</h2>
</div>`;

}

