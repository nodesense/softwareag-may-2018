import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   members:string[] = ['Venkat', 'Krish'];  
   show: boolean = true;

   aboutLikes: number = 100;

  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  empty() {
    this.members = [];
  }

  addMember(name: string) {
     
    this.members.push(name);
  }

}
