import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpottedService } from './services/spotted-service/spotted.service';
import { SpottedAuthService } from './services/spotted-service/spotted-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/container/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    // Angular Specific
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // App Specific
    HomeModule
  ],
  providers: [SpottedService, SpottedAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
