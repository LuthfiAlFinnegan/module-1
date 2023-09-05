// // template Object
// class Student {
//   name = "";
//   // Private Property
//   #age = "";
//   program = "";

//   constructor(name, age, program) {
//     this.name = name;
//     this.#age = age;
//     this.program = program;
//   }

//   greeting() {
//     console.log(`Hello ${this.name}`);
//   }
//   getAge() {
//     console.log(this.#age);
//   }
// }

// const student1 = new Student("Andi", 25, "Digital Marketing");
// const student2 = new Student("John", 25, "Digital Marketing");
// console.log(student1);
// student1.greeting();
// student2.greeting();
// student1.getAge();

// encapsulation
class Employee {
  constructor() {
    this.employeeName;
  }

  getEmployeeName() {
    return this.employeeName;
  }

  setEmployeeName(value) {
    this.employeeName = value;
  }
}

const employee1 = new Employee();
employee1.setEmployeeName("Joni");
console.log(employee1.getEmployeeName());
console.log(employee1.employeeName);

// inheritance; //

// class Gender {
//   constructor(gender) {
//     this.gender = gender;
//   }
// }

// class Man extends Gender {
//   constructor(name, age) {
//     super("Male");
//     this.name = name;
//     this.age = age;
//   }
// }

// class Woman extends Gender {
//   constructor(name, age) {
//     super("Female");
//     this.name = name;
//     this.age = age;
//   }
// }

// let user1 = new Man("Udin", 12);
// let user2 = new Man("jona", 12);
// console.log(user1);
// console.log(user2);
