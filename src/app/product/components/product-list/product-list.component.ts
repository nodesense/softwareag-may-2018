import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products$:Observable<Product[]>;
 
  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }  
}
