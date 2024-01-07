// let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
// m = m.filter(item => typeof item === 'number');
// let mSquared = m.map(item => Math.pow(item, 2));
// console.log(mSquared);



// let str = "High knowledge,high return";
// let arr = str.split();
// let filteredArr = arr.filter(item => item !== "" ); 
// arr = arr.map(word => word.toLowerCase());
// console.log(arr);


class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    displayInfo() {
      console.log(`Employee: ${this.name}, Salary: ${this.salary}`);
    }
  }
  
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    displayInfo() {
      console.log(`Manager: ${this.name}, Salary:${this.salary}`)
      console.log(`Department of manager: ${this.department}`);
    }
  }
  
  
  let emp1 = new Employee("Ho Van Ngoc", "5000$");
  emp1.displayInfo();
  
  let manager1 = new Manager("Vo Dinh Huy", "10000000$", "Marketing");
  manager1.displayInfo();
  