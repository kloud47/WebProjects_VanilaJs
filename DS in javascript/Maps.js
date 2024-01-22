'use strict';

////// Maps in javaScript: => key value pairs:
// properties ->
// 1) key value pairs
// 2) key can be of any type

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzaria', 'Vegeterian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :D');

console.log(rest.get('name'));
console.log(rest.get(true)); 

const time = 20;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

console.log(rest.get(arr));

console.log('');
console.log('');
console.log('');

///////////////////////////////////////////////////////////////////////////////////////////////
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct ans...'],
    [false, 'Wrong ans...']
]);
console.log(question);

///////////// convert Object to map:
const openingHours = {
    thu: {
        open: 12,
        close: 22,
        },
    fri: {
        open: 11,
        close: 23,
        },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
        },
};

const HoursMap = new Map(Object.entries(openingHours));
console.log(HoursMap);

/////(Iteration)/////////////////////////////////////////////////////////////

/////(Quiz app)----->
console.log(question.get('question'));
for(const [key, value] of question) {
    if(typeof key === 'number')
    console.log(`Answer ${key}: ${value}`);
};
// const answer = Number(prompt("What is your answer -> "));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

/////////// convert map to an array:
console.log([...question]);
console.log([...question.keys()])
console.log([...question.values()])
