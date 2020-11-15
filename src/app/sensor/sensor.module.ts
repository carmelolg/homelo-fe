import { ReactiveFormsModule } from '@angular/forms';
import { CdkColumnDef } from '@angular/cdk/table';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { DemoMaterialModule } from '../demo-material-module';
import SensorComponent from './sensor.component';
import { SensorRoutes } from './sensor.routing';
import { SensorViewTableComponent } from './sensor-view-table/sensor-view-table.component';
import { SensorViewTableFiltersComponent } from './sensor-view-table/sensor-view-table-filters/sensor-view-table-filters.component';
import { SensorViewTableResultsComponent } from './sensor-view-table/sensor-view-table-results/sensor-view-table-results.component';
import { HumidityComponent } from './tabs/humidity/humidity.component';
import { TemperatureComponent } from './tabs/temperature/temperature.component';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
      radius: 100
    }),
    RouterModule.forChild(SensorRoutes)
  ],
  providers: [DatePipe, CdkColumnDef],
  declarations: [SensorComponent, SensorViewTableComponent, SensorViewTableFiltersComponent, SensorViewTableResultsComponent, HumidityComponent, TemperatureComponent]
})
export class SensorModule { }
