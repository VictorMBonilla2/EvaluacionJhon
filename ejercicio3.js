import { ordenarNumeros } from "/utils.js";


let contador = parseInt(prompt("¿Cuántos numeros desea ingresar?"));
let numeros = [];

if (!isNaN(contador)) {
  for (let i = 0; i < contador; i++) {
    let numero = parseInt(prompt(`Ingrese el numero ${i + 1}`));
    numeros.push(numero);
  }

  let numerosOrdenados = ordenarNumeros(...numeros);

  console.table({ "Numeros ordenados": numerosOrdenados });
}
