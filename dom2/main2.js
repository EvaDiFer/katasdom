// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div1 = document.createElement('div');
document.body.appendChild(div1);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement('div');
const pInsideDiv2 = document.createElement('p');
div2.appendChild(pInsideDiv2);
document.body.appendChild(div2);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const pInsideDiv3 = document.createElement('p');
  div3.appendChild(pInsideDiv3);
}
document.body.appendChild(div3);

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDynamic = document.createElement('p');
pDynamic.textContent = 'Soy dinámico!';
document.body.appendChild(pDynamic);
// 1.5 Inserta en el div con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const divElement = document.querySelector('.fn-insert-here');
divElement.textContent = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement('ul');
apps.forEach((app) => {
  const liElement = document.createElement('li');
  liElement.textContent = app;
  ulElement.appendChild(liElement);
});
document.body.appendChild(ulElement);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach((element) => element.remove());

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';
const divBefore = document.body.querySelectorAll('div')[0];
const divAfter = document.body.querySelectorAll('div')[1];
document.body.insertBefore(pMiddle, divAfter);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsWithClassInsertHere = document.querySelectorAll('.fn-insert-here');
divsWithClassInsertHere.forEach((div) => {
  const pInsideDiv = document.createElement('p');
  pInsideDiv.textContent = 'Voy dentro!';
  div.appendChild(pInsideDiv);
});
