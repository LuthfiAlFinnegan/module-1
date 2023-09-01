// function pyramid() {
//   let row = 5;
//   let output = "";
//   for (let i = 1; i <= row; i++) {
//     output += i + " ";
//     console.log(output);
//   }
// }
// pyramid();

// 1 //
// function triangle(height) {
//   let con = 1;

//   for (let i = 1; i <= height; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += ` ${con.toString().padStart(2, "0")}`;
//       con++;
//     }
//     console.log(str);
//   }
// }
// triangle(5);

// 2 //
// function mul(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   console.log(arr);
// }
// mul(15);

// 3 //

// function bmi(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi < 18.5) {
//     console.log(`less weight`);
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log(`ideal`);
//   } else if (bmi >= 25.0 && bmi <= 29.9) {
//     console.log(`overweight`);
//   } else if (bmi >= 30.0 && bmi <= 39.9) {
//     console.log(`very overweight`);
//   } else {
//     console.log(`obesity`);
//   }
// }

// bmi(60,1.6)

// 4 //
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113];

// let answer = a.filter(function (num) {
//   return num % 2 === 0;
// });

// console.log(answer);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

// const even = (array) => array.filter((item) => item % 2 === 0);

// console.log(even(arr));

// function even2(array) {
//   return array.filter((item) => item % 2 === 0);
// }

// console.log(even2(arr));

// function array(arr) {
//   let num = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     num += i;
//   }
//   console.log(num);
// }

// array([1, 2, 3, 4, 5]);

// const add = (arr) => arr.reduce((a, b) => a + b);
// console.log(add([1, 2, 3, 4, 5]));
