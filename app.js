
var API="https://script.google.com/macros/s/AKfycbyZI8_qb6twr_NHI0mddQt82k-MqnIdSqNuFulksDLgstlHxu3azUxpt4X3_lJWKbUd/exec";

function login(){

fetch(API,{
method:"POST",
body:JSON.stringify({
accion:"login",
usuario:user.value,
password:pass.value
})
})
.then(r=>r.json())
.then(res=>{

if(res.status){

dashboard();

}else{

alert("Usuario incorrecto");

}

});

}

function dashboard(){

contenido.innerHTML="<div class='card'><h2>Dashboard</h2></div>";

}

function tareas(){

contenido.innerHTML="<div class='card'><h2>Tareas</h2></div>";

}

function documentos(){

contenido.innerHTML="<div class='card'><h2>Gestor Documental</h2></div>";

}
