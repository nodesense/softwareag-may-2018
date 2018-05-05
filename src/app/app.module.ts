 // module is a logical collection of
// components, directives, pipes (filters)
// services (providers)

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from './shared/shared.module';


import {FormsModule} from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    imports: [
        //other module dependencies
        BrowserModule, // CommonModule, Compiler referenced
        FormsModule,
        
        SharedModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        CartComponent,
        //HeaderComponent,
        //FooterComponent,
        //HomeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
