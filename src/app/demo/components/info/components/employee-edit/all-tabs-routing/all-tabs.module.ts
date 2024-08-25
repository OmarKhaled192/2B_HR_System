import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTabsRoutingModule } from './all-tabs-routing.module';
import { EmployeeEditComponent } from '../employee-edit.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllTabsRoutingModule,
    EmployeeEditComponent
  ]
})
export class AllTabsModule { }
