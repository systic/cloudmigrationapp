import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardDetailsComponent } from './containers/dashboard-details/dashboard-details.component';
import { DetailsDiscoveryComponent } from './containers/details-discovery/details-discovery.component';
import { DetailsAssessmentComponent } from './containers/details-assessment/details-assessment.component';
import { DetailsMigrationComponent } from './containers/details-migration/details-migration.component';
import { DetailsAssuranceComponent } from './containers/details-assurance/details-assurance.component';
import { ViewReportsComponent } from './containers/view-reports/view-reports.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'dashboard-details/:username/:type',
    component: DashboardDetailsComponent,
    data: { title: 'Dashboard Details' }
  },
  {
    path: 'details-discovery',
    component: DetailsDiscoveryComponent,
    data: { title: 'Discovery' }
  },
  {
    path: 'details-assessment',
    component: DetailsAssessmentComponent,
    data: { title: 'Assessment' }
  },
  {
    path: 'details-migration',
    component: DetailsMigrationComponent,
    data: { title: 'Migration' }
  },
  {
    path: 'details-assurance',
    component: DetailsAssuranceComponent,
    data: { title: 'Assurance' }
  },
  {
    path: 'view-report',
    component: ViewReportsComponent,
    data: { title: 'View Report' }
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
