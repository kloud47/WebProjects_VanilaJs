'use strict';

////////////(Fibonacci series) //////////////////////////////////////////
// 0 1 1 2 3 5 8 13 21.....

// const fibonacci = (n) => {
//     const fib = [0, 1];

//     for(let i = 2; i<n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }
// console.log(fibonacci(6));
////////////////////////////////
// const number = parseInt(prompt("Enter the number of terms: "));
// let n1 = 0, n2 = 1, nextTerm;

// console.log("........Fibonacci Series.........")

// for(let i = 0; i<number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
/////////////////////////////////////--------(parseInt() Function)--------------/******/
///parses a string argument and returns a Integer:-> parseInt(string, radix) => radix = 2-36 base in maths numbersystem:
// output => Integer or NaN:
console.log(parseInt('101', 2));
console.log(parseInt('   123'));
console.log(parseInt('  00123'));
console.log(parseInt('123', 16));
console.log(parseInt('123', 8));
console.log(parseInt('0xff'));
console.log(parseInt('ff', 16));
console.log(parseInt('1.909'));
////////////////////////////////////////////////////////////////////////////////////////////////