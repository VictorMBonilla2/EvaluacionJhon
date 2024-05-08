import {ordenarPalabras} from "/utils.js";



let contador = parseInt(prompt("¿Cuantas palabras desea ingresar?"));

let palabras = [];

if (!isNaN(contador)) {
  for (let i = 0; i < contador; i++) {
    let palabra = prompt(`Ingrese la palabra  ${i + 1}`);

    palabras.push(palabra);
  }
  let palabrasOrdenados = ordenarPalabras(...palabras);

  console.log(palabrasOrdenados);
}
