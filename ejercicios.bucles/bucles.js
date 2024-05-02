// ejercicios 1
// let numero = prompt("Ingrese un numero para multiplicar")
// for (let i = 0; i <= 10; i++) {
//     let resultado = numero * i;
//     console.log(numero + " x  " + i + " = " + resultado);
// }

// ejercicos 2
// let suma = 0; 
// while (true) {
//     let numero = parseInt(prompt("Ingresa un número (Ingresa 0 para terminar):"));
//     if (numero === 0) {
//         break; 
//     }
//         suma += numero;
// }
//     console.log(suma);

// //ejercicio 3
// let numeroAleatorio = Math.floor(Math.random()*100)+1;
// console.log(numeroAleatorio);

// let acumulador = 0
// while (true) {
//     let numero3 = parseInt(prompt("ingresa un numero entre el 1 y el 100"))
//     acumulador+=1
//     if(numero3>numeroAleatorio){
//         numero3 = parseInt(prompt("el numero es mayor ingresa otro numero"))
//     }else if(numero3<numeroAleatorio){
//         numero3 = parseInt(prompt("el numero es menor ingresa otro numero"))
//     }else{
//         console.log("felicidades ganaste lo lograste despues de: " + acumulador + " intentos");
//         break
//     }
// }

// //ejercicio 4
// let numero4 = parseInt(prompt("ingrese numero "))
// let mitNumero4 = numero4/2
// if(numero4<=2){
//     console.log(numero4 + "no es primo");
// }
// var numeroPrimo
// for (let i = 1; i <= mitNumero4; i++) {
//     if(numero4%i === 0){
//         numeroPrimo = true
//     }
// }
// if(numeroPrimo){
//     console.log(numero4 + " es un numero primo");
// }else{
//     console.log(numero4  + " no es un numero primo");
// }


// //ejercicio 5
// let numero5 = parseInt(prompt('ingrese un numero para saber sus divisores'))
// let arrayDivisores = []
// for (let i = 1; i <= numero5; i++) {
//     if(numero5 % i === 0){
//         arrayDivisores.push(i)
//     }    
// }
// console.log(arrayDivisores);


// // ejercicios 6

// let array6 = ["a","b","c","d","e","f", "g", "h", "i", "j"]
// for (let i = 0; i < array6.length; i++) {
//     const element = array6[i];
//     console.log(element);
    
// }

// //ejercicio 7
// let array7 = [10,20,30,50,21,12,18,11,24,654]
// for (let i = 0; i < array7.length; i++) {
//     const element = array7[i];
//     console.log(array7[i]*2);
// }

// //ejercicio 8
// let array8 = [
//     {
//         nombre : "juan",
//         edad : 25,
//         familiar :"tio",
//         altura : 1.75
//     },
//     {
//         nombre : "dayana",
//         edad : 25,
//         familiar :"hermana",
//         altura : 1.53
//     },
//     {
//         nombre : "Yolanda",
//         edad : 60,
//         familiar :"abuela",
//         altura : 1.54
//     },
//     {
//         nombre: "jaidy",
//         edad : 57,
//         familiar :"tia",
//         altura : 1.19
//     },
//     {
//         nombre: "juan David",
//         edad : 32,
//         familiar :"primo",
//         altura : 2.10
//     }
// ]
// for (let i = 0; i < array8.length; i++) {
//     const element = array8[i];
//     console.log("Hola soy " + array8[i].nombre + " tengo "+array8[i].edad + " años y soy " + array8[i].familiar + " de la familia, mido en altura " + array8[i].altura + " metros" );
    
// }

// //ejercicio9

// let array9 = [10,23,30,50,21,12,18,11,57,654]
// for (let i = 0; i < array9.length; i++) {
//     const element = array9[i];
//     if(element%2 != 0){
//         console.log(element);
//     }
    
// }

// // ejercicio 10
// let numero10 = 1
// let numerosPares =0
// let numerosImpares = 0
// while(numero10>0){
//     numero10 = parseInt(prompt('ingrese un numero para detener el bucle ingrese el numero 0'))
//     if(numero10 === 0){
//         break
//     }else if( numero10 % 2 === 0){
//         numerosPares += numero10
//     }else{
//         numerosImpares += numero10
//     }
// }
// console.log("suma de numeros impares" +numerosImpares);
// console.log("suma de numeros pares " +numerosPares);

// // ejercicio 11

// let array11 = [1,25,37,1011,25,36,45,1210,303,9875]
// let numeroGrande = 0
// for (let i = 0; i < array11.length; i++) {
//     const element = array11[i];
//     if(element>=numeroGrande){
//         numeroGrande=element
//     }
// }
// console.log(numeroGrande);

// // ejercicio 12
// let array12 = [101,26,37,1011,27,36,45,1210,303,9875]
// let numeroChico = 0
// for (let i = 0; i < array12.length; i++) {
//     const element = array12[i];
//     if(numeroChico===0){
//         numeroChico = element
//     }else if(element<= numeroChico){
//         numeroChico = element
//     }
// }
// console.log(numeroChico);

// // ejercicio 13

// let player1 = prompt('ingrese el nombre del primer jugador')
// let player2 = prompt('ingrese el nombre del segundo jugador')
// let mano1 = ""
// let mano2 = ""
// while(true){
//     mano1 = prompt('ingrese piedra papel o tijera jugador 1 ')
//     mano2 = prompt('ingrese piedra papel o tijera jugador 2 ')
//     if(mano1 == mano2){
//         console.log('empate');
//         continue
//     }else if((mano1 == "piedra" & mano2=="tijera")||(mano1 == "papel" & mano2=="piedra")||(mano1 == "tijera" & mano2=="papel")){
//         console.log('ganador ' + player1);
//         break
//     }else if((mano2 == "piedra" & mano1=="tijera")||(mano2 == "papel" & mano1=="piedra")||(mano2 == "tijera" & mano1=="papel")){
//         console.log('ganador '+player2);
//         break
//     }
// }


//ejercicio 14

// ejercicio 15

// ejercicio 16
let array16 = [101,26,37,1011,27,36,45,1210,303,9875]
let arrayOrdenado = []
for (let i = 0; i < array16.length; i++) {
    const element = array16[i];
    if(element>=arrayOrdenado[i]){
        arrayOrdenado.push(element)
    }else{
        arrayOrdenado.unshift(element)
    }
}
console.log(arrayOrdenado);