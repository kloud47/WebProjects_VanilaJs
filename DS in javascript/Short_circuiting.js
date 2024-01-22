/// (Short Circuiting) (using OR ||) ///////////////////////////////////
console.log("-------------------------OR------------------------");
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

/// (Short Circuiting) (using AND &&) //////////////////////////////////
console.log("-------------------------AND-----------------------");
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log(false || 0);
console.log(false || 1);
console.log('Hello' && 23 && null && 'Jonas');

// example :
const ok = 1;
if(ok) {
    console.log('sahi hai')
}

const ans = ok && "sahi hai";
console.log(ans);

/// Nullish coalescing:
let khali;
const result = khali ?? false;
console.log(result);
console.log(false ?? 10 ?? khali); // first Non-null data is returned:

///( Assignment Operator )///////////////////////////////////////////////
const rest1 = {
    name: 'Capri',
    numGuests: 20
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

/// OR assignment operator:
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator:
rest1.numGuests ??= 11;
rest2.numGuests ??= 11;
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);