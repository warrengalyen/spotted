import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule } from '../../shared/shared.module';
import { ArtistService } from '../shared/services/artists.service';
import { MusicSharedModule } from '../shared/shared.module';
import { ArtistComponent } from './artist.component';
import { AritstRelatedComponent } from './components/artist-related/artist-related.component';
import { ArtistSummaryComponent } from './components/artist-summary/artist-summary.component';
import { ArtistTopTracksComponent } from './components/artist-top-tracks/artist-top-tracks.component';

export const ARTIST_ROUTES: Routes = [
  {
    path: ':id',
    component: ArtistComponent,
  },
  {
    // TODO: 404 Component
    path: '**',
    component: null,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ARTIST_ROUTES),
    MusicSharedModule,
    AppSharedModule,
  ],
  declarations: [
    ArtistComponent,
    ArtistSummaryComponent,
    AritstRelatedComponent,
    ArtistTopTracksComponent,
  ],
  providers: [ArtistService],
})
export class ArtistModule {}
