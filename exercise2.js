// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only //
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeOdd(array) {
//   return array.filter((item) => item % 2 == 0);
// }
// console.log(removeOdd(array));

/* 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements). */

// function maxGiv(num, ...isi) {
//       let arr = [num];
//       for (let i = 0; i < num - 1; i++) {
//         if (num[i] != isi) {
//           arr.push((num[i] = isi[i]));
//         }
//       }
//       console.log(arr);
//     }
//     maxGiv(5, 10, 24, 3, 6, 7, 8);

/* 3. Write a function that will combine 2 given array into one array */

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// function combine(array1, array2) {
//   for (let i = 0; i < array2.length; i++) {
//     array1.push(array2[i]);
//   }
//   console.log(array1);
// }
// combine(array1, array2);

// WITH CONCAT //
// function combine(array1, array2) {
//   return array1.concat(array2);
// }
// console.log(combine(array1, array2));

/* 4. Write a function to find duplicate values in an array */

// let arr = [1, 1, 2, 2, 3, 3, 4, 5];

// function duplicate(arr) {
//   let con = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr.filter((item) => item == arr[i]).length > 1 &&
//       !con.includes(arr[i])
//     ) {
//       con.push(arr[i]);
//     }
//   }
//   return con;
// }

// console.log(duplicate(arr));
/* 5.Write a function to find the difference in 2 given array */
// let array1 = [1, 2, 3, 5, 6];
// let array2 = [1, 2, 3, ];
// function difference(array1, array2) {
//   return array1.filter((item) => !array2.includes(item));
// }

// console.log(difference(array1, array2));
