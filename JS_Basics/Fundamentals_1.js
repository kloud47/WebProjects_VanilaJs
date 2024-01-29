/// [data types] => 
// Primitive => Number, Boolean, Null, Undefined, String
// Object => object // Derived => function, array, regExp
// Special => Symbol

let x, y;
x = y = 25 - 10 - 5;
(a) = (b) = c = 7;
console.log(x, y);
console.log(a, b, c);

// Type Conversion =========================================================>
console.log(Number('jonas'));
console.log(String(23));// explicit conversion
// Type Coersion ===========================================================>
console.log('I am ' + 20 + ' years old.');// implicit conversion

// 5 Falsy values => 0, '', undefined, null, NaN
// all else Truthy