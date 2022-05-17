"use strict"

// IMPORTE LE MODULE "Car"
import Car from'./lib/Car.js';

// CRÉATION DE TROIS VOITURES DIFFÉRENTES
let maBenz      = new Car('Mercedez', 'Classe C 5', 'white', 4, 1496, 204);
let maDacia     = new Car('Dacia', 'Sandero', 'blue', 4, 999, 67 )
let maFerrari   = new Car('Ferrari', '308 GTS', 'red', 2, 2927, 208 )

console.log(); // saut de ligne
maBenz.print();
console.log(); // saut de ligne
maDacia.print();
console.log(); // saut de ligne
maFerrari.print();
console.log(); // saut de ligne