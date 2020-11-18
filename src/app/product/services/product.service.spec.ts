import { DataService } from './../../shared/services/data.service';
import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule,  // to ensure that we have HttpClient stub added
        HttpTestingController } from '@angular/common/http/testing';

// production, not to be used for testing
import {HttpClientModule} from '@angular/common/http';

import { ProductService } from './product.service';
import { Product } from '../models/product';
import { environment } from '../../../environments/environment';


fdescribe('ProductService', () => {
  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // inject mocked/stubbed HttpClient service into product service
      ],
      providers: [ProductService]

    });


    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ProductService], 
    (service: ProductService) => {
    expect(service).toBeTruthy();
  }));


  it("test timer ",   (done) => {
    setInterval(()=> {
      console.log("Set Interval on timer ");
      expect(1 + 2).toBe(3);
      done(); // end of the test
    }, 20000);
  }, 30000); // maximum wait time for karma 
 
  it('should return good response with data', (doneFn) => {
     console.log("TEstme ")
    productService.getProducts()
                  .subscribe ( products => {
                    expect(products.length).toBe(2);
                    // deep equal
                    expect(products).toEqual(<Product[]> [{id: 1}, {id: 2}]);
                    //expect(products[0].price).toBe(1000);
                    doneFn();
                  });
                   

    let productsRequest = httpMock.expectOne(`${environment.apiEndPoint}/api/products`);
    // mock data as response
    productsRequest.flush([{id: 1}, {id: 2}]);     
    
    //let ratingRequest = httpMock.expectOne('http://localhost:7070/api/products/123/rating');
    // mock data as response
    // ratingRequest.flush([{id: 1, rating: 3}, {id: 2, rating: 4}]);                
 
    // this to ensure that call to http://localhost:7070/api/products is made
    httpMock.verify();
  });

 
  it('should return good one product', (done) => {
     
    productService.getProduct(100) // async, the call shall be held by http mock
                  .subscribe ( product => {
                    expect(product.id).toBe(100);
                    done();
                  });

    let productsRequest = httpMock.expectOne(`${environment.apiEndPoint}/api/products/100`);
    productsRequest.flush({id: 100}); // send the response, release the held up               
 
    httpMock.verify();
  });

});
