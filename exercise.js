// 1 //
// let arr = [2, 2, 1, 1, 1, 2, 2];

// const majority = (arr) => {
//   let candidate;
//   let count = 0;

//   for (const num of arr) {
//     if (count === 0) {
//       candidate = num;
//     }
//     count += candidate === num ? 1 : -1;
//   }

//   count = 0;
//   for (const num of arr) {
//     if (num === candidate) {
//       count++;
//     }
//   }
//   if (count > arr.length / 2) {
//     return candidate;
//   }
// };
// console.log(majority(arr));

// 2 //
// const convertRoman = (s) => {
//   let roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   str = s.toUpperCase().split("");
//   let result = 0;
//   let prevValue = 0;

//   for (let i = str.length - 1; i >= 0; i--) {
//     const currentValue = roman[str[i]];
//     if (currentValue < prevValue) {
//       result -= currentValue;
//     } else {
//       result += currentValue;
//     }
//     prevValue = currentValue;
//   }
//   return result;
// };
// console.log(convertRoman("mcmxciv"));

// 3 //

// const pascal = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr; i++) {
//     let row = [];
//     row.push(1);
//     for (let j = 1; j < i; j++) {
//       let prevRow = res[i - 1];
//       let leftValue = prevRow[j - 1];
//       let rightValue = prevRow[j];
//       row.push(leftValue + rightValue);
//     }
//     if (i > 0) {
//       row.push(1);
//     }
//     res.push(row);
//   }
//   return res;
// };

// console.log(pascal(3));
// 4 //
// const stock = (arr) => {
//   let min = Math.min(...arr);
//   let spliced = arr.splice(arr.indexOf(min));
//   let max = Math.max(...spliced);
//   return max - min;
// };
// console.log(stock([7, 6, 4, 3, 1]));
