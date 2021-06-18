import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  msg: string = "";

  employeeList: Array<Employee> = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.msg = this._employeeService.message;
    this._employeeService.getAllEmployees().subscribe(result => {
      this.employeeList = result;
    }, (error) => { console.log(error); })
  }

}
