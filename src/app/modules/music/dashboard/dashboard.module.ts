import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import { DashboardTopArtistComponent } from './components/dashboard-top-artist/dashboard-top-artist.component';
import { DashboardTopArtistsComponent } from './components/dashboard-top-artists/dashboard-top-artists.component';

export const DASHBOARD_ROUTES: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(DASHBOARD_ROUTES)],
  declarations: [DashboardComponent, DashboardTopArtistComponent, DashboardTopArtistsComponent],
  providers: [],
})
export class DashboardModule {}
