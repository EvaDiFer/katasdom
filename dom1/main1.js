// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const buttonWithClassShowme = document.querySelector('.showme');
console.log(buttonWithClassShowme);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1WithIdPillado = document.querySelector('#pillado');
console.log(h1WithIdPillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const allPokemonElements = document.querySelectorAll('.pokemon');
console.log(allPokemonElements);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const allElementsWithDataFunction = document.querySelectorAll(
  '[data-function="testMe"]'
);
console.log(allElementsWithDataFunction);

// 1.6 Usa querySelector para mostrar por consola el tercer personaje con el atributo data-function="testMe".

const thirdCharacterWithDataFunction = document.querySelectorAll(
  '[data-function="testMe"]'
)[2];
console.log(thirdCharacterWithDataFunction);
