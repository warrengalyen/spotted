import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

export const DASHBOARD_ROUTES: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(DASHBOARD_ROUTES)],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
