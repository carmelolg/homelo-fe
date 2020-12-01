import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutes } from './admin.routing';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { HousesComponent } from './houses/houses.component';



@NgModule({
  declarations: [AdminComponent, UsersComponent, HousesComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
