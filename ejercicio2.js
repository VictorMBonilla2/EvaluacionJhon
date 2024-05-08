import {Sumar,numerosPrimos,numerosPares,promedioPrimos,promedioPares} from "/utils.js";

let contador = parseInt(prompt("¿Cuantos numerso desea ingresar?"));

let numeros = [];

if (!isNaN(contador)) {
  for (let i = 0; i < contador; i++) {
    let numero = parseInt(prompt(`Ingrese el numero ${i + 1}`));

    numeros.push(numero);
  }
  let breaker = 0;
  while (breaker < 1) {
    let opcion = prompt(`¿Que operacion desea realizar?
      
      a. Sumar los números
      b. Contar los números primos
      c. Contar los números pares
      d. Calcular el promedio de los números primos
      e. Calcular el promedio de números pares
      q. salir.`);
    opcion = opcion.toLowerCase();

    switch (opcion) {
      case "a":
        let resultado = Sumar(numeros);

        alert(`La suma de los numeors es: ${resultado}`);
        break;
      case "b":
        let numPrimos = numerosPrimos(numeros);

        alert(`La cantidad de primos es : ${numPrimos}`);
        break;
      case "c":
        let numPares = numerosPares(numeros);

        alert(`La cantidad de pares de los numeros es: ${numPares}`);
        break;
      case "d":
        let promPrimos = promedioPrimos(numeros);

        alert(`El promedio de los numeros primos es: ${promPrimos}`);
        break;

      case "e":
        let promPares = promedioPares(numeros);

        alert(`El promedio de los pares es: ${promPares}`);
        break;
      case "q":
        breaker++;
        break;

      default:
        alert("¡Ingrese una opcion correcta!");
        break;
    }
  }
}




