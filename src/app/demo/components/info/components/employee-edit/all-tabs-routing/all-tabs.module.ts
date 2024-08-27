import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTabsRoutingModule } from './all-tabs-routing.module';
import { EmployeeEditComponent } from '../employee-edit.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllTabsRoutingModule,
    EmployeeEditComponent,
    TranslateModule
  ]
})
export class AllTabsModule { }
