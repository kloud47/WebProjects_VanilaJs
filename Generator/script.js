'use strict';

function* simpleGenerator () {
    console.log("Before 1");
    yield 1;
    console.log("After 1");
    console.log("Before 2");
    yield 2;
    console.log("After 2");
    console.log("Before 3");
    yield 3;
    console.log("After 3");
}
const GeneratorObj = simpleGenerator();
console.log(GeneratorObj);
console.log(GeneratorObj.next());
console.log(GeneratorObj.next(2));
console.log(GeneratorObj.next(6));
console.log(GeneratorObj.next(6));
// console.log(GeneratorObj.next());
// console.log(GeneratorObj.next());
// while (GeneratorObj.next().done !== false) {
//     console.log(GeneratorObj.next());
// }

// infinite loop generator:

function* Generator () {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
};
const GeneratorObj2 = Generator();
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());
console.log(GeneratorObj2.next());

const foo = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};
let str = '';
for (const val of foo()) {
    str = str + val;
}
console.log(str);

// Array iterator:
function* Gen (arr) {
    for (const val of arr) {
        yield val;
    }
};
const GenObj = Gen([1, 3, 6, 8]);
console.log(GenObj.next());
console.log(GenObj.next());
console.log(GenObj.next());
console.log(GenObj.next());
console.log(GenObj.next());

// incrementor:
function* Generate () {
    let id = 1;
    while (true) {
        const increment = yield id;
        if (increment != null) {
            id += increment;
        } else {
            id++;
        }
    }
}
const Obj = Generate();
console.log(Obj.next(3));
console.log(Obj.next(3));
console.log(Obj.next(3));

