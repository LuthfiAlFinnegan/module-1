// let arr = [1, "string", null, false, undefined, 2, "yes", undefined]; //
// 1. Based on the array above write a function that will return primitive data types only //
// function dataTypes(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i]) {
//       console.log(`${arr[i]} is ${typeof arr[i]}`);
//     }
//   }
// }
// dataTypes(arr);

// 2. Write a function from a given array of numbers and return the second smallest number //
// let arr = [343, 564, 678, 345, 65, 87];
// function smallest(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[1];
// }
// console.log(smallest(arr));

// 3. Write a function from a given array of mixed data types and return the sum of all the number //
// let arr = [1, "luthfi", null, 17, false, 200];
// function sum(arr) {
//   let con = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       con += arr[i];
//     }
//   }
//   return con;
// }
// console.log(sum(arr));

// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10]; //
// 4. Write a function from the above array of number that will return sum of duplicate values //

// function sumDup(arr) {
//   let con = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.filter((item) => item == arr[i]).length > 1) {
//       con.push(arr[i]);
//     }
//   }
//   return con.reduce((a, b) => a + b);
// }

// console.log(sumDup(arr));

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor. //

// function suit(player) {
//   const computer = ["gunting", "kertas", "batu"];
//   const acak = computer[Math.floor(Math.random() * 3)];
//   if (player === acak) {
//     return "Seri";
//   } else if (
//     (player === "gunting" && acak === "kertas") ||
//     (player === "kertas" && acak === "batu") ||
//     (player === "batu" && acak === "gunting")
//   ) {
//     return "Menang";
//   } else {
//     return "kalah";
//   }
// }

// const player = "gunting";
// console.log(suit(player));

