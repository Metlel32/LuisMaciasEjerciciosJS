//indice corporal

let botonM = document.getElementById("botonM")

botonM.addEventListener("click",function(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("estatura").value

    let imc = peso/(Math.pow(altura, 2))
    console.log(imc);
    document.getElementById("masaCorporal").value = imc 
})


// conversor de divisas

let dolar = document.getElementById("dolar")
let pesoColombiano = document.getElementById("pesoColombiano")

dolar.addEventListener('change', function(){
    pesoColombiano.value = dolar.value / 0.00026
})
pesoColombiano.addEventListener('change',  function(){
    dolar.value = pesoColombiano.value * 0.00026
})