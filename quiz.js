// 1 // warehouse label checker
// const product = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 10, 15, 11],
// ];
// const duplicationCounter = (product) => {
//   const identifierCount = {};

//   for (let row = 0; row < 4; row++) {
//     for (let col = 0; col < 4; col++) {
//       const identifier = product[row][col];

//       if (identifierCount[identifier]) {
//         identifierCount[identifier]++;
//       } else {
//         identifierCount[identifier] = 1;
//       }
//     }
//   }

//   let errorCount = 0;
//   for (const identifier in identifierCount) {
//     if (identifierCount[identifier] > 1) {
//       errorCount += identifierCount[identifier] - 1;
//     }
//   }

//   return errorCount;
// };
// console.log(duplicationCounter(product));

// 2 // indonesian time telling

// const idTimeTelling = (time) => {

// };

// 3 // student in class

// const getClass = (floor) => {
//     let floors = floor;
//     let lockers = 0;

//     let result;
//     let locker_counter = 4;
//     let x = 1;

//     for(let i = 1 ; i <= floors; i++) {
        
//         let arr_lockers = [];

//         if(x <= 3){
//             locker_counter++;
//         } else if (x > 3){
//             x = 1;
//             locker_counter = 5;
//         }
//        for(let j = locker_counter ; j > 0 ; j--) {
//             lockers++;
            
//             arr_lockers.push(lockers);
//        }
//        x++;

//        arr_lockers.unshift(i);

//        result = arr_lockers;

//     }
//     return result;
// };
// console.log(getClass(5));
// 4 // reverse the sequence
// const rotateArray = (arr, k) => {
//   let last = arr.splice(-k);

//   let newArr = arr;

//   let first = last.concat(newArr);

//   return first;
// };

// console.log(rotateArray([1, 0, 0, 1], 2));
