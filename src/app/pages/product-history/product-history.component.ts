import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product';
import { ProductHistory } from '../../../models/productHistory';

@Component({
  selector: 'app-product-history',
  templateUrl: './product-history.component.html',
  styleUrls: ['./product-history.component.scss']
})
export class ProductHistoryComponent implements OnInit {
  products: ProductHistory[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductHistory();
  }

  getProductHistory() {
    this.productService.getProductHistory().subscribe(
      products => this.products = products,
      error => console.error('Error fetching product history:', error)
    );
  }
}
