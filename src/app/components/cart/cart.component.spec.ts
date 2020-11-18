import { RouterModule } from '@angular/router';
import { DataService } from './../../shared/services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { APP_BASE_HREF } from '@angular/common';

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    // Testing is complex, including whole module as is, might have dependcies issues
    // isoalte testing component, so that we can test only component
    // create angular module for testing
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]), // router computer, directives 
        // MatModelModule
      ], 
      declarations: [ CartComponent,
                      // CartSummary, 
                    ],
      providers: [
        DataService,
        {provide: APP_BASE_HREF, useValue: '/'} 
      ]
    })
    .compileComponents(); // JIT/AOT, will compile html views, convert to js.
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    // is component created, 
    expect(component).toBeTruthy(); 
  });

  it("should be default counter 0", () => {
    expect(component.counter).toBe(0); // primitives numbers, string, boolean, ref check
    component.incr();
    expect(component.counter).toBe(1);
  })



  it("should be initialize called", () => {

    spyOn(component, 'initialize');
    component.incr();
    expect(component.initialize).toHaveBeenCalled();
    expect(component.initialize).toHaveBeenCalledWith(1)
  })


  // html functionalitied
 
  it("should be initialize called", () => {
    fixture.detectChanges();
    let element = fixture.nativeElement;
     
    expect(element.querySelectorAll('p')[0].textContent)
          .toContain("Counter: 0"); 

    component.incr(); 

    expect(component.counter).toBe(1)

    // force render html
    // due to absense of zone.js
    fixture.detectChanges();

    expect(element.querySelectorAll('p')[0].textContent)
          .toContain("Counter: 1"); 
  })

  it("Should be empty list ", () => {
    let element = fixture.nativeElement;
    expect(element.querySelectorAll("li").length).toBe(0); 
    component.addItem();
    fixture.detectChanges();
    expect(element.querySelectorAll("li").length).toBe(1); 


    expect(element.querySelectorAll('span')[0].textContent)
          .toContain("Product"); 
  })

 

});
