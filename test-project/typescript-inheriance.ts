
class Person {
    name: string;
    age: Number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log('Person Details: ');
        console.log("Name: " + this.name);
        console.log("Name: " + this.age);
    }
}

class Employee extends Person {

    salary: number;

    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    displayDetails() {
        super.displayDetails();
        console.log('Employee Details: ');
        console.log("Salary: " + this.salary);
    }
}

var emp: Employee = new Employee("Sarah", 23, 12000);
emp.displayDetails();
