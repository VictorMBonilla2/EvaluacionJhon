import { validarTarjeta } from "/utils.js";

let regexNumeros = /^[0-9]+$/;
console.log("hola")
while(true){
let numeroTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");
let tipoTarjeta = validarTarjeta(numeroTarjeta);

if (!regexNumeros.test(numeroTarjeta) || numeroTarjeta.length > 16 ) {
  console.log(
    "Error: El número de tarjeta debe contener solo números y tener máximo 16 caracteres."
  );
} else if(tipoTarjeta ==="Desconocida"){
  alert(
    "Error: Ingrese un numero de tarjeta valido."
  )
} else {
  console.log(`El tipo de tarjeta es: ${tipoTarjeta}`);
  break;
}
}

