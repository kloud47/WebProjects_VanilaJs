'use strict';

                                                                                //
//// Constructor function ////////////////////////////////////////////////////////
// arrow function doesn't work since we need this:

const Person = function(firstName, birthYear) {
    // Instance properties:
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this:
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // };
};

// Prototypes:
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};
Person.prototype.species = 'Homo Sepians';

const jonas = new Person('jonas', 1991);
const Matilda = new Person('jonas', 1991);
const jacksparrow = new Person('jonas', 1991);
console.log(jonas, Matilda, jacksparrow);

console.log(jonas instanceof Person);

jonas.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// prototype of an object is the prototype property of the constructor function of that object:
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(jonas.hasOwnProperty('species'));
console.log(jonas.__proto__.hasOwnProperty('species'));

////////////////////////////////////////////////////////////////
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);// Object
console.log(jonas.__proto__.__proto__.__proto__);// null

console.dir(Person.prototype.constructor);

///// prototype of Arrays //////////////////////////////////////////////////
const arr = [1, 5, 3, 7, 3, 5, 3];// same as new Array:
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() { // Making a new array.prototype property:
    return [...new Set(this)];
};

console.log(arr.unique());

// Prototype of HTML element:
const h1 = document.querySelector('h1');
console.dir(h1);

// Prototype of function:
console.dir(x => x + 1);


///// Classes (ES6) //////////////////////////////////////////////////////////////////////
// Class expression:
// const PersonCl = class {};

// Class declaration:
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    calcAge() { // this here works like the prototype property:
        console.log(2037 - this.birthYear);
    };

    // set a property that already exists:
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
};

const jessica = new PersonCl('Jessica ok', 1996);
console.log(jessica);
jessica.calcAge();

const walter = new PersonCl('Walter Lupin', 1998);

PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
};

jessica.greet();


/// 1) classes are not hoisted:
/// 2) classes are also first class
/// 3) classes are executed in strict mode

//
///////// Getter and Setter //////////////////////////////////////////////////////////////
const account = {
    owner: 'Priyanshu',
    movements: [200, 300, 250, 100, 111],
    
    get latest() { // Getter
        return this.movements.slice(-1).pop();
    },
    
    set latest(mov) { // Setter
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 600;
console.log(account);

//////////////////////
class apples {
    constructor(amount) {
        this.amount = amount;
    };
    
    get applesamount() { // Getter
        return this.amount;
    };
};

const fruits = new apples(8);

console.log(fruits.applesamount);
console.log(new apples(9).applesamount);

///////// Static Method //////////////////////////////////////////////////////////////////////////////
// available only for the constructor function not the instances:
const Person2 = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person2.hey = function() {
    console.log('Hey there!!');
    console.log('Points to the constructor function => ',this);
};

// new Person2('jey', 1999).hey();
Person2.hey();

//////////////////////////
class ok {
    static helper() {
        console.log('okkookok');
    };
};

console.log(ok.helper());

                                                                                                //
/////////// Object.create ///////////////////////////////////////////////////////////////////////
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2009;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sara =  Object.create(PersonProto);
sara.init('Sarah', 1970);
sara.calcAge();

                                                                                        //
//////////// Inheritance (using Constructor function)/////////////////////////////////////////////////////////////////
const PERSON = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
PERSON.prototype.calage = function() {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    PERSON.call(this, firstName, birthYear);// inheriting some properties of person:
    this.course = course;
};
// Linking prototypes:
Student.prototype = Object.create(PERSON.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and study ${this.course}`);
}   

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calage();

console.log(mike instanceof Student);
console.log(mike instanceof PERSON);
console.log(mike instanceof Object);

//////////// Inheritance (using classes ES6)/////////////////////////////////////////////////////////////////
class Base_person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    };
    
    calcAge() {
        console.log(2037 - this.birthYear);
    };

    static hey() {
        console.log('Hey there !!');
    };
};

class inherit_Student extends Base_person {
    constructor(firstName, birthYear, course) {
        // Always needs to happen first:
        super(firstName, birthYear);
        this.course = course;
    };
    
    introduce() {
        console.log(`My name is ${this.firstName} and study ${this.course}`);
    };
    
    calcAge() {
        console.log('Method overrides.')
    }
};

const martha = new inherit_Student('Martha', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//////////// Inheritance (using classes ES6)/////////////////////////////////////////////////////////////////
const basePerson = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};


const inheritStudent = Object.create(basePerson);
inheritStudent.init = function(firstName, birthYear, course) {
    basePerson.init.call(this, firstName, birthYear);
        this.course = course;
};

inheritStudent.introduce = function() {
    console.log(`My name is ${this.firstName} and study ${this.course}`);
};

const jay = Object.create(inheritStudent);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

                                                                                            //
//////////////////////////////////////////////////////////////////////////////////////////////
// class Account {
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this._pin = pin;
//         this._movements = [];
//         this.locale = navigator.language;
        
//         console.log(`Thanks for opening an account, ${owner}.`);
//     };
    
//     deposits(val) {
//         this._movements.push(val);
//     }
    
//     withdraw(val) {
//         this.deposits(-val);
//     }
    
//     _approveLoan(val) {
//         return true;
//     }
    
//     requestLoan(val) {
//         if(this._approveLoan(val)){
//             this.deposits(val); 
//             console.log('Loan approved.');
//         };
//     };
// };

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposits(700);
// acc1.deposits(960);
// acc1.withdraw(90);
// acc1.requestLoan(900);
// console.log(acc1);

/////// (Encapsulation Public and Private fields) //////////////////////////////////////////////////////////////////////////////////////
class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = [];
    #pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        
        console.log(`Thanks for opening an account, ${owner}.`);
    };

    deposits(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposits(-val);
        return this;
    }
    
    _approveLoan(val) {
        return true;
    }
    
    requestLoan(val) {
        if(this._approveLoan(val)){
            this.deposits(val); 
            console.log('Loan approved.');
            return this;
        };
    };
};

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposits(700);
acc1.deposits(960);
acc1.withdraw(90);
acc1.requestLoan(900);
console.log(acc1);
// console.log(acc1.#movements);
// console.log(acc1.#pin);

/// Method chaining in ES6 classes: (OOPS)
acc1.deposits(300).deposits(500).deposits(978).withdraw(700).requestLoan(899);
console.log(acc1);