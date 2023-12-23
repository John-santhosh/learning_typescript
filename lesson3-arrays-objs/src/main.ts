let stringArray = ["one", "two", "three"];

let guitars = ["start", "les paul", 2343];

let mixedData = ["EVH", 1983, true];

stringArray[0] = "123";

let test = [];

let myTuple: [string, number, boolean] = ["john", 3, true];

let mixed = ["john", 3, true];

myTuple.push(1);
// myTuple[4] = 123;
console.log(myTuple);

const egObj: { prop1: string; prop2: boolean } = {
  prop1: "john",
  prop2: true,
};

egObj.prop2 = false;

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "john",
  active: true,
  albums: [1231, 1123, "won"],
};

let jp: Guitarist = {
  name: "john",
  active: true,
  albums: [1231, 1123, "won"],
};

// jp = evh;
// evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  return `Welcome ${guitarist.name?.toLocaleLowerCase()}`;
};

console.log(greetGuitarist(jp));
