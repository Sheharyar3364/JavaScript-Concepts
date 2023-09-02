// console.log("2" > 1); // true

// console.log("02" > 1); // true

console.log(null > 0); // false // null will be first converted into zero and then compared with zero
console.log(null == 0) // false . WTF?
console.log(null === 0); // false
console.log(typeof null); // obj
console.log(Number(null) == 0);
console.log(null >= 0); // true


console.log(Number(null)); // 0

console.log('undefined ********')

console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined > 0, undefined < 0);