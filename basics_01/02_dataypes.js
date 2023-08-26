"use strict";

let name = "Sheharyar";
// let age = 3;
let isLoggedIn = false;

// null, bigInt, number, string, boolean
// type of null is object -- OOPS!
// undefined 
// symbol -- unique and its implementation is react for react componenets' uniqueness. How individual components can be indentified


// object data types
// Functio, Arr, Object

console.log(typeof name);
console.log(typeof null);
console.log(typeof undefined);

let age = "23";
let num = Number(age);
console.log(num);
console.log(typeof age, typeof num);

console.log(Number(name)); // NaN but typeof NaN is number