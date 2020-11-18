LIMIT SCOPE of TEST

Art of Unit Testing

reducer - pure function

function reducer(state, action) {
    switch(action.type) {
        case INC: return { counter + 1}
    }
}

descr(..reducer.... {
    it ("reducer initial state", () => {
            expect(reducer ({counter: 0}, {type: 'INCREMENT', value: 1})).toEqual({counter: 1})
    })
})

component {

    Do I need a real store? NO


 const initialState = { counter: 0 };
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      declartiona: {
          MyComponent
      }
      providers: [
        AuthGuard,
        provideMockStore({ initialState }),
        // other providers
      ],
    });
 
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
  });
 
  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });
 
    expect(guard.canActivate()).toBeObservable(expected);
  });
}

MyComponent

 constructor (private store: Store<CounterState>) { ==> MockStore
     store.select('counter')
     .susbcribe()
 }

// scope of the test is not store, is not dispatch : already by the library vendor
/ /am i calling dispatch or not
// am i dispatching the action which is corect or wrong

 fetchPRoducts() {
     this.store.dispatch(fetchProductAction())
 }

 X - Line of source code
 5 to 10 times more than your source code - 6x or 11x

 spyOn(store.dispatch);
 fetchPRoducts()
 expect(store.dispatch).hasBeenCalled();
 expect(store.dispatch).hasBeenCalledTimes(1);

 expect(store.dispatch).toBeCalledWith({type: '[FETCH PRODUCTS]});
 