// Index signatures
//  are useful when you creating a object and you dont know the exact name of the object keys but you know the shape of the object keys and you can declare the type of the keys and the types of the object

// Index signatures
// interface TransactionObj {
//   // index cannot be boolean
//   [index: string]: number;
//   //readonly  [index: string]: number;
// }

// this allow us to define some know keys and write index signature
interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todayTransaction: TransactionObj = {
  Pizza: -10,
  Books: 10,
  Job: 20,
};

console.log(todayTransaction.Pizza);
console.log(todayTransaction["Pizza"]);

let prop: string = "Pizza";
// this will only work with index signature
console.log(todayTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    // this will only work with index signature
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todayTransaction));

// we cant do this if readonly is defined in interface
todayTransaction.Pizza = 40;

///////////-=-=-=-=-=-=-=-=

interface Student {
  // [index: string]: string | number[] | number | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "john",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student) {
  // the keyOf is creates a union type and that union type is of the specific string literal (its the union type of name, GPA, classes) and allows us to still loop though the object
  console.log(`${key}=> ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentkey = (student: Student, key: keyof Student): void => {
  console.log(`student ${key}: ${student[key]}`);
};

logStudentkey(student, "name");

//////////////======-=-=-=-=-=-=

// interface Incomes {
//   [key: string]: number;
//   // An index signature parameter type cannot be a literal type or generic type
//   // [key: "salary"]: number;
//   Pizza: string
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

// the above two line is declaring the type like
/*
type Incomes = {
    salary: string | number;
    bonus: string | number;
    sidehustle: string | number;
}
*/
const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
