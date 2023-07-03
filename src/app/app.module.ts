import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpottedService } from './services/spotted-service/spotted.service';
import { SpottedAuthService } from './services/spotted-service/spotted-auth.service';
import { LoginComponent } from './pages/login/container/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { AcceptComponent } from './pages/accept/accept.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceptComponent,
  ],
  imports: [
    // Angular Specific
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // App Specific
    HomeModule,
    DashboardModule
  ],
  providers: [SpottedService, SpottedAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
