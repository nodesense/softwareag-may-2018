import { Injectable } from '@angular/core';
import { CanDeactivate  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable()
export class SaveAlertGuard implements CanDeactivate<ProductEditComponent> {
   canDeactivate(target: ProductEditComponent) {
      if (target.form.pristine)
        return true;

      return window.confirm("Unsaved changes, continue?")
   } 
}
