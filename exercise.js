// 1 Create a function to check if two objects are equal //
// let obj1 = {
//   nama: "Luthfi",
//   umur: 19,
//   program: "JCWD",
// };

// let obj2 = {
//   nama: "Luthfi",
//   umur: 19,
//   program: "JCWD",
// };

// function check(a, b) {
//   return JSON.stringify(a) === JSON.stringify(b);
// }
// console.log(check(obj1,obj2));

// 2 Create a function to get the intersection of two objects //
// let obj1 = {
//   a: 1,
//   b: 2,
// };
// let obj2 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const intersection = (a, b) => {
//   let con = {};
//   for (const key in a) {
//     if (a[key] == b[key]) {
//       con[key] = a[key];
//     }
//   }
//   return con;
// };
// console.log(intersection(obj1, obj2));

// 3 Create a function to merge two array of student data and remove duplicate data //
// let array1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];
// let array2 = [
//   { name: "Student 1", email: "student1@ail.com" },
//   { name: "Student 3", email: "student3@ail.com" },
// ];

// const merged = (array1, array2) => {
//   let merged = [...array1, ...array2];
//   let arr = [];
//   let uniqueMerged = new Set();
//   for (let i = 0; i < merged.length; i++) {
//     if (!uniqueMerged.has(merged[i].name)) {
//       uniqueMerged.add(merged[i].name);
//       arr.push(merged[i]);
//     }
//   }
//   return arr;
// };
// console.log(merged(array1, array2));

// 4 Create a function that can accept input as an array of objects and switch all values into property and property into value //

// let obj = [
//   {
//     name: "David",
//     age: 20,
//   },
// ];

// const myFunc = (input) => {
//   let res = {};
//   Object.keys(input[0]).map((key) => {
//     res[input[0][key]] = key;
//   });
//   return res;
// };
// console.log(myFunc(obj));

// 5 Create a function to find a factorial number using recursion //
// const factorial = (n) => (n == 0 ? 1 : n * factorial(n - 1));

// console.log(factorial(5));
