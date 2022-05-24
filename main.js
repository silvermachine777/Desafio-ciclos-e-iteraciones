//Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada.
let numero = parseInt(prompt('Ingrese un número'));

for (let i = 1; i <= numero; i++) {
    console.log(i + '.' + ' Hola');
}