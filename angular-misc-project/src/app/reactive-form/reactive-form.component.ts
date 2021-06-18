import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  user: User = new User();
  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  get f() {
    return this.userForm?.controls;
  }

  onSubmit() {
    alert('Hi, you clicked me..');
    console.log(this.user);
  }

}
