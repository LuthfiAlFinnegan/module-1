// // object literal
// const car = {
//   brand: "BMW",
//   model: "M135i xDrive",
//   price: 800000000,
// };

// // object constructor
// const car2 = new Object({
//   brand: "BMW",
//   model: "M135i xDrive",
//   price: 800000000,
// });

//  console.log(car.model); // Access with dot (.)
//  console.log(car["brand"]); // Access with square bracket ([])

// // Properties & method
// let user = {
//   name: "David",
//   great() {
//     console.log("Hello!"); // function didalam object adalah method
//   },
// };

// user.great(); // untuk memanggil method

// // add property / menambahkan property
// user.age = 18;
// console.log(user);

// // untuk mengubah isi property
// user.name = "Luthfi"
// console.log(user);

// // untuk menghapus property
// delete user.name;
// console.log(user);

// // object di dalam object
// let person = {
//   name: "Luthfi",
//   age: 18,
//   address: {
//     city: "Bandung",
//   },
// };
// console.log(person.address?.city); // optional chaining
// console.log(person.address.city); // cara memanggil object di dalam object
// console.log(Object.keys(person)); // cara mengetahui ada property apa saja di dalam object

// for in
// for (let key in person) {
// console.log(key); // properties : key
//  console.log(person[key]); // properties : value
// }

// // getter and setter
// let student = {
//   firstName: "John",
//   lastName: "Smith",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     const splitedValue = value.split(" ");
//     this.firstName = splitedValue[0];
//     this.lastName = splitedValue[1];
//   },
// };

// console.log(student.fullName);

// // setter
// student.fullName = "Alice Cooper";

// console.log(student.fullName);
// destructuring
// let arr = ["apple", "lemon"];
// let [a, b] = arr;
// console.log(a);
// console.log(b);

// object destructuring
// let fruit = {
//   name: "apple",
//   color: "red",
// };
// let { name, color } = fruit;
// console.log(name);

// let fruit2 = {
//   price: "5000",
//   quantity: "10",
// };

// const fruits = { ...fruit, ...fruit2 }; // untuk menggabungkan dua object (menggunakan Spread operator)
//const fruits2 = Object.assign(fruit, fruit2); // untuk menggabungkan dua object (menggunakan Object.assign)
// console.log(fruits);
// console.log(fruits2)


