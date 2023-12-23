"use strict";
let stringArray = ["one", "two", "three"];
let guitars = ["start", "les paul", 2343];
let mixedData = ["EVH", 1983, true];
stringArray[0] = "123";
let test = [];
let myTuple = ["john", 3, true];
let mixed = ["john", 3, true];
myTuple.push(1);
// myTuple[4] = 123;
console.log(myTuple);
const egObj = {
    prop1: "john",
    prop2: true,
};
egObj.prop2 = false;
let evh = {
    name: "john",
    active: true,
    albums: [1231, 1123, "won"],
};
let jp = {
    name: "john",
    active: true,
    albums: [1231, 1123, "won"],
};
// jp = evh;
// evh = jp;
const greetGuitarist = (guitarist) => {
    var _a;
    return `Welcome ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()}`;
};
console.log(greetGuitarist(jp));
