"use strict";
let a = "john";
let b = "san";
console.log(a);
// literal types
let myName;
myName = "santhosh";
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
console.log(add(2, 5));
logMsg("hello");
let subtract = function (c, d) {
    return c - d;
};
const testFunc = (d, f) => { };
// optional parameters
const addAll = (a, b, c) => {
    return c ? a + b + c : a + b;
};
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        console.log(numberOrString(i));
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
// infinite();
