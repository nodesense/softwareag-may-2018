import { CartItem } from './../../shared/models/cart-item';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addItem() {
    let id = Math.ceil(Math.random() * 100000);
    let item: CartItem = new CartItem(
                                id,
                                `Product ${id}`,
                                Math.ceil(Math.random() * 100),
                                1
                            )

    this.dataService.addItem(item);
  }

  empty() {
    this.dataService.empty();
  }

}
