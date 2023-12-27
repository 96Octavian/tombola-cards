import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TombolaCardComponent } from './tombola-card/tombola-card.component';
import { TombolaCellComponent } from './tombola-cell/tombola-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TombolaCardComponent,
    TombolaCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
