let x: number = 10;

let hello: string = "hello world";

let isValid: boolean = true;

let age: number = 22;
let height: number = 1.68;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

let firstName: string = "Tom";
let lastName = "Johns";
let info: string = `Name: ${firstName} ${lastName}. Age: ${age}`;
console.log(info);

const num1: bigint = BigInt(100);
console.log(num1);

const num2: bigint = 100n;
console.log(num2);

let helloWorld = "hello world";

let someVar: any = "hello";
console.log(someVar); // now someVar is string
someVar = 20;
console.log(someVar); // now someVar is number

let someArray: any[] = [22, "Tom", false];

// if we declare a variable without assigning any value, it will be of type any
let something;
something = "hello";
something = 20;

let sum: any;
sum = 1200;
sum = "one thousand two hundred";
let result: number = sum / 12;
console.log(result); // NaN - string can't be divided by number

let sum2: any;
sum2 = "one thousand two hundred"; // or sum2 = 1200;

if (typeof sum2 === "number") {
  let result2: number = sum2 / 12;
  console.log(result2);
} else {
  console.log("invalid operation");
}
