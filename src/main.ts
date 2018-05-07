
// beware, too many imports
import "rxjs/Rx";

//import 'rxjs/add/operator/map'

import { AppModule } from './app/app.module';
// bootstrap angular module into browser

import {platformBrowserDynamic} 
        from '@angular/platform-browser-dynamic';

        
platformBrowserDynamic()
    .bootstrapModule(AppModule)