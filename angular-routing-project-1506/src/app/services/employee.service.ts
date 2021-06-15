import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

    message: string = 'Employee Management System';

    constructor(private _httpClient: HttpClient) { }

    getAllEmployees(): Observable<Employee[]> {
        return this._httpClient.get<Employee[]>('http://localhost:5000/employees')
    }

    getEmployeeById(id: any): Observable<Employee> {
        return this._httpClient.get<Employee>("http://localhost:5000/employees/" + id)
    }

    addNewEmployee(employee: Employee): Observable<Employee> {
        return this._httpClient.post<Employee>
            ('http://localhost:5000/employees', employee);
    }

    deleteExistingEmployee(id: any): Observable<Employee> {
        return this._httpClient.delete<Employee>("http://localhost:5000/employees/" + id)
    }

    updateExistingEmployee(employee: Employee): Observable<Employee> {
        return this._httpClient.put<Employee>('http://localhost:5000/employees/' + employee.id, employee)
    }

}