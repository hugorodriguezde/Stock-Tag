import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginService } from './services/login.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HttpClientModule, NavbarComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontEnd';

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
      this.loginService.ngOnInit();
  }
  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
}
