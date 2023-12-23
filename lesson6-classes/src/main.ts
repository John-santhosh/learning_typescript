class Coder {
  // name: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `Hello ${this.name}`;
  }
}

const john = new Coder("john", "rock", 22);

// this is ok in JS but error in TS as it was private and protected.
// console.log(john.lang);
// console.log(john.age);
// console.log(john.name);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    // "this" assignment needs to goes below super
    this.computer = computer;
  }
  public getLang() {
    return `I wrote ${this.lang}`;
  }
}

const sara = new WebDev("Mac", "sara", "pop", 19);

// sara.lang

// using interface
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const player = new Guitarist("jim", "Guitar");
console.log(player.play("strums"));

// =========-========-=-=-=-=-

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return this.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("john");
const Rogers = new Peeps("Rogers");
const stack = new Peeps("stack");

console.log(Peeps.count);

console.log(John.id);
console.log(Rogers.id);
console.log(stack.id);
