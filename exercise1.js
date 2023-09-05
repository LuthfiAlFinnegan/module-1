// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function) //

// let arr = [22, 67, 93, 14, 56, 423];

// function highest(arr) {
//   return Math.max(...arr);
// }
// console.log(highest(arr));

// function lowest(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0];
// }
// console.log(lowest(arr));

// let ave = 0;
// function average(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     ave += arr[i];
//     ave /= arr.length;
//   }
//   console.log(`Average of arr is ${ave}`);
// }
// average(arr);

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.//

// let arr = "luthfi al finnegan";

// function larik(arr) {
//   let str = "";
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (i === 9) {
//       str += ` and${arr[i]}`;
//     } else {
//       str += `${arr[i]}`;
//     }
//   }
//   console.log(str.split(" "));
// }
// larik(arr);

// 3. Write a function to split a string and convert it into an array of words //
// let str = "Hello World";
// function pisah(str) {
//   return str.split(" ");
// }
// console.log(pisah(str));

// 4. Write a function to calculate each element in the same position from two arrays of integer.Assume both arrays are of the same length. //
// let arr1 = [1, 2, 3];
// let arr2 = [3, 2, 1];
// let output = [];
// function conv(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     throw new Error(`The array must have same length`);
//   }
//   let output = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let mult = arr1[i] + arr2[i];
//     output.push(mult);
//   }
//   console.log(output);
// }
// conv(arr1, arr2);

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array //
// function add(arr, number) {
//     if (arr.indexOf(number) > -1) return arr;
//     else return [...arr, number];
//   }

//   console.log(add(["luthfi", "ilham"], "luthfi"));
//   console.log(add([1, 2], 3));
