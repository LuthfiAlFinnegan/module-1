// function checkDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) return true;
//     }
//   }
//   return false;
// }
// console.log(checkDuplicate([1, 2, 3, 1]));

// function checkDuplicate2(param) {
//   const uniqueData = new Set();
//   for (let i = 0; i < param.length; i++) {
//     if (uniqueData.has(param[i])) return true;
//     else uniqueData.add(param[i]);
//   }
//   return false;
// }
// console.log(checkDuplicate2([1, 2, 3, 1]));

// function checkDuplicate3(params) {
//   params.sort();
//   for (let i = 0; i < params.length; i++) {
//     if (params[i] === params[i + 1]) return true;
//   }
//   return false;
// }
// console.log(checkDuplicate3([1, 2, 3, 1]));

// function search(arr, x) {
//   let i;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == x) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(search([2, 20, 10, 3], 3));

// function binarySearch(arr, l, r, x) {
//   if (r >= l) {
//     let mid = l + Math.floor((r - l) / 2);
//     if (arr[mid] == x) return mid;
//     if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
//     return binarySearch(arr, mid + 1, r, x);
//   }
//   return -1;
// }
// let arr = [2, 3, 4, 10, 40];
// let x = 10;
// console.log(binarySearch(arr, 0, arr.length - 1, x));

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j + 1] < arr[j]) {
//         [([arr[j + 1], arr[j]] = [arr[j], arr[j + 1]])];
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([5, 3, 8, 4, 6]));


