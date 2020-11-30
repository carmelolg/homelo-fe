import { ReactiveFormsModule } from '@angular/forms';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../demo-material-module';
import { DeviceComponent } from './device.component';
import { DeviceRoutes } from './device.routing';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(DeviceRoutes)
  ],
  providers: [DatePipe],
  declarations: [DeviceComponent, EditDialogComponent]
})
export class DeviceModule { }
