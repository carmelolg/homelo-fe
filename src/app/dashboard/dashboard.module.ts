import { CdkColumnDef } from '@angular/cdk/table';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { DemoMaterialModule } from '../demo-material-module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
      radius: 100
    }),
    RouterModule.forChild(DashboardRoutes)
  ],
  providers: [DatePipe, CdkColumnDef],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
