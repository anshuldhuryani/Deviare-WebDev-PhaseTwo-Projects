var Student = /** @class */ (function () {
    function Student(code, name, age) {
        this.studentCode = code;
        this.studentName = name;
        this.studentAge = age;
    }
    Student.prototype.displayDetails = function () {
        console.log("Student Code : " + this.studentCode);
        console.log("Student Code : " + this.studentName);
        console.log("Student Code : " + this.studentAge);
    };
    return Student;
}());
var student1 = new Student(1001, "King", 23);
student1.displayDetails();
var student2 = new Student(1002, "Shreya", 45);
student2.displayDetails();
