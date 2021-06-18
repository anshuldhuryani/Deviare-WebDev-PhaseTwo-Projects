import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
  providers: [EmployeeService]
})
export class EmployeeUpdateComponent implements OnInit {

  id: any;

  employee: Employee = new Employee();

  constructor(private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._employeeService.getEmployeeById(this.id).subscribe(result => {
      this.employee = result;
    }, (error) => { console.log(error); })
  }

  updateEmployee() {
    this._employeeService.updateExistingEmployee(this.employee).subscribe(result => {
      alert('Employee Updated Successfully..!!');
      this._router.navigate(['/employees']);
    }, (error) => { console.log(error); })
  }

  goBack() {
    this._router.navigate(['/employees']);
  }

}
