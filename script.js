Array; //
// let fruits = ["kiwi", "strawberry", "apple"];

// for (let fruit of fruits) {
//   console.log(fruit);
//

Function; // declaration
// function square(number) {
//   return number * number;
// }

Function; // expression

// const square = function (number, angka) {
//   return number * angka;
// };

// const x = square(4, 5);

// console.log(x);

// Param_argu; //

// console.log(square(4));

// function greeting(name) {
//   const hello = "selamat";

//   return hello + " pagi " + name;
// }

// console.log(greeting("Luthfi"));

// Default_Parameter; //

// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(4, 5));
// console.log(multiply(4,));

// rest_param; //

// function myFunc(a, b, ...manyMoreArgs) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs);
// }

// myFunc("one", "two", "three", "four");

//  nested function //

// function getMessage(nama) {
//   function greeting() {
//     return "hello " + nama + ". ";
//   }
//   function welcomeMessage() {
//     return "welcome to purwadhika";
//   }
//   return greeting() + welcomeMessage();
// }

// const sapa = getMessage("Luthfi");
// console.log(sapa);

// Closure //

// function greeting(name) {
//   const hello = "hello ";

//   return function () {
//     return hello + name;
//   };
// }

// const sapa = greeting("Luthfi");
// console.log(sapa());

// currying //

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const mul3 = multiplier(3);
// const mul5 = multiplier(5);
// console.log(mul3(3));
// console.log(mul5(5));

// Recursive //
// function countdown(fromNumber) {
//   console.log(fromNumber);

//   let nextNumber = fromNumber - 1;

//   if (nextNumber > 0) {
//     countdown(nextNumber);
//   }
// }

// countdown(3)
// countdown(1);

// Arrow Function //
// const square = (number) => {
//   return number * number;
// };
// console.log(square(2));

// hoisting -> VARIABLE DAN FUNCTION BISA DI HOISTING KECUALI ARROW FUNCTION

// console.log(abc);

// var abc = "abc";

// console.log(str(4));

// function str(number) {
//   return number + number;
// }
