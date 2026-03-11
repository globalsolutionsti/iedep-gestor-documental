
var API="https://script.google.com/macros/s/AKfycbyfI3U5MOglb3ZAuK7056Xd2jrr7BCnSVX_vc0wn0asJFtBQc-BfmVVLcIBTofw3rdk/exec";

function login(){

var usuario=document.getElementById("user").value;
var password=document.getElementById("pass").value;

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
accion:"login",
usuario:usuario,
password:password
})
})
.then(r=>r.json())
.then(res=>{

if(res.status){

document.querySelector(".login").style.display="none";

dashboard();

}else{

alert("Usuario incorrecto");

}

});

}

function dashboard(){

contenido.innerHTML=`

<div class="grid">

<div class="card">
<h3>Procedimientos</h3>
<p id="totalDocs">0</p>
</div>

<div class="card">
<h3>Tareas</h3>
<p id="totalTareas">0</p>
</div>

</div>

`;

loadMetrics();

}

function loadMetrics(){

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({accion:"getDocs"})
})
.then(r=>r.json())
.then(data=>{

document.getElementById("totalDocs").innerText=data.length-1;

});

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({accion:"getTareas"})
})
.then(r=>r.json())
.then(data=>{

document.getElementById("totalTareas").innerText=data.length-1;

});

}

function tareas(){

contenido.innerHTML="<div class='card'><h2>Tareas</h2><table id='tablaTareas'></table></div>";

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({accion:"getTareas"})
})
.then(r=>r.json())
.then(data=>{

var html="<tr><th>Fecha</th><th>Asignado</th><th>Tarea</th><th>%</th></tr>";

for(var i=1;i<data.length;i++){

html+=`
<tr>
<td>${data[i][1]}</td>
<td>${data[i][2]}</td>
<td>${data[i][3]}</td>
<td>${data[i][5]}%</td>
</tr>
`;

}

tablaTareas.innerHTML=html;

});

}

function documentos(){

contenido.innerHTML=`

<div class="card">

<h2>Gestor Documental</h2>

<input id="buscar" placeholder="Buscar documento">

<table id="tablaDocs"></table>

<div id="preview"></div>

</div>

`;

loadDocs();

}

function loadDocs(){

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({accion:"getDocs"})
})
.then(r=>r.json())
.then(data=>{

var html="<tr><th>Nombre</th><th>Unidad</th><th>Status</th></tr>";

for(var i=1;i<data.length;i++){

html+=`
<tr onclick="preview('${data[i][4]}')">
<td>${data[i][1]}</td>
<td>${data[i][2]}</td>
<td>${data[i][7]}</td>
</tr>
`;

}

tablaDocs.innerHTML=html;

});

}

function preview(id){

document.getElementById("preview").innerHTML=

`<iframe 
src="https://drive.google.com/file/d/${id}/preview"
width="100%" height="600"></iframe>`;

}

