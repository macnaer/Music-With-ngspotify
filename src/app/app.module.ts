import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import {Router} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
