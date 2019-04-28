import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  registerData = new CreateAccountData();
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    this.submitForm();
    this.resetForm();
  }

  submitForm() {
    this.registerData.name = this.registerForm.value.name;
    this.registerData.email = this.registerForm.value.email;
    this.registerData.phone = this.registerForm.value.phone;
    this.registerData.password = this.registerForm.value.password;
    this.registerData.confirmPassword = this.registerForm.value.confirmPassword;
  }

  resetForm() {
    this.registerForm.reset();
  }

}

class CreateAccountData {
  constructor(
    public name?: string,
    public email?: string,
    public phone?: number,
    public password?: string,
    public confirmPassword?: string,
  ) { }
}

