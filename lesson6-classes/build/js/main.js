"use strict";
class Coder {
    // name: string;
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello ${this.name}`;
    }
}
const john = new Coder("john", "rock", 22);
// this is ok in JS but error in TS as it was private and protected.
// console.log(john.lang);
// console.log(john.age);
// console.log(john.name);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        // "this" assignment needs to goes below super
        this.computer = computer;
    }
    getLang() {
        return `I wrote ${this.lang}`;
    }
}
const sara = new WebDev("Mac", "sara", "pop", 19);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const player = new Guitarist("jim", "Guitar");
console.log(player.play("strums"));
// =========-========-=-=-=-=-
class Peeps {
    static getCount() {
        return this.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("john");
const Rogers = new Peeps("Rogers");
const stack = new Peeps("stack");
console.log(Peeps.count);
console.log(John.id);
console.log(Rogers.id);
console.log(stack.id);
