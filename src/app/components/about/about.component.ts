import { HighlightDirective } from './../../shared/directives/highlight.directive';
import { Component, OnInit
        , ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild("memberName")
  inputElement: ElementRef;

  @ViewChild("p1")
  p1Element: ElementRef;

  // access directive inst
  @ViewChild("highlight1")
  highlight: HighlightDirective;

  constructor() { }

  ngOnInit() {
    this.p1Element.nativeElement.textContent = 'from TS';
    this.inputElement.nativeElement.focus(); // set the cursor

    //TODO: 
    console.log("Dir ", this.highlight.color);
    this.highlight.setColor('blue');
  }

  empty() {
    this.members = [];
  }

  addMember(name: string) {
     
    this.members.push(name);
  }

}
