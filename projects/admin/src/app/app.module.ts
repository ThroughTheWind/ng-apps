import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { CoreModule } from '../../../core/src/public-api';
import { VendorsModule } from '../../../vendors/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(environment),
    VendorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
