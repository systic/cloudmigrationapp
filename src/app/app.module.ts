import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
// import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

import { AppComponent } from './app.component';


import { HelperService } from './services/helper.service';

// Library
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ComponentsModule } from './components/components.module';

// containers
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardDetailsComponent } from './containers/dashboard-details/dashboard-details.component';
import { DetailsDiscoveryComponent } from './containers/details-discovery/details-discovery.component';
import { DetailsAssessmentComponent } from './containers/details-assessment/details-assessment.component';
import { DetailsMigrationComponent } from './containers/details-migration/details-migration.component';
import { DetailsAssuranceComponent } from './containers/details-assurance/details-assurance.component';
import { ViewReportsComponent } from './containers/view-reports/view-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardDetailsComponent,
    DetailsDiscoveryComponent,
    DetailsAssessmentComponent,
    DetailsMigrationComponent,
    DetailsAssuranceComponent,
    ViewReportsComponent,
    // jqxChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgxPaginationModule,
    // NgbModule,
    // FileUploadModule,
    // BreadcrumbsModule,
    NgxSpinnerModule,
    // DragulaModule.forRoot()
  ],
  providers: [
    HelperService,
    // AuthenticationService,
    // AuthGuardService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
