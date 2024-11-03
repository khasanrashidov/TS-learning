var x = "hello";

console.log("x =", x);

var x = "world";

console.log("x =", x);

let y = "hello world";

console.log("y =", y);

const z = "seven";

// z = "eight"; cannot change the value as z is a constant

let a = 10;
{
  let a = 25;
  {
    let a = 163;
    console.log(a); // 163
  }
  console.log(a); // 25
}
console.log(a); // 10
