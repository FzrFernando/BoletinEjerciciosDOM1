// Ejercicio 1: Acceso a Elementos del DOM

// 1.1. Utiliza document.getElementById() para obtener el nodo con el id "main" de tu página web de ejemplo. Imprime el nodo en la consola.
let nodoMain = document.getElementById("lipsum");
console.log(nodoMain);

// 1.2. Usa document.getElementsByClassName() para obtener todos los elementos con la clase "error" en tu página web de ejemplo. Imprime la colección en la consola.
let claseError = document.getElementsByClassName("error");
console.log(claseError);

// 1.3. Utiliza document.getElementsByTagName() para obtener todos los elementos <p> de tu página web de ejemplo. Imprime la colección en la consola.
let elementosP = document.getElementsByTagName("p");
console.log(elementosP);

// 1.4. Emplea document.querySelector() para obtener el primer párrafo con la clase "error" en tu página. Imprime el nodo en la consola.
let primerParrafoError = document.querySelector("p.error");
console.log(primerParrafoError);

// 1.5. Usa document.querySelectorAll() para obtener todos los párrafos con la clase "error" en tu página. Imprime la colección en la consola.
let todosParrafos = document.querySelectorAll("p.error");
console.log(todosParrafos);

// 1.6. Obtén por consola, al menos de 2 formas diferentes:
// El elemento con id ‘input2’
let input2PrimeraForma = document.getElementById("input2");
console.log(input2PrimeraForma);
let input2SegundaForma = document.querySelector("#input2");
console.log(input2SegundaForma);

// La colección de párrafos
let coleccionParrafosPrimeraForma = document.getElementsByTagName("p");
console.log(coleccionParrafosPrimeraForma);

let coleccionParrafosSegundaForma = document.querySelectorAll("p");
console.log(coleccionParrafosSegundaForma);

// Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
// Utilizaremos el primer ejercicio
let parrafosLipsumPrimeraForma = nodoMain.getElementsByTagName("p");
console.log(parrafosLipsumPrimeraForma);

let parrafosLipsumSegundaForma = nodoMain.querySelectorAll("p");
console.log(parrafosLipsumSegundaForma);

// El formulario (ojo, no la colección con el formulario sino sólo el formulario)
let formularioPrimeraForma = document.querySelector("form");
console.log(formularioPrimeraForma);

let formularioSegundaForma = document.getElementsByTagName("form");
console.log(formularioSegundaForma[0]);

// Todos los inputs
let todosInputsPrimeraForma = document.getElementsByTagName("input");
console.log(todosInputsPrimeraForma);

let todosInputsSegundaForma = document.querySelectorAll("input");
console.log(todosInputsSegundaForma);

// Sólo los inputs con nombre ‘sexo’
let sexoPrimeraForma = document.getElementsByName("sexo");
console.log(sexoPrimeraForma);

let sexoSegundaForma = document.querySelectorAll('input[name="sexo"]');
console.log(sexoSegundaForma);

// Los items de lista de la clase ‘important’ (sólo los LI)
let itemsListaPrimeraForma = document.querySelectorAll('li.important');
console.log(itemsListaPrimeraForma);

// Arreglar el siguiente
// let itemsListaSegundaForma = document.querySelectorAll('ul li.important');
// console.log(itemsListaSegundaForma);


// Ejercicio 2: Acceso a Nodos Relacionados

// 2.1. Utiliza document.querySelector() para obtener el primer párrafo dentro del div con id "lipsum" en tu página web de ejemplo. Imprime el nodo en la consola.
let primerParrafoLipsum = document.querySelector('div[id="lipsum"] p')
console.log(primerParrafoLipsum);

// 2.2. Emplea el método nextElementSibling para obtener el siguiente hermano del párrafo obtenido en el ejercicio 2.1. Imprime el nodo en la consola.
let hermanoSiguiente = primerParrafoLipsum.nextElementSibling;
console.log(hermanoSiguiente);

// 2.3. Utiliza el método parentElement para obtener el elemento padre del párrafo obtenido en el ejercicio 2.2. Imprime el nodo en la consola.
let padreParrafo = hermanoSiguiente.parentElement;
console.log(padreParrafo);

// 2.4. Obtén por consola, al menos de 2 formas diferentes: