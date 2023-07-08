import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SpottedService} from './services/spotted-service/spotted.service';
import {SpottedAuthService} from './services/spotted-service/spotted-auth.service';
import {HttpModule} from '@angular/http';
import {LoginComponent} from './pages/login/container/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './layouts/dashboard/dashboard.module';
import {AcceptComponent} from './pages/accept/accept.component';
import {HttpClientModule} from '@angular/common/http';

/* Font Awesome */
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faBars, faHeadphonesAlt, faMusic, faStar, faGenderless, faGripLines, faTh, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faChartBar } from '@fortawesome/free-regular-svg-icons';

// Loading library icons
library.add(faBars, faEdit, faHeadphonesAlt, faMusic, faStar, faGenderless, faChartBar, faGripLines, faTh, faFeatherAlt);
import { HomeComponent } from './pages/dashboard/home/home.component';
import { TopArtistsComponent } from './pages/dashboard/top-artists/top-artists.component';
import { TopTracksComponent } from './pages/dashboard/top-tracks/top-tracks.component';
import { ArtistTileComponent } from './pages/dashboard/components/artist-tile/artist-tile.component';
import { SongTileComponent } from './pages/dashboard/components/song-tile/song-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceptComponent,
    HomeComponent,
    TopArtistsComponent,
    TopTracksComponent,
    ArtistTileComponent,
    SongTileComponent,
  ],
  imports: [
    // Angular Specific
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,

    // App Specific
    DashboardModule,
    FontAwesomeModule
  ],
  providers: [SpottedService, SpottedAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
