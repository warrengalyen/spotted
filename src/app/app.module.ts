import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpottedService } from './services/spotted-service/spotted.service';
import { SpottedAuthService } from './services/spotted-service/spotted-auth.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './pages/login/container/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { AcceptComponent } from './pages/accept/accept.component';
import { HttpClientModule } from '@angular/common/http';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

// Loading library icons
library.add(faFeatherAlt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceptComponent,
  ],
  imports: [
    // Angular Specific
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,

    // App Specific
    HomeModule,
    DashboardModule,
    FontAwesomeModule
  ],
  providers: [SpottedService, SpottedAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
