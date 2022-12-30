// ES6 Class
// Class is a syntax sugar keyword but still an object JS
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    // apply method here
    attack() {
        return `attack with` + this.weapon
    }
}
const james = new Elf('James','Gun');
console.log(james.attack())

// 4 ways to interact with this keyword

// new binding this
function Person(name,weapon) {
    this.name = name;
    this.weapon = weapon;
}
const Jack = new Person('Jack',35)

// implicit binding this
const person = {
    name: 'Jack',
    age: 35,
    hi() {
        console.log('hi' + this.name)
    }
}

// explicit binding this
// using call bind apply to explicitly tell the program
const person3 = {
    name:'Jenny',
    age:30,
    hi: function() {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

// arrow function
// lexical scoping
const person4 = {
    name: 'Karen',
    age:30,
    hi: function() {
    var inner = () => {
        console.log('hi' + this.name)
    }
    return inner()
}
}
// super keyword
class Shoes {
    constructor(name,type,size) {
        this.name = name;
        this.type = type;
        this.size = size;
    }
}

class Nike extends Shoes {
    constructor(name, type, size, rarity) {
        super(name, type, size);
        this.rarity = rarity
    }
    releases() {
        return 'Lost and Found Just Recently Released 2 weeks ago'
    }
    shoesname() {
        return 'This shoes size' + this.size;
    }
}

const Chicago = new Nike();
// Pillars of OOP
// Encapsulation - easier to maintain and reusale because of the class packages
// Abstraction - Hiding the complexity.
// Inheritance - avoid to rewrite the same codes
// Polymorphism - many forms, ability to appear in many forms and process object differently depending on their data type or class

