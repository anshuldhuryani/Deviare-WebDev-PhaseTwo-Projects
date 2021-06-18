import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this._userService.registerUser(this.user).subscribe(result => {
      console.log(result);
      console.log('User Added Successfully..!!');
      this._router.navigate(['/login']);

    }, (error) => {
      console.log('There is an error : ' + error);
    })
  }

}
