import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  user: any = {
    username: '',
    password: ''
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.username == 'admin' && this.user.password == 'admin') {
      alert('Hi')
      this._router.navigate(["/"]);
    } else {
      alert('Invalid Credentials..')
    }
  }

}
