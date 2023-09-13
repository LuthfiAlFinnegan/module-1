// 1 //
function excel(s) {
  s = s.toUpperCase();
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result *= 26;
    result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
}
console.log(excel("ab"));

// 2 //

let arr = [2, 2, 4, 4, 5];
function twice(arr) {
  let res = 0;
  for (const con of arr) {
    res ^= con;
  }
  return res;
}
console.log(twice(arr));

function twice(arr) {
  const unique = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (unique.has(arr[i])) {
      unique.delete(arr[i]);
    } else {
      unique.add(arr[i]);
    }
  }
  return unique.values().next().value;
}
console.log(twice(arr));
// 3 //
let str1 = "agus";
let str2 = "suga";
function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(isAnagram(str1, str2));

// 4 //
function climbStairs(n) {
  if (n <= 2) {
    return n;
  }

  let step1 = 1;
  let step2 = 2;

  for (let i = 3; i <= n; i++) {
    let curr = step1 + step2;
    step1 = step2;
    step2 = curr;
  }
  return step2;
}
console.log(climbStairs(5));
