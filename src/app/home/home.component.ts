import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LoginService } from '../services/login.service';
import { ProductListComponent } from '../pages/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, NavbarComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
      this.loginService.ngOnInit();
  }
}
