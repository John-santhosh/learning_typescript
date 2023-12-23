"use strict";
// this function only works with the string type
const stringEcho = (args) => args;
// how to make it generic how to abstract the type so that i would work with any function "<T>- type variable "
const echo = (args) => args;
const isObj = (arg) => {
    if (typeof arg === "object" && !Array.isArray(arg) && arg !== null) {
        return true;
    }
    return false;
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        // if its array and has length of 0
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        // if its object and not an array and has length of 0
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        // if its array and has length of 0
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        // if its object and not an array and has length of 0
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// <T extends HasId> tell TS that it need to have that id property else throw an error (makes it necessary)
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 5, name: "john" }));
// console.log(processUser({ name: "john" })); // throws error
// that T extends HasId make id key should present in the object
// K is the index signature for the map()
// assume T is the object that has an ID
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
// test the above generic function
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "name"));
//////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const Store = new StateObject("John");
console.log(Store);
Store.state = "santhosh";
// Store.state = 12;
console.log(Store.state);
//any thing withing the type
const MyObj = new StateObject([15]);
