import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulo necessario per il 'two way data binding'; NB: va aggiunto anche più sotto, tra gli imports: []
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
