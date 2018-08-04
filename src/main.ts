import { environment } from './environments/environment';

var oldLog = console.log;

console.log = function(msg) {
    oldLog(msg);
}

// beware, too many imports
import "rxjs/Rx";

//import 'rxjs/add/operator/map'

import { AppModule } from './app/app.module';
// bootstrap angular module into browser

import {platformBrowserDynamic} 
        from '@angular/platform-browser-dynamic';

console.log("ENV ", environment);
        
platformBrowserDynamic()
    .bootstrapModule(AppModule)