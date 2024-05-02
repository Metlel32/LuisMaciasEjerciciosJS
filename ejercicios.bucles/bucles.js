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
