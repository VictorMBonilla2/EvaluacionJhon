import {Calculadora} from '/utils.js'

const calculadora = new Calculadora();

let numero1 = parseFloat(prompt("Ingrese el valor del numero 1"));

let numero2 = parseFloat(prompt("Ingrese el valor del numero 2"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  try {
    let suma = calculadora.suma(numero1, numero2);
    let resta = calculadora.resta(numero1, numero2);
    let mult = calculadora.multiplicacion(numero1, numero2);
    let div = calculadora.division(numero1, numero2);

    alert(`Resultado de suma : ${suma}
Resultado de resta : ${resta}
Resultado de multiplicacion : ${mult}
Resultado de división : ${div}`);
  } catch (error) {
    console.log(error);
  }
} else {
  alert("Ingrese solo numeros!");
}
