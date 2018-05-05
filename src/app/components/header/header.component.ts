import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  amount: number;


  constructor(private dataService: DataService) {
      console.log("Header created");

      // this.amount = dataService.amount;
   }

  ngOnInit() {
    this.dataService
        .amount$
        .subscribe ( n => {
          console.log("SUBSCRIBE ", n);
          this.amount = n;
        })
  }

}
