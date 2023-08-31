1; //
// let celsius = 20;
// let fahrenheit = (celsius * 9) / 5 + 32;

// console.log(`${fahrenheit}`);

2; //
// let number = 7;

// if (number % 2 == 0) {
//   console.log(`${number} adalah bilangan genap`);
// } else {
//   console.log(`${number} adalah bilangan ganjil`);
// }

4; //
// let number = 5;
// let sum = 0;
// let i = 1
// for ( i ; i <= number; i++) {
//     console.log(`${i} +`);
//   sum += i
// }

5; //
// let number = 1;
// let fac = 1;
// for (let i = 7; i >= number; i--) {
//   fac *= i;
// }

// console.log(`7! = ${fac}`);

6; //
let num = 10;
let a = 0;
let b = 1;
let desc = "";

for (let i = 0; i < num; i++) {
  desc += `${a}`;
  let c = a + b;
  a = b;
  b = c;
}

console.log(`${num} -> ${desc}`);

// let number = 8;
// let prima = true;

// if (number > 1) {
//   for (let i = 2; i < (number); i++) {
//     if (number % i == 0) {
//       prima = false;
//       console.log(i);
//     }
//   }
// }

// if (prima) {
//   console.log(`${number} adalah prima`);
// } else {
//   console.log(`${number} bukan prima`);
// }

// var users = 5;
// var sum = 0;
// let joni = "";

// for (var i = 1; i <= users; i++) {
//   for (var j = 5; j >= 5; j--) {
//       joni += `${i}`
// }
// joni += `+`;
// }
// console.log(`${joni} = ${sum}`);

// let number = 18;
// let divider = 0;

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     divider++;
//   }
// }
// console.log(`${number} ${divider === 2 ? "adalah" : "bukan"} bilangan prima`);

// let num = 5;
// let counter = 1;
// let desc = "1";

// for (let i = 2; i <= num; i++) {
//   desc += ` + ${i}`;
//   counter += i;
// }

// console.log(`${num} -> ${desc} = ${counter}`);

// let number = 1;
// let fac = 1;
// let desc = "5 ->";
// for (let i = 5; i >= number; i--) {
//     if (i != number = )
//   fac *= i;
// }

// console.log(` ${desc} = ${fac}`);

// let num = 5;
// let counter = 1;
// let desc = num;

// for (let i = num; i > 1; i--) {
//   desc += ` X ${i - 1}`;
//   counter *= i;
// }

// console.log(`${num} -> ${desc} = ${counter}`);
