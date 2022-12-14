// objects inherit features from one another.
let dragon = {
    name: 'Dragon',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        return `I am ${thisname}, the fire dragon`
    }
}
let lizzard = {
    name: 'Lizzy',
    fight() {
        return 1
    }
};
// borrowed method from dragon to lizzard.
const singLizzard = dragon.sing.bind(lizzard);

// prototype methods
lizzard.__proto__ = dragon;
lizzard.sing()
dragon.isPrototypeOf(lizzard);