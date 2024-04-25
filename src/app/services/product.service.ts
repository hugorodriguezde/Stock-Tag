import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { LoginService } from './login.service';
import { ProductHistory } from '../models/productHistory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url=`http://localhost:3002/api/products`
  urlHistory=`http://localhost:3002/api/history`

  constructor(private http:HttpClient,
              private loginService: LoginService) { }

 getProducts(): Observable<Product[]> {
  const token = this.loginService.token || '';
  const headers = new HttpHeaders().set('Authorization', token);
  return this.http.get<Product[]>(`${this.url}`, { headers });
}

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }

  saveProduct(product: Product): Observable<any>{
    return this.http.post(this.url, product);
  }

  getProduct(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  editProduct(id: string, product: Product): Observable<any>{
    return this.http.put(this.url+id, product);
  }

  getProductHistory(): Observable<ProductHistory[]> {
    const token = this.loginService.token || '';
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<ProductHistory[]>(`${this.url}`, { headers });
  }
}
