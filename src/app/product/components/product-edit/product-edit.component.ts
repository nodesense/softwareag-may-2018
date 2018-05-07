import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  product: Product  = new Product();

  brands$:Observable<Brand[]>;

  @ViewChild("productForm")
  form: NgForm;


  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {
    // to read url/matrix parameter
    // products/edit/:id;source=list
    const id = this.route.snapshot.params['id'];
    const source = this.route.snapshot.params['source'];
    console.log("ID ", id, "source ", source);

    if (id) {
      // edit
      this.productService.getProduct(id)
          .subscribe(product => {
            this.product = product;
          });
    }

    this.brands$ = this.productService.getBrands();

  }

  gotoList() {
    this.router.navigateByUrl('/products/list');
    // this.router.navigate(['/products', 'list']);
  }

  saveProduct() {

    if (this.form.invalid) {
      alert('Invalid form, cannot save');
      return;
    }

    if (this.form.pristine) {
      alert('no changes found');
      return;
    }

    this.productService
        .saveProduct(this.product)
        .subscribe (savedProduct => {
          console.log("product saved ", savedProduct);

          // option 1: go to list page
          // this.gotoList();

          // option: continue working on same form
          // update the id given by server, then use put method
          this.form.reset(savedProduct);
          this.product = savedProduct;
        })
  }

}
