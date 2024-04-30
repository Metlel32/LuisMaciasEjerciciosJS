//ejercicio 1//
let num1 = 20
let num2 = 10
if(num1>num2){
    console.log('el '+ num1+ ' es mayor que el '+ num2);
}
//ejercicio 2//
let num3 = 6
let num4 = 5
if(num3==num4){
    console.log('ambos numeros: '+num3+ ' '+num4+ ' son iguales');
}else{
    console.log('ambos numeros: '+num3+ ' '+num4+ ' son diferentes');
}
//ejercicio 3//
let num5 = 5
let num6 = 5
if(num5>num6){
    console.log(num5 + ' es mayor que: '+ num6);
}else if(num5<num6){
    console.log(num6 + ' es mayor que: '+ num5);
}else{
    console.log('ambos numeros son iguales');
}
// ejercicio 4//
let num7 = 7
let num8 = 6
let num9 = 6
if((num7<num8 && num7 < num9)||(num8==num7 && num7<num9)||(num9==num7 && num7<num8)){
    console.log(num7 + ' es el numero mas chico ');
}else if((num8<num7 && num8<num9)||(num8==num7 && num8<num9)||(num8==num9 && num8<num7)){
    console.log(num8 + ' es el numero mas chico');
}else if(num9<num7 && num9<num8){
    console.log(num9 + ' es el numero mas chico');
}else{
    console.log(' los tres numeros son iguales');
}
//ejercicio 5
let objetoPersona1 = {
    nombre: 'alberto',
    edad: 9,
    altura: 6
}
let objetoPersona2 = {
    nombre: 'jairo',
    edad: 25,
    altura: 6
}
if(objetoPersona1.altura>objetoPersona2.altura){
    console.log('el '+objetoPersona1.nombre+' es de mayor altura');
}else if(objetoPersona1.altura<objetoPersona2.altura){
    console.log('el '+objetoPersona2.nombre+' es de mayor altura');
}else{
    console.log(objetoPersona1.nombre +' tiene la misma altura que '+objetoPersona2.nombre);
}

//ejercicio 6
let objetoPersona3 = {
    nombre: prompt('ingresa tu nombre'),
    edad: prompt(' ingresa tu edad'),
    altura: prompt('ingresa tu altura'),
    vision: prompt('Escribernos del 1 al 10 como estas en vision')
}
if(objetoPersona3.edad >= 18 && objetoPersona3.altura >= 150 && objetoPersona3.vision >= 8){
    console.log('eres una persona capacitada para manejar');
}else{
    console.log(' lo siento no puedes manejar');
}

//ejercicio 7
let nombre = prompt('Ejercicio 7 danos un nombre')
let pase = prompt('escribenos si eres vip o normal')
let entrada = confirm('tienes entrada')

if(nombre=='luis'){
    console.log('Bienvenido al casino');
}else if(pase=='vip'){
    console.log('Bienvenido al casino');
}
switch (entrada) {
    case true:
        let confirmacion = confirm('Desea utilizar la entrada')
        if (confirmacion == true) {
            console.log('bienvenido al casino');
        }
        break;
    case false:
        let compra = confirm('desea comprar pase')
            if(compra == true){
                let dinero = prompt('dame tu dinero disponible')
                if(dinero>=1000){
                    console.log('venta exitosa bienvenido al casino ');
                }else{
                    console.log(' venta rechazada');             
                }
            }else{
                console.log('hasta luego señor: '+nombre);
            }

        break
    default:
        break;
}
//ejercicio 8
let numeroIncognita = 6
let numeroIngresado = prompt('danos un numero entre el 1 y el 10')
if (numeroIncognita==numeroIngresado){
    console.log('ganaste haz adivinado');
    
} else if(numeroIncognita>numeroIngresado){
    console.log('El numero es mayor intenta otra vez');
    numeroIngresado = prompt('El numero es mayor intenta otra vez')
    if (numeroIncognita==numeroIngresado){
        console.log('ganaste haz adivinado');
    } else if(numeroIncognita>numeroIngresado){
        console.log('Intenta otra vez');
        numeroIngresado = prompt('El numero es mayor intenta otra vez')
        if (numeroIncognita==numeroIngresado){
            console.log('ganaste haz adivinado');
        }else{
            console.log('perdiste');
        }
    }else{
        console.log('El numero es menor');
        numeroIngresado = prompt('el numero es intenta otra vez')
        if(numeroIncognita==numeroIngresado){
            console.log('ganaste haz adivinado');
        }else{
            console.log('perdiste');
        }
    }
    
}else{
    console.log('El numero es menor');
    numeroIngresado = prompt('el numero es menor intenta otra vez')
    if(numeroIncognita==numeroIngresado){
        console.log('ganaste haz adivinado');
    
    }else if(numeroIncognita>numeroIngresado){
        console.log('El numero es mayor intenta otra vez');
        numeroIngresado = prompt('El numero es mayor intenta otra vez')
        if(numeroIncognita==numeroIngresado){
            console.log('ganaste haz adivinado');
        }else{
            console.log('perdiste');
        }
    }else{
        console.log('El numero es menor');
        numeroIngresado = prompt('el numero es menor intenta otra vez')
        if(numeroIncognita==numeroIngresado){
            console.log('ganaste haz adivinado');
        }else{
            console.log('perdiste');
        }
    }
}

