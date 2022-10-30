// variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'c'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'apple'; // global
console.log(fruit); // apple

function eatFruit() {
  console.log(fruit); // apple
}

eatFruit();

function countries() {
  country = 'Mexico'; // global
  console.log(country); // Mexico
}

countries();
console.log(country); // Mexico
