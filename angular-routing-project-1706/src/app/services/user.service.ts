import { User } from './../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    userList: Array<User> = [];

    constructor(private _httpClient: HttpClient) { }

    registerUser(user: User): Observable<User> {
        return this._httpClient.post<User>('http://localhost:5000/users', user);

    }

    getUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>('http://localhost:5000/users');
    }

}