import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}
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
  login() {
    console.log(this.formLoginGroup.value);
    let { emailControl, passwordControl } = this.formLoginGroup.value;
    this.loginService
      .login(emailControl, passwordControl)
      .subscribe((data: any) => {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('accsesToken', data.accsesToken);
          this.router.navigateByUrl('/home');
        } else {
          console.log('Web Storage is not supported in this environment.');
        }
      });
  }
}
