//Ejercicio1

export function validarTarjeta(numeroTarjeta) {
  const AmericanExpress = /^3[4-7][0-9]{13}$/;
  const DinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  const Discover = /^6011[0-9]{12}$/;
  const Mastercard = /^5[1-5][0-9]{14}$/;
  const Visa = /^4[0-9]{15}$/;

  if (AmericanExpress.test(numeroTarjeta)) {
    return "American Express";
  } else if (DinersClub.test(numeroTarjeta)) {
    return "Diners Club";
  } else if (Discover.test(numeroTarjeta)) {
    return "Discover";
  } else if (Mastercard.test(numeroTarjeta)) {
    return "Mastercard";
  } else if (Visa.test(numeroTarjeta)) {
    return "Visa";
  } else {
    return "Desconocida";
  }
}

//Ejercicio2

export function Sumar(numeros) {
  let sumatorio = 0;
  numeros.forEach((numero) => {
    sumatorio += numero;
  });

  return sumatorio;
}
export function numerosPrimos(numeros) {
  let sumatorio = [];

  numeros.forEach((numero) => {
    if (numero <= 1) {
      return;
    }

    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo) {
      sumatorio.push(numero);
    }
  });

  return sumatorio.length;
}

export function numerosPares(numeros) {
  let numPares = [];
  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      numPares.push(numero);
    }
  });

  let cantidad = numPares.length;

  return cantidad;
}

export function promedioPrimos(numeros) {
  let sumatorio = [];
  let suma = 0;

  numeros.forEach((numero) => {
    if (numero <= 1) {
      return;
    }

    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo) {
      sumatorio.push(numero);
      suma += numero;
    }
  });

  return suma / sumatorio.length;
}

export function promedioPares(numeros) {
  let sumatorio = 0;
  let cantidad = [];
  numeros.forEach((numero) => {
    if (numero % 2 === 0) {
      sumatorio += numero;
      cantidad.push(numero);
    }
  });

  let promedio = sumatorio / cantidad.length;

  return promedio;
}

//Ejercicio3

export const ordenarNumeros = function (...numeros) {
  return numeros.sort((a, b) => b - a);
};
//Ejercicio4

export const ordenarPalabras = function (...palabras) {
  let palabraMasLarga = "";
  for (let palabra of palabras) {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  return palabraMasLarga;
};

//Ejercicio5
export class Calculadora {
  suma(num1, num2) {
    return num1 + num2;
  }

  // Método para restar dos números
  resta(num1, num2) {
    return num1 - num2;
  }

  // Método para multiplicar dos números
  multiplicacion(num1, num2) {
    return num1 * num2;
  }

  // Método para dividir dos números
  division(num1, num2) {
    let resut = num1 / num2;
    if (!isFinite(resut)) {
      resut = "0. (Infinito)";
      return resut;
    }
    return resut;
  }
}
