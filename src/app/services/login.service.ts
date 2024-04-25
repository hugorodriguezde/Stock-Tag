import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  private API_URL = 'http://localhost:3002/api';
  private sessionToken: string | null = null;

  ngOnInit() {
    this.checkAuthenticationStatus();
  }

  constructor(private http: HttpClient) {
    const sessionToken = Cookies.get('token');
    if (sessionToken) {
      this.sessionToken = sessionToken;
    }
  }


  get token() {
    return this.sessionToken;
  }

  getUserId() {
    return Cookies.get('userId');
  }

  isAuthenticated(): boolean {
    const token = Cookies.get('token');
    return token != null;
  }


  private userNameSubject = new BehaviorSubject<string>('');
  userName$ = this.userNameSubject.asObservable();

  register(user: any) {
    return this.http.post(`${this.API_URL}/user/register`, user).pipe(
      tap((res: any) => {
        this.userNameSubject.next(res.data.userName);
        Cookies.set('token', res.data.token);
        Cookies.set('userName', res.data.userName);
        Cookies.set('userId', res.data._id);
      })
    );
  }

  login(user: any) {
    return this.http.post(`${this.API_URL}/user/login`, user).pipe(
      tap((res: any) => {
        this.userNameSubject.next(res.data.userName);
        Cookies.set('token', res.data.token);
        Cookies.set('userName', res.data.userName);
        Cookies.set('userId', res.data._id);
      })
    );
  }

  logout() {
    this.userNameSubject.next('');
    Cookies.remove('token');
    window.location.href = '/login';
  }

  checkAuthenticationStatus() {
    const sessionToken = Cookies.get('token');
    if (sessionToken) {
      const userName = Cookies.get('userName');
      if (userName) {
        this.userNameSubject.next(userName);
      }
      this.sessionToken = sessionToken;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

}
