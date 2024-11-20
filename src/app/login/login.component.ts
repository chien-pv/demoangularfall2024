import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formLoginGroup: FormGroup = new FormGroup({
    emailControl: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    passwordControl: new FormControl(null),
  });

  get loginFormControl() {
    return this.formLoginGroup.controls;
  }
  ngOnInit(): void {
    this.formLoginGroup = new FormGroup({
      emailControl: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      passwordControl: new FormControl(null),
    });
  }
  login() {
    console.log(this.formLoginGroup.value);
  }
}
