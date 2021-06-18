import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: User = new User();

  userList: Array<User> = [];

  constructor(private _router: Router, private _userService: UserService) { }
  ngOnInit(): void { }

  login() {

    this._userService.getUsers().subscribe(result => {
      console.log(result);
      this.userList = result;
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].username == this.user.username) {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('user', this.user.username);
          this._router.navigate(['/home']);
        }
      }
    })
  }

}
