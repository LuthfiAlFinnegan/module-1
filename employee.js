class Employee {
  name = "";
  hour = 0;

  addName(name) {
    this.name = name;
  }

  addWork(hour) {
    hour <= 0 ? console.log("Anda tidak bekerja") : (this.hour = hour);
  }
}

class FullTime extends Employee {
  getSalary() {
    return this.hour <= 6
      ? this.hour * 100000
      : (this.hour - 6) * 75000 + 600000;
  }
}

class PartTime extends Employee {
  getSalary() {
    return this.hour <= 6
      ? this.hour * 50000
      : (this.hour - 6) * 30000 + 300000;
  }
}

let fullTime1 = new FullTime();
fullTime1.addName("Luthfi");
fullTime1.addWork(0);
let partTime1 = new PartTime();
partTime1.addName("Brodi");
partTime1.addWork(2);
console.log(fullTime1);
console.log(fullTime1.getSalary());
console.log(partTime1);
console.log(partTime1.getSalary());
