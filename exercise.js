// 1. weekend //
// const weekend = (date) => {
//   let dayOfWeek = date.getDay();

//   return dayOfWeek === 0 || dayOfWeek === 6;
// };

// const checkDate = new Date(2023, 8, 16);

// if (weekend(checkDate)) {
//   console.log(`is weekend`);
// } else {
//   console.log(`is not weekend`);
// }

// 2. gcd //
// const gcd = (x, y) => {
//   if (typeof x !== "number" || typeof y !== "number") return false;
//   x = Math.abs(x);
//   y = Math.abs(y);
//   while (y) {
//     let t = y;
//     y = x % t;
//     x = t;
//   }
//   return x;
// };
// console.log(gcd(48, 66));

// 3. lcm //
// let x = 13;
// let y = 48;
// const lcm = (a, b) => {
//   return (a * b) / gcd(x, y);
// };
// a = x; // 13
// b = y; // 48
// let result;
// do {
//   result = lcm(a, b);
//   a = result;
//   b = Math.max(x, y);
// } while (a % b !== 0);
// console.log(lcm(x, y));

// 4. most common character from a string //
// const findCommon = (str) => {
//   const obj = {};
//   let charMax = "";
//   let count = 0;

//   for (let char of str) {
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }

//     for (let char in obj) {
//       if (obj[char] > count) {
//         count = obj[char];
//         charMax = char;
//       }
//     }
//   }
//   return charMax;
// };
// console.log(findCommon("asdasdasdaaaaa"));

// 5 //
// const alphabet = (str) => {
//   return str.split("").sort().join("");
// };
// console.log(alphabet("aabbccaaa"));

// const alphabet = (str) => {
//   let str2 = str.split("");
//   let min;
//   for (let i = 0; i < str2.length; i++) {
//     min = i;

//     for (let j = i + 1; j < str2.length; j++) {
//       if (str2[j] < str2[i]) min = j;
//     }
//     if (min !== i) [str2[i], str2[min]] = [str2[min], str2[i]];
//   }
//   return str2.join("");
// };
// console.log(alphabet("aabbccaa"));

// 6 //
// let date = [
//     new Date("2024-09-18"),
//     new Date("2024-09-19"),
//     new Date("2024-09-17"),
// ];

// const minim = (date) => {
//   let minimum = new Date(Math.min.apply(null, date));
//   let str = minimum.toISOString().split("T")[0]
//   console.log(str);
// };
// minim(date);

// 7 //
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const sum = (arr) => {
//   let output = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       output += arr[i][j];
//     }
//   }
//   return output;
// };
// console.log(sum(arr));

// 8 //
// const prefix = (arr) => {
//   let size = arr.length;

//   if (size == 0) return "";

//   if (size == 1) return arr[0];

//   arr.sort();

//   let end = Math.min(arr[0].length, arr[size - 1].length);

//   let i = 0;
//   while (i < end && arr[0][i] == arr[size - 1][i]) {
//     i++;
//   }
//   let pre = arr[0].substring(0, i);
//   return pre;
// };
// console.log(prefix(["apple", "ape", "april", "apem"]));

// 9 //
// let arr = [null, "bang", 1, undefined, "halo", 13];
// const copies = (arr) => {
//   let mid = Math.ceil(arr.length / 2);
//   let cop = arr.slice(0, mid);
//   return cop;
// };
// console.log(copies(arr));

// 10 //
// const myFunc = (month, year) => new Date(year, month, 0).getDate();
// console.log(myFunc(3, 2023));

// 11 //
// const findDay = () => {
//   let now = new Date();
//   let start = new Date(now.getFullYear(), 0, 0);
//   let diff = now - start;
//   let oneDay = 1000 * 60 * 60 * 24;
//   let day = Math.floor(diff / oneDay);
//   return day;
// };
// console.log(findDay());

// 12 //
// const age = (birth) => {
//   let min = new Date() - new Date(birth);
//   let tahun = min / (1000 * 60 * 60 * 24);
//   return Math.floor(tahun / 365);
// };
// console.log(age("2004-09-22"));
