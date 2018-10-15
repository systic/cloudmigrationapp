import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { MainHeaderComponent } from './main-header/main-header.component';
import { WidgetPaginationComponent } from './widget-pagination/widget-pagination.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';
// import { ModalApplicationDetailComponent } from './modal-application-detail/modal-application-detail.component';
// import { ModalApplicationAddNewComponent } from './modal-application-add-new/modal-application-add-new.component';
// import { ModalApplicationEditComponent } from './modal-application-edit/modal-application-edit.component';
// import { ModalInstanceEditComponent } from './modal-instance-edit/modal-instance-edit.component';
// import { ModalInstanceDetailComponent } from './modal-instance-detail/modal-instance-detail.component';
// import { ModalInstanceAddNewComponent } from './modal-instance-add-new/modal-instance-add-new.component';
// import { ModalJobDetailComponent } from './modal-job-detail/modal-job-detail.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { NavigationComponent } from './navigation/navigation.component';
// import { DonutChartComponent } from './donut-chart/donut-chart.component';
// import { LineChartComponent } from './line-chart/line-chart.component';
// import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
// import { DropdownComponent } from './dropdown/dropdown.component';
// import { WidgetTableComponent } from './widget-table/widget-table.component';
// import { WidgetPaginationComponent } from './widget-pagination/widget-pagination.component';
// import { WidgetFilterComponent } from './widget-filter/widget-filter.component';
// import { WidgetSortComponent } from './widget-sort/widget-sort.component';
// import { FilterApplicationComponent } from './filter-application/filter-application.component';
// import { ManageColumnComponent } from './manage-column/manage-column.component';
// import { DropdownSortByComponent } from './dropdown-sort-by/dropdown-sort-by.component';
// import { TooltipAddNewComponent } from './tooltip-add-new/tooltip-add-new.component';
// import { WidgetCtrTableComponent } from './widget-ctr-table/widget-ctr-table.component';
// import { WidgetGridComponent } from './widget-grid/widget-grid.component';
// import { DirectivesModule } from '../directives/directives.module';
// import { ContentUsersAddNewComponent } from './content-users-add-new/content-users-add-new.component';
// import { ContentJobsAddNewComponent } from './content-jobs-add-new/content-jobs-add-new.component';
// import { TemplateInstanceComponent } from './template-instance/template-instance.component';
// import { TemplateStepJobComponent } from './template-step-job/template-step-job.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NotificaitonsComponent } from './notificaitons/notificaitons.component';
// import { ModalUsersDetailComponent } from './modal-users-detail/modal-users-detail.component';
// import { DragulaModule } from 'ng2-dragula';
// import { FileUploadModule } from 'ng2-file-upload';

const components = [
    MainHeaderComponent,
    WidgetPaginationComponent,
    ChartRadarComponent,
  // ModalApplicationDetailComponent,
  // ModalApplicationAddNewComponent,
  // ModalApplicationEditComponent,
  // ModalInstanceEditComponent,
  // ModalInstanceDetailComponent,
  // ModalInstanceAddNewComponent,
  // ModalJobDetailComponent,
  // HeaderComponent,
  // FooterComponent,
  // NavigationComponent,
  // DonutChartComponent,
  // LineChartComponent,
  // StackedBarChartComponent,
  // DropdownComponent,
  // WidgetTableComponent,
  // WidgetPaginationComponent,
  // WidgetFilterComponent,
  // WidgetSortComponent,
  // FilterApplicationComponent,
  // ManageColumnComponent,
  // WidgetCtrTableComponent,
  // DropdownSortByComponent,
  // TooltipAddNewComponent,
  // WidgetGridComponent,
  // ContentUsersAddNewComponent,
  // ContentJobsAddNewComponent,
  // TemplateInstanceComponent,
  // TemplateStepJobComponent,
  // NotificaitonsComponent,
  // ModalUsersDetailComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    // DirectivesModule,
    // NgbModule,
    // FileUploadModule,
    // DragulaModule.forRoot()
  ],
  declarations: [
    ...components,
    DashboardDetailsComponent,
    ChartRadarComponent,
  ],
  exports: [
    ...components,
  ],
  entryComponents: [
    ...components,
  ]
})
export class ComponentsModule { }
