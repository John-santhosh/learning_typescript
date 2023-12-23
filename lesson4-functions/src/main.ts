let a: string = "john";
let b = "san";

console.log(a);

// literal types

let myName: "john" | "santhosh" | "Dave";

myName = "santhosh";

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: string): void => {
  console.log(message);
};

console.log(add(2, 5));
logMsg("hello");

let subtract = function (c: number, d: number) {
  return c - d;
};
type mathFunc = (b: number, a?: number) => void;

// using interface
interface mathFunc1 {
  (a: number, b: number): number;
}

const testFunc: mathFunc = (d, f) => {};

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  return c ? a + b + c : a + b;
};

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    console.log(numberOrString(i));
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};

// infinite();
