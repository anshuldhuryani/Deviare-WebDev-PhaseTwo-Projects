
class Student {

    studentCode: number;
    studentName: string;
    studentAge: number;

    constructor(code, name, age) {
        this.studentCode = code;
        this.studentName = name;
        this.studentAge = age;
    }

    displayDetails() {
        console.log(`Student Code : ${this.studentCode}`);
        console.log(`Student Code : ${this.studentName}`);
        console.log(`Student Code : ${this.studentAge}`);
    }

}

var student1: Student = new Student(1001, "King", 23);
student1.displayDetails();

var student2: Student = new Student(1002, "Shreya", 45);
student2.displayDetails();