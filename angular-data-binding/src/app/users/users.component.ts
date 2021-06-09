import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  message: string = "User Management System";

  userObj: any = {
    name: 'King', age: 23
  }

  isActive: boolean = true;

  projects: string[] = ['Dashboard', 'Admin Portal', 'ECommerce', 'ERP Tally'];

  userList: any = [
    { name: 'King', age: 23 },
    { name: 'Kochhar', age: 33 },
    { name: 'Gautam', age: 24 },
    { name: 'Kalyani', age: 49 },
    { name: 'Kartik', age: 58 }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
