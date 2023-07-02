import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpottedService } from './services/spotted-service/spotted.service';
import { SpottedAuthService } from './services/spotted-service/spotted-auth.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SpottedService, SpottedAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
