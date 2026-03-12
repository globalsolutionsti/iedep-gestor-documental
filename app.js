// sesión

let usuario = localStorage.getItem("usuarioActivo")

if(!usuario){

window.location.href = "index.html"

}

document.getElementById("usuarioNombre").innerText = usuario



// vistas dinámicas

function cargarVista(vista){

const contenedor = document.getElementById("contenido")
const titulo = document.getElementById("titulo")

if(vista === "inicio"){

titulo.innerText = "Dashboard"

contenedor.innerHTML = `
<div class="cards">

<div class="card">
<h3>Procedimientos</h3>
<p>120</p>
</div>

<div class="card">
<h3>En revisión</h3>
<p>8</p>
</div>

<div class="card">
<h3>Aprobados</h3>
<p>95</p>
</div>

</div>
`

}

if(vista === "procedimientos"){

titulo.innerText = "Procedimientos"

contenedor.innerHTML = `

<h3>Nuevo procedimiento</h3>

<input id="codigo" placeholder="Código">

<input id="nombre" placeholder="Nombre">

<input id="area" placeholder="Área">

<input type="file" id="archivo">

<button onclick="subirProcedimiento()">Guardar</button>

`

}
<table>

<tr>
<th>Código</th>
<th>Nombre</th>
<th>Área</th>
<th>Versión</th>
</tr>

<tr>
<td>PR-001</td>
<td>Control Académico</td>
<td>Académico</td>
<td>2.0</td>
</tr>

</table>
`

}

if(vista === "versiones"){

titulo.innerText = "Control de Versiones"

contenedor.innerHTML = `
<p>Historial de cambios del sistema</p>
`

}

if(vista === "buscador"){

titulo.innerText = "Buscador"

contenedor.innerHTML = `
<input placeholder="Buscar procedimiento">
`

}

if(vista === "usuarios"){

titulo.innerText = "Usuarios"

contenedor.innerHTML = `
<p>Administración de usuarios</p>
`

}

if(vista === "config"){

titulo.innerText = "Configuración"

contenedor.innerHTML = `
<p>Configuración del sistema</p>
`

}

}


// cargar dashboard al iniciar

cargarVista("inicio")


// cerrar sesión

function cerrarSesion(){

localStorage.removeItem("usuarioActivo")

window.location.href = "index.html"

}
function subirProcedimiento(){

let codigo = document.getElementById("codigo").value
let nombre = document.getElementById("nombre").value
let area = document.getElementById("area").value

fetch("https://script.google.com/macros/s/AKfycbxGKJHg5a61nTBZUA5M1H_zqcEQ7cpOo6i7SeokD1SHzw3C1AW1N327OIznAfIS_vv0bw/exec",{

method:"POST",

body:JSON.stringify({

codigo:codigo,
nombre:nombre,
area:area,
version:"1.0",
usuario:localStorage.getItem("usuarioActivo")

})

})
.then(r=>r.json())
.then(data=>{

alert("Procedimiento registrado")

})

}
function buscar(){

let filtro = document.getElementById("busqueda").value.toLowerCase()

let filas = document.querySelectorAll("table tr")

filas.forEach(f=>{

if(f.innerText.toLowerCase().includes(filtro)){

f.style.display=""

}else{

f.style.display="none"

}

})

}
