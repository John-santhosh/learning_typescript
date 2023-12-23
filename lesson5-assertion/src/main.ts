type one = string;
type two = string | number;
type three = "hello1";

//convert to more or less specific

let a: one = "hello";
let b = a as two;
let c = a as three;

console.log(c);

// we cannot use this in JSX
let d = <one>"world";
let e = <string | number>4;

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

// this "as string" tells TS that we know that this value will be sting .. we are overriding the return "number | string" from the function
let myVal: string = addOrConcat(2, 2, "concat") as string;

// The DOM

const img = document.querySelector("img")!;
// will tell that img' is possibly 'null' we use ! to tell TS it is not null
img.src;

// we can use assertion to overcome this
const imgSrc = document.querySelector("img") as HTMLImageElement;

img.src;

//This wont be available in jsx and tsx
// const imgSrc = <HTMLImageElement>document.querySelector("img")
