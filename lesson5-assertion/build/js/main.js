"use strict";
//convert to more or less specific
let a = "hello";
let b = a;
let c = a;
console.log(c);
// we cannot use this in JSX
let d = "world";
let e = 4;
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
// this "as string" tells TS that we know that this value will be sting .. we are overriding the return "number | string" from the function
let myVal = addOrConcat(2, 2, "concat");
// The DOM
const img = document.querySelector("img");
// will tell that img' is possibly 'null' we use ! to tell TS it is not null
img.src;
// we can use assertion to overcome this
const imgSrc = document.querySelector("img");
img.src;
//This wont be available in jsx and tsx
// const imgSrc = <HTMLImageElement>document.querySelector("img")
