import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private SignupService: SignupService, private router: Router, private auth: AuthService) {
    this.signUpForm = new FormGroup({
      id: new FormControl(undefined),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      role: new FormControl('USER'),
    });
  }

  public onSubmit() {
    this.SignupService.signup(this.signUpForm.value).subscribe(
      (response: any) => {
        alert("SignUp Success!");
        this.signUpForm = new FormGroup({
          id: new FormControl(undefined),
          name: new FormControl('', [Validators.required, Validators.minLength(3)]),
          email: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
          ]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
          ]),
          role: new FormControl(''),
        });
      },
      (error) => {
        console.log('Error:', error); // Xử lý lỗi nếu cần
      }
    );
  }
}
