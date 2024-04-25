import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  userName: string = '';
  private sub?: Subscription;
  constructor(private loginService: LoginService) { }

  toggleSidebar() {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar) {
      sidebar.classList.toggle("expand");
    }
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
