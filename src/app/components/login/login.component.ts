import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  imports:[ReactiveFormsModule, CommonModule, RouterLink,],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginError(loginError: any) {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).pipe(
        catchError(err => {
          console.error(err);
          if (err.error) {
            this.loginForm.setErrors({
              serverError: err.error.mensaje
            });
          }
          return of(null);
        })
      ).subscribe(res => {
        console.log(res);
        if (res) {
          console.log(this.loginService.isAuthenticated());
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
