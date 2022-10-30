/*
Hoisting en variables declaradas con var

Al hacer referencia a una variable que no está declarada aún,
JavaScript crea esta variable antes de declararla y le asigna un valor de undefined
*/

console.log(nombre); // undefined
var nombre = 'Andres'; 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"



/*
let y const

El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la Temporal Dead Zone.

La Temporal Dead Zone es una región del código donde la variable está declarada, pero no es posible acceder a esta, 
provocando un error de tipo ReferenceError.
*/

console.log(nameVar); // undefined
console.log(nameLet); // ReferenceError: nameLet is not defined

var nameVar = 'myVar';
let nameLet = 'myLet';


/*
Hoisting en funciones

La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.
*/
console.log(saludar());

function saludar() {
  return 'Hola';
}

// Hoisting
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
