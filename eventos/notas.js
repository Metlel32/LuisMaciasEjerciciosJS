//array donde se van a guardar las notas
let arrayNotas = [];

arrayNotas[0] = {
    id: 1,
    titulo: " sacar la basura",
    texto: "si mi mama me reta no lo hago",
    realizada: false
}

let idGlobal = arrayNotas[0].id


//aqui ingresara las notas al array


// Crear un div donde van las notas
let contenedorNotas = document.getElementById("father")
console.log(contenedorNotas);


console.log(pintarNotas(contenedorNotas, arrayNotas[0] ));


function pintarNotas(padre, tarjeta ) {
        
    let nuevaTarjeta = document.createElement("div")
    nuevaTarjeta.className = "row";
    nuevaTarjeta.id = `${tarjeta.id}`
    nuevaTarjeta.innerHTML = `<div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">${tarjeta.titulo}</h5>
            <p class="card-text">${tarjeta.texto}</p>                      
            <a href="#" onClick="borrarNota(${tarjeta.id})" class="btn btn-primary">borrar</a>
        </div>
    </div>`

    

    padre.appendChild(nuevaTarjeta)
}


// punto g crear un funcion que agregue al array
let titulo = document.getElementById("titulo")
let texto = document.getElementById("descrip")

let boton = document.getElementById("btn-guardar")
boton.addEventListener("click", ()=>{
    crearNota(titulo, texto, arrayNotas)
    
})

function crearNota(tit, tex,  array){
    idGlobal++
    let nota = {
        id: idGlobal,
        titulo: tit.value,
        texto: tex.value,
        realizada: false
    }
    if(tit.value != "" || tex.value != ""){
        arrayNotas.push(nota)
        pintarNotas(contenedorNotas, nota)
        tit.value =""
        tex.value =""
    }
}


function borrarNota(a){
    
    
    contenedorNotas.removeChild(document.getElementById(`${a}`))
    // arrayNotas.splice((a-1), 1)
    delete arrayNotas[a-1]  
    console.log(contenedorNotas);

    
    if (contenedorNotas.childElementCount === 0) {
       contenedorNotas.innerHTML = "<h2>No hay notas para mostrar</h2>";
    }
}




