import { EmployeeService } from './../services/employee.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from './../models/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService]
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this._employeeService.addNewEmployee(this.employee).subscribe(result => {
      console.log('Employee Added Successfully.')
      this._router.navigate(['/employees']);
    }, (error) => { console.log(error); })
  }

  resetAll() {
    this.employee = new Employee();
  }

}
