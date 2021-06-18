import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee = new Employee();

  id: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._employeeService.getEmployeeById(this.id).subscribe(result => {
      this.employee = result;
    }, (error) => { console.log(error); })
  }

  deleteEmployee() {
    this._employeeService.deleteExistingEmployee(this.employee.id).subscribe(result => {
      alert('Employee Deleted Successfully..!!')
      this._router.navigate(['/employees']);
    }, error => { console.log(error); })
  }

  goBack() {
    this._router.navigate(['/employees']);
  }

}
