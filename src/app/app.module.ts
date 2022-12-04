import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbdAccordionHeader } from './components/accordion/accordion.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbAccordionModule, NgIf],
  declarations: [AppComponent, NgbdAccordionHeader],
  bootstrap: [AppComponent],
})
export class AppModule {}
