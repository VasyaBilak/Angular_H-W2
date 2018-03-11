import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ComponComponent } from './compon/compon.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
