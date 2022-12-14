// ES6 Class
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