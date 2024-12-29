// example

//function hello() {
//    console.log("hello ts");
//}
//
//const message: () => void = hello;
//
//message();

// another example

//function sum(x: number, y: number): number {
//    return x + y;
//}
//
//function subtract(a: number, b: number): number {
//    return a - b;
//}
//
//let op: (x: number, y: number) => number;
//
//op = sum;
//console.log(op(2, 4));  // 6
//
//op = subtract;
//console.log(op(6, 4));  // 2


// functions as parameters of other functions
//function sum(x: number, y: number): number {
//    return x + y;
//}
//
//function multiply(a: number, b: number): number {
//    return a * b;
//}
//
//function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {
//
//    return op(x, y);
//}
//
//console.log(mathOp(10, 20, sum)); // 30
//console.log(mathOp(10, 20, multiply)); // 200


// using 'type' keyword
//type Operation = (a: number, b: number) => number;
//
//function mathOp(x: number, y: number, op: Operation): number {
//
//    return op(x, y);
//}
//
//const sum: Operation = function (x: number, y: number): number {
//    return x + y;
//};
//
//console.log(mathOp(10, 20, sum)); // 30

// arrow functions
//const sum = (x: number, y: number) => x + y;
//
//const result = sum(15, 35); // 50
//console.log(result);

// we can omit the type of parameters
//const sum = (x, y) => x + y;
//
//const result = sum(15, 35); // 50
//console.log(result);


// If the arrow function doesn't require paratemers, then we use empty parentheses (). If we are passing only one parameter, then we can omit the parentheses.
//const square = x => x * x;
//const hello = () => "hello world"
//
//console.log(square(5)); // 25
//console.log(hello());   // hello world

// Arrow functions can be passed to a function instead of a parameter that is a function
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
    return operation(x, y);
}

console.log(mathOp(10, 20, (x, y) => x + y)); // 30
console.log(mathOp(10, 20, (x, y) => x * y)); // 200