import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [BrowserModule],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
