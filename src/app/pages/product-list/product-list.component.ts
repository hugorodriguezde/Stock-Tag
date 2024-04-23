
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { catchError, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../../models/product';
import { CurrencyPipe } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private _productService: ProductService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts()
    .pipe(
      tap(products => {
        this.products = products;
        console.log(this.products);
      }),
      catchError(error => {
        console.error('Error fetching products:', error);
        return [];
      })
    )
    .subscribe();
  }

  deleteProduct(id: any, userId: any) {
    this._productService.deleteProduct(id)
      .pipe(
        tap(() => {
          console.log('Product deleted successfully!');
          this.getProducts();
        }),
        catchError(error => {
          console.error('Error deleting product:', error);
          return [];
        })
      )
      .subscribe();
  }
}
