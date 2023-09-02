// data has two types based on how data is placed and accessed in memory

// #Primitive Data Types
// always call by value
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// JavaScript is a dynamically typed language.

// Symbol declaration

const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id, anotherId);
console.log(typeof id, typeof anotherId)

const bignum = 12345678912345n;
console.log(typeof bignum);

console.log(id === anotherId, id == anotherId);

// # Non Primite Data Types || Reference Datatypes
// 3 Types: Objects, Arrays, Functions
console.log(typeof {}, typeof [], typeof function() {})

