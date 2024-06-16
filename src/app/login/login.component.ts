import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  // ngOnInit(): void {
  //   if (this.authService.isLoggedIn()) {
  //     this.router.navigate(['/product']); // Điều hướng đến trang product nếu đã đăng nhập
  //   }
  // }

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe(
      (response: any) => {
        if (response.error) {
          return alert('Login Failed');
        }
        localStorage.setItem('token', response.token);
        alert('Login Success');
        this.router.navigate(['/blog']);
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