//ejercicio 9
let miEdad = prompt('ingresa tu edad')

if(miEdad<=12 && miEdad >=0){
    console.log('eres un infante');
}else if(miEdad<=18 && miEdad>12){
    console.log('eres un adolecente');
}else if(miEdad<=45 && miEdad>=19){
    console.log('Eres  un mayor joven');
}else if(miEdad<=100 && miEdad>=45){
    console.log('Eres  un mayor joven');
}else{
    console.log('En verdad tienes esa edad?');
}

//ejercicio 10
let jugador1 = prompt('jugador 1  ingresa (piedra, papel o tijera)')
let jugador2 = prompt('jugador 2  ingresa (piedra, papel o tijera)')

if((jugador1=='piedra'&&jugador2=='tijera') || (jugador1=='papel'&&jugador2=='piedra')||(jugador1=='tijera'&&jugador2=='papel')){
    console.log('jugador uno gana');
}else if((jugador2=='piedra'&&jugador1=='tijera') || (jugador2=='papel'&&jugador1=='piedra')||(jugador2=='tijera'&&jugador1=='papel')){
    console.log('jugador dos gana');
}else if((jugador1=='piedra'&&jugador2=='piedra') || (jugador1=='papel'&&jugador2=='papel')||(jugador1=='tijera'&&jugador2=='tijera')){
    console.log('hay un empate en los jugadores ');
}else{
    console.log('uno de los dos jugadores hizo trampa');
}

//ejercicio 11
let color = prompt('ingrese un color')
switch (color) {
    case "blanco":
        console.log('falta de color verde ');
        break;
    case "negro":
        console.log('falta de color verde ');
        break;
    case 'verde':
        console.log('el color de la naturaleza');
        break
    case 'azul':
        console.log('el color del agua');
        break
    case 'amarillo':
        console.log('el color del sol');
        break
    case 'rojo':
        console.log('el color del fuego');
        break
    case 'marron':
        console.log('el color de la tierra');
        break
    default:
        console.log('eleccion no la teniamos pensada');
        break;
}

//ejercicio 12
let numero1 = prompt('ingrese valor para realizar operacion')
let operacion = prompt('ingrese operador (+,-,*,/)')
let numero2 = prompt('ingrese segundo valor para realizar la operacion')
switch (operacion) {
    case '+':
        console.log('El resultado es: ' + numero1+numero2);
        break;
    case '-':
        console.log('El resultado es: ' + (numero1-numero2));
        break;
    case '*':
        console.log('El resultado es: ' +( numero1*numero2));
        break;
    case '/':
        if(numero2==0){
            console.error('No es posible divir entre 0');
        }else{
        console.log('El resultado es: ' + (numero1/numero2));
        }
        break;
    default:
        break;
}


//ejercicio 13
let nombre2 = prompt('ingresa tu nombre')
let numDocumento = prompt('ingrese su numero de documento')
let altura2 = prompt('ingresa tu altura')
let ciudad2 = prompt('ciudad de nacimiento')

console.table('Nombre: ' + nombre2 + ' ' + ' Altura: '+ altura2 + ' ' +' Ciudad: '+ ciudad2 + ' ' + 'numero de documento: ' + numDocumento )

let datosCo = confirm('Son correctos los datos?')
if(datosCo == true){
    let dni = {
        nombre: nombre2,
        documento: numDocumento,
        altura: altura2,
        ciudad: ciudad2
    }
    console.table(dni)
    console.log('registro exitoso');
}else{
    console.log('Vuelva a intentar en un mes');
}
