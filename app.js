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
