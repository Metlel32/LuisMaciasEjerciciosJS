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



console.log(pintarNotas(contenedorNotas, arrayNotas[0] ));


function pintarNotas(padre, tarjeta ) {
     
    let nuevaTarjeta = document.createElement("div")
    nuevaTarjeta.className = "col-sm-6 mb-3 mb-sm-0";
    nuevaTarjeta.id = `${tarjeta.id}`
    nuevaTarjeta.innerHTML = `<div class="card mb-3">
        <div class="card-body">
            <input class="form-check-input card-title mt-0 bg-dark" onClick="marcarRealizada(${tarjeta.id})" type="checkbox" ${tarjeta.realizada? "checked": ""}>
            <h5 class="card-title">${tarjeta.titulo}</h5>
            <p class="card-text">${tarjeta.texto}</p>                      
            <a href="#" onClick="borrarNota(${tarjeta.id})" class="btn btn-primary">borrar</a>
        </div>
    </div>`

    padre.appendChild(nuevaTarjeta)
}
// fucion marca realizada que aun no funciona toca poner -1 por que el array inicia desde 0

function marcarRealizada(idObjeto){
    if (arrayNotas[idObjeto-1].realizada == true){
        arrayNotas[idObjeto-1].realizada = false
    
    }else{
        arrayNotas[idObjeto-1].realizada = true
    }
    

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
    console.log(contenedorNotas);

    // esta condicional verifica que si en el elemento contenedorNotas si llega a tener el primer hijo h2 el contenido de notas para mostrar remueve el primer hijo que es el h2

    if (contenedorNotas.firstChild.tagName == 'H2' && contenedorNotas.firstChild.textContent.trim() === 'No hay notas para mostrar') {
        contenedorNotas.removeChild(contenedorNotas.firstChild);
    }
}


function borrarNota(a){
    
    
    contenedorNotas.removeChild(document.getElementById(`${a}`))
    // arrayNotas.splice((a-1), 1)
    delete arrayNotas[a-1]  

    
    
    // este condicional dice que si no hay un hijo en el contendor notas ponga que no hay notas para mostrar que no se me olvide que chilElementCount es los contendeores hijos del padre y que apenas ejecuta la funcion pasa a 1
    if (contenedorNotas.childElementCount == 0) {
        contenedorNotas.innerHTML = "<h2>No hay notas para mostrar</h2>";
    }
}


function limpiarInput(){
    titulo.value = ""
    texto.value = ""
}


//filtrar array por realizados
let checkbox = document.querySelector(".checked")
checkbox.addEventListener('change', (evento)=> {
    let arrayRealizadas = arrayNotas.filter(ele => ele.realizada === true)
    contenedorNotas.innerHTML = ""
    if(evento.target.checked){
        for (let i = 0; i < arrayRealizadas.length; i++) {
            pintarNotas(contenedorNotas, arrayRealizadas[i])
        }
    }else{
        for (let i = 0; i < arrayNotas.length; i++) {
            pintarNotas(contenedorNotas, arrayNotas[i])
        }
        
    }
    
})

// filtrar la busqueda

let buscar = document.getElementById("buscar")
buscar.addEventListener("keyup", (e) => {

    let arrayBusqueda = arrayNotas.filter(letra => letra.titulo.includes(e.target.value)  || letra.texto.includes(e.target.value))
    contenedorNotas.innerHTML = ""
    if(e.target.value != "" ){
        for (let i = 0; i < arrayBusqueda.length; i++) {
            pintarNotas(contenedorNotas, arrayBusqueda[i])
        }
    }else{
        for (let i = 0; i < arrayNotas.length; i++) {
            pintarNotas(contenedorNotas, arrayNotas[i])
        }
    }
})



function aplicarFiltros() {
    let textoBusqueda = buscar.value.trim().toLowerCase()
    let mostrarRealizadas = checkbox.checked

    let notasFiltradas = arrayNotas.filter(nota => {
        let cumpleFiltroTexto = nota.titulo.toLowerCase().includes(textoBusqueda) || nota.texto.toLowerCase().includes(textoBusqueda)
        let cumpleFiltroRealizadas = mostrarRealizadas ? nota.realizada : true
        return cumpleFiltroTexto && cumpleFiltroRealizadas
    });

    // Limpiar el contenedor antes de mostrar las notas filtradas
    contenedorNotas.innerHTML = ""

    // Mostrar las notas filtradas
    notasFiltradas.forEach(nota => {
        pintarNotas(contenedorNotas, nota)
    });
}

checkbox.addEventListener('change', aplicarFiltros)

buscar.addEventListener("keyup", aplicarFiltros)




