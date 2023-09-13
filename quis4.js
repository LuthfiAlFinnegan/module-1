// 1 //
// const findFloor = (room) => {};
// 2 //
// function alternateSort(arr) {
// arr.sort((a, b) => a - b);

// let left = 0;
// let right = arr.length - 1;
// 1;

// let result = [];

// while (left <= right) {
//   if (left !== right) {
//     result.push(arr[left]);
//     result.push(arr[right]);
//   } else {
//     result.push(arr[left]);
//   }
//   left++;
//   right--;
// }

// return result;
// }
// const numbers = [5, 8, 1, 4, 2, 9, 3, 7, 6];
// const resultArray = alternateSort(numbers);
// console.log(resultArray);

// 3 //
// const findMaxNum = (arr) => {
//   return Number(arr.sort((a, b) => b - a).join(""));
// };
// console.log(findMaxNum([1, 2, 3, 4, 5, 6, 7]));

// 4 //
// const footballMatch = (arr) => {
//   let [n, totalPoint] = arr;
//   let win = Math.floor(totalPoint / 3);
//   let draw = totalPoint % 3;
//   let lose = n - win - draw;
//   return [win, draw, lose];
// };

//  arr = [20, 60];
// console.log(footballMatch(arr));

// let findFloorNumber = (room) => {
//   let lockerPerFloor = [5, 6, 7, 5, 6, 7];
//   let floor = 0;
//   let i = 0;

//   while (room > lockerPerFloor[i % 6]) {
//     room -= lockerPerFloor[i % 6];
//     i++;
//     floor++;
//   }

//   floor += Math.ceil(room / 5);
//   return floor;
// };

// console.log(findFloorNumber(3));
