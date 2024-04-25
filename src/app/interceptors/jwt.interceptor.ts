import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import Cookies from 'js-cookie';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // get the token from the cookie
    let token = Cookies.get('token');

    if (token) {
      // clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
