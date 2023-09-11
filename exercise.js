/*  exercise 1 
    create a function
        input: "pig latin is cool !"
        return: "igPay atinLay Siay oolcay !ay"

    exercise 4
    dataSensor = ["anjing","babi"]
    input: "budi memberi makan anjing"
    output: "budi memberi makan a****g"
*/

// 1 //
// const thai = (str) => {
//   return str
//     .split(" ")
//     .map((kata) => {
//       return kata.slice(1) + kata[0] + "ay";
//     })
//     .join(" ");
// };
// console.log(thai("pig latin is cool !"));

// const thai = (str) => {
//   let arr = str.split(" ");
//   let res = [];
//   for (let word of arr) {
//     let modified = word.slice(1) + word[0] + "ay";
//     res.push(modified);
//   }
//   return res.join(" ");
// };
// console.log(thai("pig latin is cool !"));

// 2 //
// const thai = (str) => {
//   let arr = str.split(" ");
//   let res = [];
//   for (let word of arr) {
//     if (/^[aiueo]/.test(word)) {
//       let modified = word.slice(1) + word[0] + "way";
//       res.push(modified);
//     } else {
//       let modified = word.slice(1) + word[0] + "ay";
//       res.push(modified);
//     }
//   }
//   return res.join(" ");
// };
// console.log(thai("igpay atinlay siway oolcay !ay"));

// 3 //
// const thai2 = (str) => {
//   let cleaned = str.replaceAll("way", "").replaceAll("ay", "").split(" ");
//   let res = [];
//   for (let word of cleaned) {
//     let modified = word[word.length - 1] + word.slice(0, word.length - 1);
//     res.push(modified);
//   }
//   return res.join(" ");
// };
// console.log(thai2("igpay atinlay siway oolcay !ay"));

// 4 //
// const bualan = (umpatan) => {
//   const censoredWord = ["anjing", "babi"];
//   let res = umpatan;
//   for (const word of censoredWord) {
//     let cencored =
//       word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
//     res = res.replaceAll(word, cencored);
//   }
//   return res;
// };
// console.log(bualan("budi memberi makan anjing"));
